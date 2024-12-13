import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Avatar,
  IconButton,
} from "@mui/material";
import { IconSettings } from "@tabler/icons-react";
import { useAuth } from "../../../context/AuthContext";
const Welcome = () => {
  const { user } = useAuth();
  const Favatar = user?.name?.charAt(0) || '';
  return (
    <Card
      sx={{
        background: "linear-gradient(90deg, #1e40af, #1d4ed8)",
        borderRadius: 4,
        color: "#ffffff",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
      }}
    >
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          {/* Información del Usuario */}
          <Box display="flex" alignItems="center">
            <Avatar
              sx={{
                bgcolor: "#ffffff",
                color: "#1d4ed8",
                width: 60,
                height: 60,
                marginRight: 2,
              }}
            >
              {Favatar}
            </Avatar>
            <Box>
              <Typography variant="h5" fontWeight="bold">
                ¡Bienvenido!
              </Typography>
              <Typography variant="subtitle1" fontSize="1rem">
                {user.name }
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  backgroundColor: "#22c55e",
                  color: "#ffffff",
                  padding: "3px 8px",
                  borderRadius: 16,
                  fontWeight: "bold",
                  display: "inline-block",
                  marginTop: 1,
                }}
              >
                Verificado
              </Typography>
            </Box>
          </Box>
          {/* Botón de Configuración */}
          <IconButton sx={{ color: "#ffffff" }}>
            <IconSettings size={24} />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Welcome;
