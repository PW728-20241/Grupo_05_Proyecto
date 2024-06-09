import React from 'react';
import { Box, Container, CssBaseline, Drawer, List, ListItem, ListItemText, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Link } from '@mui/material';
import BarraLateral2 from '../../Componentes/BarraLateral2';
import Header2 from '../../Componentes/Header2';
import Footer from '../../Componentes/Footer';

const drawerWidth = 240;

const detallesUsuario = {
  id: 12343,
  nombre: 'Juan Sánchez',
  correo: 'altavista@1234.com',
  fechaRegistro: '11/03/2021'
};

const ordenes = [
  { id: 1, fechaOrden: '11/03/2023', total: 'S/125.00', productos: 13, estado: 'Pendiente' },
  { id: 2, fechaOrden: '11/04/2023', total: 'S/150.00', productos: 1, estado: 'Por Enviar' },
  { id: 3, fechaOrden: '11/05/2023', total: 'S/200.00', productos: 4, estado: 'Entregado' },
];

function DetalleUsuario() {
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
          <Paper sx={{ p: 2, mb: 2 }}>
            <Typography variant="body1">
              <strong>ID:</strong> {detallesUsuario.id} &nbsp;
              <strong>Nombre:</strong> {detallesUsuario.nombre} &nbsp;
              <strong>Correo:</strong> {detallesUsuario.correo} &nbsp;
              <strong>Fecha de Registro:</strong> {detallesUsuario.fechaRegistro}
            </Typography>
          </Paper>
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
                  {ordenes.map((orden, index) => (
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
                  ))}
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

export default DetalleUsuario;
