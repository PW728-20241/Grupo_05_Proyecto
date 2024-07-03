import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Box, TextField, Button, Typography } from '@mui/material';
import Header from '../../Componentes/Header1';
import Footer from '../../Componentes/Footer';

const usuariosMock = [];

const Registrar = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const manejarRegistro = (e) => {
        e.preventDefault();
        
        if (!nombre || !apellido || !correo || !password || !confirmPassword) {
            setError('*Todos los campos son obligatorios');
            return;
        }

        if (password !== confirmPassword) {
            setError('*Las contraseñas no coinciden');
            return;
        }

        const nuevoUsuario = { nombre, apellido, correo, password };
        usuariosMock.push(nuevoUsuario);
        alert('Registro exitoso');
        navigate('/IniciarSesion');
    };

    return (
        <>
            <Header />
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '74.5vh',
                    backgroundColor: '#fffff',
                }}
            >
                <Box
                    component="form"
                    onSubmit={manejarRegistro}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: 400,
                        padding: 3,
                        boxShadow: 'none',
                        backgroundColor: '#fff',
                        borderRadius: 0,
                    }}
                >
                    <Typography sx={{ marginBottom: 5, color: '#333', fontSize: 18, fontWeight: 'bold' }}>
                        Registra una nueva cuenta
                    </Typography>
                    <TextField
                        label="Nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        variant="outlined"
                        fullWidth
                        sx={{ marginBottom: 2 }}
                    />
                    <TextField
                        label="Apellido"
                        value={apellido}
                        onChange={(e) => setApellido(e.target.value)}
                        variant="outlined"
                        fullWidth
                        sx={{ marginBottom: 2 }}
                    />
                    <TextField
                        label="Correo"
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                        variant="outlined"
                        fullWidth
                        sx={{ marginBottom: 2 }}
                    />
                    <TextField
                        label="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        variant="outlined"
                        fullWidth
                        sx={{ marginBottom: 2 }}
                    />
                    <TextField
                        label="Confirm Password"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        variant="outlined"
                        fullWidth
                        sx={{ marginBottom: 2 }}
                    />
                    {error && (
                        <Typography sx={{ color: 'black', marginTop: 2, marginBottom: 0 }}>
                            {error}
                        </Typography>
                    )}
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{
                            width: '100%',
                            backgroundColor: '#000000',
                            color: '#fff',
                            marginTop: 5,
                            padding: '10px',
                            borderRadius: '5px',
                            '&:hover': {
                                backgroundColor: '#474646',
                            },
                        }}
                    >
                        Crear nueva cuenta
                    </Button>
                </Box>
            </Container>
            <Footer />
        </>
    );
};

export default Registrar;