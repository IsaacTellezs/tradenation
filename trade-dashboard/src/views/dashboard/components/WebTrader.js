import React, { useState } from "react";
import { Card, Typography } from "@mui/material";
import { IconCash } from "@tabler/icons-react";

const WebTrader = () => {
  return (
    <Card
      sx={{
        backgroundColor: "#18181b",
        padding: 3,
        borderRadius: 2,
        textAlign: "center",
      }}
    >
      <Typography variant="body1" sx={{ color: "#e5e7eb", marginBottom: 2 }}>
        Usa las mismas credenciales de esta cuenta para acceder y utilizar
        nuestro WebTrader.
      </Typography>
      <button
        style={{
          backgroundColor: "#1d4ed8",
          color: "#ffffff",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Ir a WebTrader
      </button>
    </Card>
  );
};

export default WebTrader;
