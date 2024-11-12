import { Button } from '@mui/material'
import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const LogoutButton = () => {

    const {logout} = useAuth0();
  return (
    <Button variant="outlined" color="primary" fullWidth onClick={() => logout()}>
        Cerrar sesión
    </Button>
  )
}

export default LogoutButton