import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {ModalProps} from '../../types/ModalProps'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: window.innerWidth <= 398 ? 300 : 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const styleButton = {
    position: 'absolute' as 'absolute',
    right: '0%',
    bottom: '0%',
    mt: 2,
    mb:2,
    mr:2,
    fontSize:12,
    backgroundColor:'#0B0D0E'
}



function BasicModal({title, body, open, handleClose}:ModalProps) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h4" component="h1">
          {title}
        </Typography>
        <Typography id="modal-modal-description" variant="h5" component="h1" sx={{ mt: 2,mb:window.innerWidth <= 398 ? 4 : 3}}>
          {body}
        </Typography>
        <Button onClick={handleClose} sx={styleButton} size="large" variant="contained"  color="primary">FECHAR</Button>
      </Box>
    </Modal>
  );
}

export default BasicModal;
