import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { IconWallet } from '@tabler/icons-react';

const Wallet = () => {
  const balance = 100; // Cambia este valor según tus necesidades

  const handleAddFunds = () => {
    // Lógica para agregar fondos a la billetera
    console.log('Añadir fondos a la billetera');
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
      <IconWallet size={64} color="#1976d2" />
      <Typography variant="h5" sx={{ margin: '16px 0', fontWeight: 'bold' }}>
        Billetera
      </Typography>
      <Typography variant="h6" sx={{ marginBottom: '16px', color: '#555' }}>
        Saldo: <strong>${balance.toFixed(2)}</strong>
      </Typography>
      <Button 
        variant="contained" 
        color="primary" 
        onClick={handleAddFunds} 
        sx={{
          '&:hover': {
            backgroundColor: '#1565c0', // Color al pasar el mouse
          },
        }}
      >
        Añadir Fondos
      </Button>
    </Box>
  );
};

export default Wallet;
