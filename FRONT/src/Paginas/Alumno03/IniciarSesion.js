import React, { useState } from 'react';
import { Container, Box, TextField, Button, Typography } from '@mui/material';
import Header from '../../Componentes/Header1';
import Footer from '../../Componentes/Footer';

const usuariosMock = [
    { correo: 'correo@ejemplo.com', password: 'password123' },
    { correo: 'correo2@ejemplo.com', password: 'password123' },
];

const IniciarSesion = () => {
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const manejarIniciarSesion = (e) => {
        e.preventDefault();
        const usuario = usuariosMock.find(user => user.correo === correo && user.password === password);
        if (usuario) {
            localStorage.setItem('usuario', JSON.stringify(usuario));
            alert('Inicio de sesión exitoso');
        } else {
            setError('*Email o password incorrectos');
        }
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
                    onSubmit={manejarIniciarSesion}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: 350,
                        padding: 3,
                        boxShadow: 'none',
                        backgroundColor: '#fffff',
                        borderRadius: 0,
                    }}
                >
                    <Typography sx={{ marginBottom: 5, color: '#333', fontSize: 18, fontWeight: 'bold' }}>
                        Ingreso para clientes registrados
                    </Typography>
                    <TextField
                        label="email"
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                        variant="outlined"
                        fullWidth
                        sx={{ marginBottom: 2 }}
                    />
                    <TextField
                        label="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        variant="outlined"
                        fullWidth
                        sx={{ marginBottom: 2 }}
                    />
                    {error && (
                        <Typography sx={{ color: 'black', marginTop: 2, marginBottom: 3 }}>
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
                            padding: '10px',
                            borderRadius: '5px',
                            '&:hover': {
                                backgroundColor: '#474646',
                            },
                        }}
                    >
                        Ingresar
                    </Button>
                    <Box sx={{ marginTop: 2, textAlign: 'center', fontSize: 17 }}>
                        <a href="/RecuperarPassword" style={{ color: 'black', textDecoration: 'outlined' }}>
                            Olvidé mi password
                        </a>
                        <br />
                        <a href="/Registrar" style={{ color: 'black', textDecoration: 'outlined' }}>
                            No tengo cuenta, deseo registrarme
                        </a>
                    </Box>
                </Box>
            </Container>
            <Footer />
        </>
    );
};

export default IniciarSesion;