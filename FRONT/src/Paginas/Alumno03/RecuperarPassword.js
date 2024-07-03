import React, { useState } from 'react';
import { Container, Box, TextField, Button, Typography } from '@mui/material';
import Header from '../../Componentes/Header1';
import Footer from '../../Componentes/Footer';

const usuariosMock = [
    { correo: 'correo@ejemplo.com', password: 'password123' },
    { correo: 'correo2@ejemplo.com', password: 'password123' },
];

const RecuperarPassword = () => {
    const [correo, setCorreo] = useState('');
    const [error, setError] = useState('');

    const manejarRecuperarPassword = (e) => {
        e.preventDefault();
        const usuario = usuariosMock.find(user => user.correo === correo);
        if (usuario) {
            alert('Correo de recuperación enviado');
        } else {
            setError('*Correo no encontrado');
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
                    onSubmit={manejarRecuperarPassword}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: 350,
                        padding: 3,
                        boxShadow: 'none',
                        backgroundColor: '#fff',
                        borderRadius: 0,
                    }}
                >
                    <Typography sx={{ marginBottom: 5, color: 'black', fontSize: 17, fontWeight: 'bold' }}>
                        Ingrese su correo para enviar contraseña
                    </Typography>
                    <TextField
                        label="email"
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                        variant="outlined"
                        fullWidth
                        sx={{ marginBottom: 2 }}
                    />
                    {error && (
                        <Typography sx={{ color: 'black', marginTop: 0, marginBottom: 0 }}>
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
                            marginTop: 3,
                            padding: '10px',
                            borderRadius: '5px',
                            '&:hover': {
                                backgroundColor: '#474646',
                            },
                        }}
                    >
                        Enviar
                    </Button>
                    <Box sx={{ marginTop: 5, textAlign: 'center', fontSize: 17 }}>
                        <a href="/IniciarSesion" style={{ color: 'black', textDecoration: 'outlined' }}>
                            Regresar a login
                        </a>
                    </Box>
                </Box>
            </Container>
            <Footer />
        </>
    );
};

export default RecuperarPassword;