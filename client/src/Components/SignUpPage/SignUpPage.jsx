import {
  Avatar, Button, FormControl, Grid, InputLabel, MenuItem, Paper, Select, TextField, Typography,
} from '@mui/material';
import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CheckIcon from '@mui/icons-material/Check';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useForm } from 'react-hook-form';
import { signupUser } from '../../redux/slices/userSlice';

export default function SignUpPage() {
  const [role, setRole] = useState('');
  const {
    register, handleSubmit, setError, clearErrors, formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const paperStyle = {
    padding: 20, height: 442, width: 350, margin: 'auto',
  };

  const avatarStyle = {
    backgroundColor: '#64451C',
  };

  const buttonStyle = {
    marginTop: 20,
    backgroundColor: '#64451C',
    fontSize: 17,
  };
  const formRef = useRef();

  const handleChange = (event) => {
    setRole(event.target.value);
  };
  const onSubmit = (data) => { dispatch(signupUser({ ...Object.fromEntries(new FormData(formRef.current)), role }, setError, navigate)); };
  return (
    <form ref={formRef} onSubmit={(e) => { clearErrors(); handleSubmit(onSubmit)(e); }}>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}><AccountCircleIcon /></Avatar>
            <Typography component="h4" variant="h4">Registration</Typography>
          </Grid>
          <TextField
            variant="standard"
            name="name"
            label="Name"
            placeholder="Enter your name"
            fullWidth
            required
          />
          <TextField
            variant="standard"
            name="surname"
            label="Surname"
            placeholder="Enter your surname"
            fullWidth
            required
          />
          <TextField
            variant="standard"
            name="login"
            label="Login"
            placeholder="Enter your login"
            fullWidth
            {...register('login', { required: 'required' })}
            error={!!errors.login || !!errors.error}
            helperText={errors?.login ? errors.login.message : errors.error?.message}
          />

          <TextField
            variant="standard"
            name="password"
            label="Password"
            placeholder="Enter your password"
            type="password"
            fullWidth
            required
          />
          <FormControl variant="standard" fullWidth sx={{ mt: 1 }}>
            <InputLabel id="demo-simple-select-label">Role</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={role}
              label="Role"
              onChange={handleChange}
            >
              <MenuItem value="admin">Admin</MenuItem>
              <MenuItem value="staff">Staff</MenuItem>
            </Select>
          </FormControl>
          <Button style={buttonStyle} type="submit" variant="contained" fullWidth>
            <CheckIcon sx={{ mr: 1, mb: '3px' }} />
            Register
          </Button>
        </Paper>
      </Grid>
    </form>
  );
}
