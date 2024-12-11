import React, { useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';
import { Stack } from '@mui/system';
import { useAuth } from '../../../context/AuthContext';
import { useNavigate } from 'react-router';


const AuthRegister = ({ title, subtitle, subtext }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {signup, isAutenticated, errors: registerErrors} = useAuth();
    const navigate = useNavigate();

    const onSubmit = handleSubmit (async (values) => {
        signup(values);
        
    });

    useEffect(() => {
        if(isAutenticated) navigate("/");
    }, [isAutenticated]);


    return (
        <>
            {title && (
                <Typography fontWeight="700" variant="h2" mb={1}>
                    {title}
                </Typography>
            )}

            {subtext}

            <Box component="form" onSubmit={onSubmit}>
                {
                    registerErrors.map((error, i) => (
                        <Typography 
                        color="error" key={i}>
                            {error}
                        </Typography>
                    ))
                }
                <Stack mb={3}>
                    <Typography component="label" htmlFor="name" sx={{ mb: "5px" }}>
                        Nombre
                    </Typography>
                    <CustomTextField
                        id="name"
                        variant="outlined"
                        fullWidth
                        {...register("name", { required: "El nombre es obligatorio" })}
                    />
                    {errors.name && <Typography color="error">{errors.name.message}</Typography>}

                    <Typography component="label" htmlFor="email" sx={{ mt: "25px", mb: "5px" }}>
                        Email
                    </Typography>
                    <CustomTextField
                        id="email"
                        variant="outlined"
                        fullWidth
                        {...register("email", { required: "El email es obligatorio" })}
                    />
                    {errors.email && <Typography color="error">{errors.email.message}</Typography>}

                    <Typography component="label" htmlFor="password" sx={{ mt: "25px", mb: "5px" }}>
                        Password
                    </Typography>
                    <CustomTextField
                        id="password"
                        variant="outlined"
                        fullWidth
                        {...register("password_hash", { required: "La contraseña es obligatoria" })}
                    />
                    {errors.password && (
                        <Typography color="error">{errors.password.message}</Typography>
                    )}
                </Stack>
                <Button type="submit" color="primary" variant="contained" size="large" fullWidth>
                    Registrate
                </Button>
            </Box>

            {subtitle}
        </>
    );
};

export default AuthRegister;
