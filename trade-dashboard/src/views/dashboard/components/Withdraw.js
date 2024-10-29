import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

const Withdraw = () => {
  const [amount, setAmount] = useState('');

  const handleWithdraw = () => {
    // Lógica para retirar fondos
    console.log(`Retirar: $${amount}`);
    // Resetear el campo después de retirar
    setAmount('');
  };

  return (
    <Box
      sx={{
        padding: '24px',
        borderRadius: '12px',
        boxShadow: 3,
        backgroundColor: '#f9f9f9',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Typography variant="h5" sx={{ margin: '16px 0', fontWeight: 'bold' }}>
        Retirar Fondos
      </Typography>
      <TextField
        label="Cantidad a retirar"
        variant="outlined"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        sx={{
          marginBottom: '16px',
          width: '100%',
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#1976d2', // Color del borde
            },
            '&:hover fieldset': {
              borderColor: '#1565c0', // Color al pasar el mouse
            },
            '&.Mui-focused fieldset': {
              borderColor: '#1976d2', // Color al tener foco
            },
          },
        }}
      />
      <Button 
        variant="contained" 
        color="secondary" 
        onClick={handleWithdraw} 
        sx={{
          '&:hover': {
            backgroundColor: '#b71c1c', // Color al pasar el mouse
          },
        }}
      >
        Retirar
      </Button>
    </Box>
  );
};

export default Withdraw;
