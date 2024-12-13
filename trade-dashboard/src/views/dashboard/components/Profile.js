import React, { useState } from 'react';
import { Card, Typography } from '@mui/material';
import { IconUserCircle } from '@tabler/icons-react';
import { useNavigate } from 'react-router';

const Profile = () => {
  const navigate = useNavigate();

  return ( 
    <Card
      onClick={() => navigate("/profile")}
      sx={{
        maxWidth: 300,
        margin: "auto",
        boxShadow: 3,
        backgroundColor: "#1e1e2f",
        color: "white",
        borderRadius: 2,
        padding: 2,
        textAlign: "center",
        cursor: "pointer",
        transition: "transform 0.2s",
        '&:hover': {
          transform: "scale(1.05)",
        },
      }}
    >
      <IconUserCircle size={50} style={{ marginBottom: 8 }}/>
      <Typography variant="h6" component="div" sx={{ marginBottom: 1 }}>
        Profile
      </Typography>
      <Typography variant="body2" sx={{ marginBottom: 2 }}>
        Administra tu información.
      </Typography>
    </Card>
  );
};

export default Profile;
