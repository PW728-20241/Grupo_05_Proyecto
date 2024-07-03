// FRONT/src/Paginas/Alumno03/DashboardUsuario.js

import React, { useState, useEffect } from 'react';
import { Container, Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Select, MenuItem, FormControl, InputLabel, Pagination, Link } from '@mui/material';
import Header from '../../Componentes/Header1';
import Footer from '../../Componentes/Footer';

const ordenesMock = [
    { id: 1, fecha: '2024-06-30', total: 100, estado: 'Completada', detalle: 'Orden x3 Items (Juego de cartas, juego de cartas...)', direccion: 'Jiron Huascar 123, Jesus Maria, Lima, Peru', numeroOrden: '12345232' },
    { id: 2, fecha: '2024-07-01', total: 200, estado: 'Pendiente', detalle: 'Orden x4 Items (Pokemon Red, Pokemon Blue, Ghost of Tsushima)', direccion: 'Jiron Huascar 123, Jesus Maria, Lima, Peru', numeroOrden: '12345232' }
];

const DashboardUsuario = () => {
    const [ordenes, setOrdenes] = useState([]);
    const [paginaActual, setPaginaActual] = useState(1);
    const [ordenarPor, setOrdenarPor] = useState('fecha');

    useEffect(() => {
        setOrdenes(ordenesMock);
    }, []);

    const handleChangePage = (event, newPage) => {
        setPaginaActual(newPage);
    };

    const handleOrdenarPor = (event) => {
        setOrdenarPor(event.target.value);
        // Implementar lógica de ordenamiento si es necesario
    };

    return (
        <>
            <Header />
            <Container maxWidth="lg" sx={{ display: 'flex', marginTop: 4 }}>
                <Box sx={{ width: '20%', paddingRight: 2 }}>
                    <Typography variant="h6">Mi Cuenta</Typography>
                    <Box sx={{ marginTop: 2 }}>
                        <Link href="/ordenes-recientes" sx={{ display: 'block', marginBottom: 1 }}>Órdenes Recientes</Link>
                        <Link href="/datos-de-registro" sx={{ display: 'block', marginBottom: 1 }}>Datos de Registro</Link>
                        <Link href="/cambiar-password" sx={{ display: 'block', marginBottom: 1 }}>Cambiar Password</Link>
                    </Box>
                </Box>
                <Box sx={{ width: '80%' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
                        <Typography variant="h6">Órdenes Recientes</Typography>
                        <FormControl variant="outlined" sx={{ minWidth: 200 }}>
                            <InputLabel>Ordenar por</InputLabel>
                            <Select value={ordenarPor} onChange={handleOrdenarPor} label="Ordenar por">
                                <MenuItem value="fecha">Fecha (más recientes primero)</MenuItem>
                                <MenuItem value="fechaAsc">Fecha (más antiguas primero)</MenuItem>
                                <MenuItem value="totalDesc">Total (mayor a menor)</MenuItem>
                                <MenuItem value="totalAsc">Total (menor a mayor)</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Detalle</TableCell>
                                    <TableCell>Fecha</TableCell>
                                    <TableCell>Total</TableCell>
                                    <TableCell>Estado</TableCell>
                                    <TableCell>Número de Orden</TableCell>
                                    <TableCell>Acción</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {ordenes.map((orden) => (
                                    <TableRow key={orden.id}>
                                        <TableCell>{orden.detalle}</TableCell>
                                        <TableCell>{orden.fecha}</TableCell>
                                        <TableCell>S/ {orden.total}</TableCell>
                                        <TableCell>{orden.estado}</TableCell>
                                        <TableCell>{orden.numeroOrden}</TableCell>
                                        <TableCell>
                                            <Link href={`/detalle-orden/${orden.id}`} color="primary">Ver Detalle</Link>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}>
                        <Pagination count={10} page={paginaActual} onChange={handleChangePage} />
                    </Box>
                </Box>
            </Container>
            <Footer />
        </>
    );
};

export default DashboardUsuario;