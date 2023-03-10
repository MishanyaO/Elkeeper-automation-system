import { Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { editReceiptItemAsync } from '../../redux/slices/receiptSlice';
import { sendMail } from '../../redux/slices/mailSlice';
import { clearOrder } from '../../redux/slices/orderSlice';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'green',
  border: '2px solid #000',
  borderRadius: 3,
  boxShadow: 24,
  color: 'white',
  p: 4,
};

export default function CloseCheckButton({ total }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const receipt = useSelector((state) => state.receipt);
  const order = useSelector((state) => state.order);
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const CloseButton = styled(Button)({
    height: 50,
    width: 250,
    margin: '100px auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'wheat',
    '&:hover': {
      backgroundColor: '#CBC02F',
    },
  });
  const myData = {
    user: user?.name,
    guests: 2,
    table: id,
    total: total.toFixed(2) || 0,
  };
  const handleSubmit = (data) => {
    dispatch(sendMail(data));
    dispatch(editReceiptItemAsync(receipt.id, total.toFixed(2)));
    dispatch(clearOrder());
    handleOpen();
  };

  return (
    <>
      <CloseButton
        onClick={() => handleSubmit(myData)}
      >
        <CurrencyRubleIcon fontSize="large" sx={{ color: 'black', mr: 1, mb: 1 }} />
        <Typography sx={{ color: 'black' }}>
          Make out and send a bill
        </Typography>
      </CloseButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Sent!
          </Typography>
        </Box>
      </Modal>
    </>
  );
}
