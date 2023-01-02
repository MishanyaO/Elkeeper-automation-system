import SendIcon from '@mui/icons-material/Send';
import {
  Box, Button, FormControl, FormHelperText, MenuItem, Select, TextField, Typography,
} from '@mui/material';
import { grey } from '@mui/material/colors';
import { gridClasses } from '@mui/system';
import { styled } from '@mui/material/styles';
import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMenuItemAsync, getCategoriesList } from '../../redux/slices/menuSlice';

function MenuTable({
  rows, columns, rowId, setRowId,
}) {
  const [pageS, setPageSize] = useState(6);
  const categories = useSelector((state) => state.menu.categories);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!categories.length) {
      dispatch(getCategoriesList());
    }
  }, []);
  const handleSubmit = (event, data) => {
    event.preventDefault();
    dispatch(addMenuItemAsync(data));
    event.target.reset();
  };

  const StyledButton = styled(Button)({
    marginLeft: 10,
    backgroundColor: '#64451C',
    marginTop: 7,
    '&:hover': {
      backgroundColor: '#997647',
    },
  });

  return (
    <Box sx={{ height: '480px', width: '90%', ml: -5 }}>
      <Typography
        variant="h4"
        component="h4"
        sx={{
          textAlign: 'center', mb: 3, mr: 3, color: 'white', ml: 10,
        }}
      >
        Menu management
      </Typography>
      <DataGrid
        columns={columns}
        rows={rows}
        pageSize={pageS}
        rowsPerPageOptions={[7]}
        getRowSpacing={(params) => ({
          top: params.isFirstVisible ? 0 : 5,
          bottom: params.isLastVisible ? 0 : 5,
        })}
        sx={{
          [`& .${gridClasses.row}`]: {
            background: grey[200],
          },
          backgroundColor: 'white',
          ml: 10,
        }}
        onCellEditCommit={(params) => setRowId(params.id)}
        getRowId={(row) => row.id}
      />
      <Typography
        variant="h5"
        component="h5"
        sx={{
          textAlign: 'center', mt: 3, mb: 3, ml: -10, color: 'white', marginLeft: 10,
        }}
      >
        Add a dish
      </Typography>
      <form onSubmit={(event) => handleSubmit(event, Object.fromEntries(new FormData(event.target)))} style={{ marginLeft: 100 }}>
        <FormControl>
          <TextField variant="filled" label="title" name="title" sx={{ backgroundColor: 'white', color: 'black' }} />

        </FormControl>
        <FormControl>
          <TextField variant="filled" label="description" name="description" sx={{ backgroundColor: 'white', color: 'black' }} />

        </FormControl>
        <FormControl>
          <TextField
            variant="filled"
            label="price"
            name="price"
            sx={{
              backgroundColor: 'white', color: 'black', width: 100, mr: 2,
            }}
          />

        </FormControl>
        <FormControl variant="standard">
          <Select
            name="category"
            defaultValue=""
            value={categories.title}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            sx={{
              width: 170, color: 'black', backgroundColor: 'white', height: 55, pl: 1,
            }}
          >
            {categories?.map((item) => (
              <MenuItem
                key={item.id}
                value={item.title}
                sx={{ color: 'black' }}
              >
                {item.title}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText sx={{ color: 'white' }}>Category</FormHelperText>
        </FormControl>
        <StyledButton type="submit" variant="contained" endIcon={<SendIcon />}>
          <Typography sx={{ mt: '4px', fontSize: 14 }}>
            Add
          </Typography>
        </StyledButton>
      </form>
    </Box>
  );
}

export default MenuTable;
