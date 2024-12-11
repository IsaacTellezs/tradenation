import React, { useEffect } from 'react';
import {
    Box,
    Typography,
    FormGroup,
    FormControlLabel,
    Button,
    Stack,
    Checkbox
} from '@mui/material';
import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';
import { useAuth } from '../../../context/AuthContext';
import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';



const AuthLogin = ({ title, subtitle, subtext }) => { 
    
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {signin, errors: signinErrors, isAutenticated} = useAuth();
    const navigate = useNavigate();

    const onSubmit = handleSubmit (data => {
        signin(data);
    })

    useEffect(() => {
        if(isAutenticated) navigate("/");
    }, [isAutenticated]);


    return(
    <>
        {title ? (
            <Typography fontWeight="700" variant="h2" mb={1}>
                {title}
            </Typography>
        ) : null}

        {subtext}

        
        <Box component="form" onSubmit={onSubmit}>
                {
                    signinErrors.map((error, i) => (
                        <Typography 
                        color="error" key={i}>
                            {error}
                        </Typography>
                    ))
                }
                <Stack mb={3}>
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
                    Iniciar sesión
                </Button>
            </Box>
        {subtitle}
    </>
)};

export default AuthLogin;
