import React, { useState } from "react";
import { Box, Button, Container, Grid, Paper, Typography, CssBaseline, TextField } from '@mui/material';
import Header from '../../Componentes/Header2';
import Footer from '../../Componentes/Footer';
import BarLateral from '../../Componentes/BarraLateral2';

const AgregarProducto = () => {
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [caracteristicas, setCaracteristicas] = useState('');
    const [marca, setMarca] = useState('');
    const [serie, setSerie] = useState('');
    const [precio, setPrecio] = useState('');
    const [stock, setStock] = useState('');
    const [tipo, setTipo] = useState('');
    const [imagen, setImagen] = useState(null);

    const manejarGuardar = async () => {
        const nuevoProducto = { nombre, descripcion, caracteristicas, marca, serie, precio, stock, tipo, imageUrl: '' };

        // Aquí puedes agregar la lógica para manejar la imagen si es necesario

        try {
            const response = await fetch('http://localhost:3100/productos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(nuevoProducto)
            });

            if (response.ok) {
                alert('Producto guardado exitosamente');
                // Limpiar los campos del formulario
                setNombre('');
                setDescripcion('');
                setCaracteristicas('');
                setMarca('');
                setSerie('');
                setPrecio('');
                setStock('');
                setTipo('');
                setImagen(null);
            } else {
                alert('Error al guardar el producto');
            }
        } catch (error) {
            console.error('Error al guardar el producto:', error);
            alert('Error al guardar el producto');
        }
    };

    return (
        <>
            <Header />
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <BarLateral />
                <Container component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <Paper sx={{ p: 3, mb: 2 }}>
                        <Typography variant="h4" gutterBottom style={{ fontWeight: 'bold' }}>
                            Agregar Producto
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <Paper variant="outlined" sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Button variant="contained" component="label" style={{ backgroundColor: '#FFEB3B', color: 'black', fontWeight: 'bold' }}>
                                        Agregar Imagen
                                        <input type="file" hidden onChange={(e) => setImagen(e.target.files[0])} />
                                    </Button>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField label="Nombre" variant="outlined" fullWidth sx={{ mb: 2 }} value={nombre} onChange={(e) => setNombre(e.target.value)} />
                                <TextField label="Descripción" variant="outlined" fullWidth multiline rows={2} sx={{ mb: 2 }} value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
                                <TextField label="Características" variant="outlined" fullWidth multiline rows={2} sx={{ mb: 2 }} value={caracteristicas} onChange={(e) => setCaracteristicas(e.target.value)} />
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <TextField label="Marca" variant="outlined" fullWidth value={marca} onChange={(e) => setMarca(e.target.value)} />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField label="Serie" variant="outlined" fullWidth value={serie} onChange={(e) => setSerie(e.target.value)} />
                                    </Grid>
                                </Grid>
                                <Grid container spacing={2} sx={{ mt: 2 }}>
                                    <Grid item xs={6}>
                                        <TextField label="Precio" variant="outlined" fullWidth InputProps={{ startAdornment: 'S/', inputProps: { min: 1, step: 0.10 } }} type="number" value={precio} onChange={(e) => setPrecio(e.target.value)} />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField label="Stock" variant="outlined" fullWidth type="number" InputProps={{ inputProps: { min: 1 } }} value={stock} onChange={(e) => setStock(e.target.value)} />
                                    </Grid>
                                </Grid>
                                <Grid container spacing={2} sx={{ mt: 2 }}>
                                    <Grid item xs={6}>
                                        <TextField label="Tipo" variant="outlined" fullWidth value={tipo} onChange={(e) => setTipo(e.target.value)} />
                                    </Grid>
                                </Grid>
                                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
                                    <Button variant="contained" style={{ backgroundColor: '#FFEB3B', color: 'black', fontWeight: 'bold' }} onClick={manejarGuardar}>
                                        Guardar
                                    </Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </Paper>
                </Container>
            </Box>
            <Footer />
        </>
    );
};

export default AgregarProducto;
