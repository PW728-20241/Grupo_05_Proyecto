import React, { useState, useEffect } from "react";
import { Box, Button, Container, CssBaseline, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography, Pagination } from '@mui/material';
import Header from '../../Componentes/Header2';
import Footer from '../../Componentes/Footer';
import BarLateral from '../../Componentes/BarraLateral2';
import ContenidoTabla from './ContenidoTablaProd';
import { Link as RouterLink } from 'react-router-dom';

function AdminProducto (){
    const [data, setData] = useState([]);
    const [allData, setAllData] = useState([]);
    const [searchParams, setSearchParams] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const productosPorPagina = 5;

    const fetchData = async () => {
        try {
            const URL_base = 'http://localhost:3100/';
            const response = await fetch(URL_base + 'productos');
            const result = await response.json();
            setData(result);
            setAllData(result);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const filtrarID = async () => {
        if (searchParams.trim() === '') {
            setData(allData); // Fetch all products if search Params is empty
            setCurrentPage(1);
            return;
        }
        
        try {
            const URL_base = 'http://localhost:3100/';
            const response = await fetch(`${URL_base}producto/id/${searchParams}`);
            if (!response.ok) {
                throw new Error('Producto no encontrado');
            }
            const result = await response.json();
            setData([result]); // Set data to an array with a single product
            setCurrentPage(1);
        } catch (error) {
            console.error('Error fetching product:', error);
            setData([]); // Clear the data if the product is not found
        }
    };

    // Calculate the products to display on the current page
    const indexOfLastProduct = currentPage * productosPorPagina;
    const indexOfFirstProduct = indexOfLastProduct - productosPorPagina;
    const currentProducts = data.filter(producto => producto.estado !== 'Eliminado').slice(indexOfFirstProduct, indexOfLastProduct);

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
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
                        <Button component={RouterLink} to={`/AgregarProducto`} variant="contained" style={{ backgroundColor: '#FFEB3B', color: 'black', fontWeight: 'bold' }}>
                            Agregar Producto
                        </Button>
                    </Box>
                    <TextField
                        id="buscarP"
                        label="Buscar por ID, Nombre o Editor"
                        variant="outlined"
                        fullWidth
                        sx={{ mb: 2 }}
                        value={searchParams}
                        onChange={(e) => setSearchParams(e.target.value)}
                        InputProps={{
                            endAdornment: (
                                <Button
                                    type="button"
                                    onClick={filtrarID}
                                    variant="contained"
                                    component="label"
                                    style={{ backgroundColor: '#FFEB3B', color: 'black', fontWeight: 'bold' }}
                                >
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
                                    <TableCell style={{ textAlign: 'center' }}>Nombre</TableCell>
                                    <TableCell style={{ textAlign: 'center' }}>Editor</TableCell>
                                    <TableCell style={{ textAlign: 'center' }}>Precio (S/)</TableCell>
                                    <TableCell style={{ textAlign: 'center' }}>Fecha de Registro</TableCell>
                                    <TableCell style={{ textAlign: 'center' }}>Stock</TableCell>
                                    <TableCell style={{ textAlign: 'center' }}>Estado</TableCell>
                                    <TableCell style={{ textAlign: 'center' }}>Acciones</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {currentProducts.length > 0 ? currentProducts.map((producto, index) => (
                                    <ContenidoTabla key={index} producto={producto}/>
                                )) : (
                                    <TableRow>
                                        <TableCell colSpan={8} style={{ textAlign: 'center' }}>No hay datos disponibles</TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                        <Pagination 
                            count={Math.ceil(data.filter(producto => producto.estado !== 'Eliminado').length / productosPorPagina)} 
                            page={currentPage} 
                            onChange={handlePageChange} 
                        />
                    </Box>
                </Container>
            </Box>
            <Footer />
        </>
    );
};

export default AdminProducto;
