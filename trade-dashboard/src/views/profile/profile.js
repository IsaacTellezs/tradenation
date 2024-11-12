import React from 'react';
import { Grid, Box, Typography, TextField, Paper, Button } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {

    const {user} = useAuth0();
    console.log(user);
    return (
        <PageContainer>
            <Box sx={{ padding: 4 }}>
                <Typography variant="h4" gutterBottom>
                    Perfil de Usuario
                </Typography>
                
                <Grid container spacing={3}>
                    {/* Nombre de Usuario y Fecha de Registro */}
                    <Grid item xs={12}>
                        <Paper elevation={3} sx={{ padding: 4 }}>
                            <Typography variant="h5" gutterBottom>
                                Información General
                            </Typography>
                            <TextField
                                fullWidth
                                label="Nombre de Usuario"
                                variant="outlined"
                                margin="normal"
                                value={user.nickname || ''}
                            />
                            <TextField
                                fullWidth
                                label="Fecha de Registro"
                                variant="outlined"
                                margin="normal"
                                type="date"
                                InputLabelProps={{ shrink: true }}
                                value={new Date(user.updated_at).toISOString().split('T')[0]}
                            />
                        </Paper>
                    </Grid>

                    {/* Datos Personales */}
                    <Grid item xs={12} md={6}>
                        <Paper elevation={3} sx={{ padding: 4 }}>
                            <Typography variant="h6" gutterBottom>
                                Datos Personales
                            </Typography>
                            <TextField
                                fullWidth
                                label="Nombre Completo"
                                variant="outlined"
                                margin="normal"
                                value={user.name || ''}
                            />
                            <TextField
                                fullWidth
                                label="Correo Electrónico"
                                variant="outlined"
                                margin="normal"
                                value={user.email || ''}
                            />
                            <TextField
                                fullWidth
                                label="Teléfono"
                                variant="outlined"
                                margin="normal"
                            />
                        </Paper>
                    </Grid>

                    {/* Documentos */}
                    <Grid item xs={12} md={6}>
                        <Paper elevation={3} sx={{ padding: 4 }}>
                            <Typography variant="h6" gutterBottom>
                                Documentos
                            </Typography>
                            <TextField
                                fullWidth
                                label="Número de Pasaporte"
                                variant="outlined"
                                margin="normal"
                            />
                            <TextField
                                fullWidth
                                label="Subir Documento"
                                variant="outlined"
                                margin="normal"
                                type="file"
                                InputLabelProps={{ shrink: true }}
                            />
                        </Paper>
                    </Grid>

                    {/* Dirección */}
                    <Grid item xs={12}>
                        <Paper elevation={3} sx={{ padding: 4 }}>
                            <Typography variant="h6" gutterBottom>
                                Datos de Dirección
                            </Typography>
                            <TextField
                                fullWidth
                                label="Dirección"
                                variant="outlined"
                                margin="normal"
                            />
                            <TextField
                                fullWidth
                                label="Ciudad"
                                variant="outlined"
                                margin="normal"
                            />
                            <TextField
                                fullWidth
                                label="Código Postal"
                                variant="outlined"
                                margin="normal"
                            />
                        </Paper>
                    </Grid>
                </Grid>

                {/* Botón de Guardar Cambios */}
                <Box mt={4} display="flex" justifyContent="center">
                    <Button variant="contained" color="primary" size="large">
                        Guardar Cambios
                    </Button>
                </Box>
            </Box>
        </PageContainer>
    );
};

export default Profile;
