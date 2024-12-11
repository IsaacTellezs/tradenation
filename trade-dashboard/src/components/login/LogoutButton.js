import { Button } from '@mui/material'
import React from 'react'
import { useAuth } from '../../context/AuthContext';

const LogoutButton = () => {

    const {logout} = useAuth();
  return (
    <Button variant="outlined" color="primary" fullWidth onClick={() => logout()}>
        Cerrar sesión
    </Button>
  )
}

export default LogoutButton