import React, { useState } from "react";
import { Card, Typography } from "@mui/material";
import { IconCash } from "@tabler/icons-react";

const Data = () => {
  return (
    <Card sx={{ backgroundColor: "#27272a", padding: 3, borderRadius: 2 }}>
      <Typography
        variant="h6"
        sx={{ color: "#ffffff", fontWeight: "bold", marginBottom: 1 }}
      >
        Datos de cuenta
      </Typography>
      <Typography variant="body2" sx={{ color: "#e5e7eb" }}>
        Folio: <strong>12210000484</strong>
      </Typography>
      <Typography variant="body2" sx={{ color: "#e5e7eb" }}>
        Fondos: <strong>$0</strong>
      </Typography>
    </Card>
  );
};

export default Data;
