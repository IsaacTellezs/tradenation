import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { IconWallet } from '@tabler/icons-react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51QFlUzJBZRPS6dKMorHduY0qM7JGeXKqwHEHASfpTNDQXsk3e1QxU62qIKGOnNCrEWbIsVbsELo8aAieN93tpEMU00qM9OMXTj'); // Reemplaza con tu clave pública

const Wallet = () => {
  const [balance, setBalance] = useState(0); // Estado para el saldo inicial

  const handleAddFunds = async () => {
    const stripe = await stripePromise;

    // Lógica para crear un pago en tu backend
    const response = await fetch('http://localhost:5000/create-checkout-session', { // Asegúrate de que la URL sea correcta
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: 5000 }), // Cantidad en centavos ($50.00)
    });

    if (response.ok) {
      const session = await response.json();

      // Redirigir a Stripe Checkout
      const { error } = await stripe.redirectToCheckout({ sessionId: session.id });

      if (error) {
        console.error('Error al redirigir a Checkout:', error);
      }
      
    } else {
      console.error('Error al crear la sesión de pago');
    }
  };

  const handlePaymentSuccess = (newFunds) => {
    // Esta función simula la actualización del saldo
    setBalance((prevBalance) => prevBalance + newFunds); // Aumentar el saldo en la cantidad que se desee
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

      {/* Simulador de éxito de pago para pruebas */}
      <Button 
        variant="outlined" 
        color="secondary" 
        onClick={() => handlePaymentSuccess(50)} // Aumentar el saldo en $50.00 para pruebas
        sx={{
          marginTop: '16px',
        }}
      >
        Simular Pago Exitoso
      </Button>
    </Box>
  );
};

export default Wallet;
