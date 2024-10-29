import React from 'react';
import { Box, Typography } from '@mui/material';
import qrCodeImage from '../../../assets/images/qr-code.png'; // Asegúrate de ajustar la ruta según sea necesario

const QRCodeDisplay = () => {
  return (
    <Box
      sx={{
        padding: '16px',
        borderRadius: '8px',
        boxShadow: 3,
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography variant="h5" sx={{ margin: '16px 0' }}>
        Código QR
      </Typography>
      {/* Imagen del código QR */}
      <img 
        src={qrCodeImage} 
        alt="Código QR" 
        style={{ width: '128px', height: '128px', margin: '16px 0' }} 
      />
      <Typography variant="body2" sx={{ textAlign: 'center' }}>
        Recibe fondos de otros usuarios.
      </Typography>
    </Box>
  );
};

export default QRCodeDisplay;
