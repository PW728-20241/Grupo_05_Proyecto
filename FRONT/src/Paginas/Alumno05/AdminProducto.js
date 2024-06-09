import React, { useState, useEffect } from "react";
import { Box, Button, Container, CssBaseline, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography, Pagination } from '@mui/material';
import Header from '../../Componentes/Header2';
import Footer from '../../Componentes/Footer';
import BarLateral from '../../Componentes/BarraLateral2';
import ContenidoTabla from './ContenidoTablaProd';
const AdminProducto = () => {
    const [data, setData] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    async function buscarProducto(query = "") {
        const URL_base = "http://localhost:3100/productos";
        const url = query ? `${URL_base}-url?id=${query}&detalle=${query}&serie=${query}&estado=${query}` : URL_base;
        
        try {
            const respuesta = await fetch(url);
            if (respuesta.status === 200) {
                const data = await respuesta.json();
                setData(data);
            } else {
                alert("Producto no existe");
            }
        } catch (error) {
            console.error('Error al obtener los datos', error);
        }
    }

    useEffect(() => {
        buscarProducto();
    }, []);

    const handleSearch = () => {
        buscarProducto(searchQuery);
    };

    return (
        <>
            <Header />
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <BarLateral />
                <Container component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                        <Typography variant="h4" style={{ fontWeight: 'bold' }}>Productos</Typography>
                        <Button variant="contained" component="label" style={{ backgroundColor: '#FFEB3B', color: 'black', fontWeight: 'bold' }}>
                            Agregar Producto
                        </Button>
                    </Box>
                    <TextField id="buscarP" label="Buscar por ID, Detalle, Serie o Estado" variant="outlined" fullWidth sx={{ mb: 2 }} value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                        InputProps={{
                            endAdornment: (
                                <Button type="button" onClick={handleSearch} variant="contained" component="label" style={{ backgroundColor: '#FFEB3B', color: 'black', fontWeight: 'bold' }}>
                                    Buscar
                                </Button>
                            ),
                        }}
                    />
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell style={{ textAlign: 'center' }}>ID</TableCell>
                                    <TableCell style={{ textAlign: 'center' }}>Detalle</TableCell>
                                    <TableCell style={{ textAlign: 'center' }}>Serie</TableCell>
                                    <TableCell style={{ textAlign: 'center' }}>Precio</TableCell>
                                    <TableCell style={{ textAlign: 'center' }}>Fecha de Registro</TableCell>
                                    <TableCell style={{ textAlign: 'center' }}>Stock</TableCell>
                                    <TableCell style={{ textAlign: 'center' }}>Estado</TableCell>
                                    <TableCell style={{ textAlign: 'center' }}>Acciones</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.length > 0 ? data.map((item, index) => (
                                    <ContenidoTabla key={index}/>
                                )) : (
                                    <TableRow>
                                        <TableCell colSpan={8} style={{ textAlign: 'center' }}>No hay datos disponibles</TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                        <Pagination />
                    </Box>
                </Container>
            </Box>
            <Footer />
        </>
    );
};

export default AdminProducto;
