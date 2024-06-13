import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Container, CssBaseline, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Link } from '@mui/material';
import BarraLateral2 from '../../Componentes/BarraLateral2';
import Header2 from '../../Componentes/Header2';
import Footer from '../../Componentes/Footer';

const drawerWidth = 240;

function DetalleUsuarioAdmin() {
    const { id } = useParams();
    const [usuario, setUsuario] = useState(null);
    const [ordenes, setOrdenes] = useState([]);

    useEffect(() => {
        const fetchUsuario = async () => {
            try {
                const res = await fetch(`http://localhost:3100/usuarios-url?id=${id}`);
                const data = await res.json();
                setUsuario(data[0]);
            } catch (error) {
                console.error("Error fetching user:", error);
            }
        };

        const fetchOrdenes = async () => {
            try {
                const res = await fetch(`http://localhost:3100/ordenes-url?usuarioId=${id}`);
                const data = await res.json();
                setOrdenes(data);
            } catch (error) {
                console.error("Error fetching orders:", error);
            }
        };

        if (id) {
            fetchUsuario();
            fetchOrdenes();
        }
    }, [id]); 

    return (
        <>
            <Header2 />
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <BarraLateral2 />
                <Container component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <Typography variant="h6" gutterBottom>
                        Detalle de Usuario Registrado
                    </Typography>
                    {usuario ? (
                        <Paper sx={{ p: 2, mb: 2 }}>
                            <Typography variant="body1">
                                <strong>ID:</strong> {usuario.id} &nbsp;
                                <strong>Nombre:</strong> {usuario.nombre} &nbsp;
                                <strong>Correo:</strong> {usuario.correo} &nbsp;
                                <strong>Fecha de Registro:</strong> {usuario.fechaRegistro}
                            </Typography>
                        </Paper>
                    ) : (
                        <Typography variant="body1">Cargando datos de usuario...</Typography>
                    )}
                    <Typography variant="h6" gutterBottom>
                        Órdenes recientes (máximo 10)
                    </Typography>
                    <Paper>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>ID</TableCell>
                                        <TableCell>Fecha de Orden</TableCell>
                                        <TableCell>Total</TableCell>
                                        <TableCell>Productos</TableCell>
                                        <TableCell>Estado</TableCell>
                                        <TableCell>Acciones</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {ordenes.length > 0 ? ordenes.map((orden, index) => (
                                        <TableRow key={index}>
                                            <TableCell>{orden.id}</TableCell>
                                            <TableCell>{orden.fechaOrden}</TableCell>
                                            <TableCell>{orden.total}</TableCell>
                                            <TableCell>{orden.productos}</TableCell>
                                            <TableCell>{orden.estado}</TableCell>
                                            <TableCell>
                                                <Link href="#" underline="hover">
                                                    Ver
                                                </Link>
                                            </TableCell>
                                        </TableRow>
                                    )) : (
                                        <TableRow>
                                            <TableCell colSpan={6} style={{ textAlign: 'center' }}>
                                                No hay órdenes disponibles
                                            </TableCell>
                                        </TableRow>
                                    )}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </Container>
            </Box>
            <Footer />
        </>
    );
}

export default DetalleUsuarioAdmin;
