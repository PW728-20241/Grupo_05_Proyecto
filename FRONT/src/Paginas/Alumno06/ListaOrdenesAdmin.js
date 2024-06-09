import React, { useState } from 'react';
import { Box, Button, Container, CssBaseline, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, TextField, Link, Pagination } from '@mui/material';
import BarraLateral2 from '../../Componentes/BarraLateral2';
import Header2 from '../../Componentes/Header2';
import Footer from '../../Componentes/Footer';
import RellenarOrden from "./ContenidoTablaOrdenes";

const drawerWidth = 240;

const ordenes = [
  { id: 1, usuario: 'Juan Sanchez', fechaOrden: '11/03/2023', total: 'S/125.00', correo: 'altavista@123.com', estado: 'Entregado' },
  { id: 2, usuario: 'Juan Sanchez', fechaOrden: '11/03/2023', total: 'S/125.00', correo: 'altavista@123.com', estado: 'Entregado' },
  { id: 3, usuario: 'Juan Sanchez', fechaOrden: '11/03/2023', total: 'S/125.00', correo: 'altavista@123.com', estado: 'Entregado' },
];

const ListaOrdenes = () => {
  const [pagina, setPagina] = useState(1);
  const [filasPorPagina, setFilasPorPagina] = useState(3);

  const handleChangePagina = (event, nuevaPagina) => {
    setPagina(nuevaPagina + 1);
  };

  return (
    <>
      <Header2 />
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <BarraLateral2 />
        <Container component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Box sx={{display: 'flex', justifyContent:'space-between', alignItems:'center', mb:3}}>
            <Typography variant="h4" style={{fontWeight:'bold'}} gutterBottom>
            Órdenes
            </Typography>
          <Button variant="contained" style={{ backgroundColor: '#FFEB3B', color: 'black', fontWeight: 'bold' }}>
              Agregar Orden
            </Button>
          </Box>
          <TextField
            fullWidth
            margin="normal"
            variant="outlined"
            placeholder="Buscar por nombre o apellido de usuario o nro de orden..."
          />
          <Paper>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell style={{textAlign: 'center'}}>ID</TableCell>
                    <TableCell style={{textAlign: 'center'}}>Usuario</TableCell>
                    <TableCell style={{textAlign: 'center'}}>Fecha de Orden</TableCell>
                    <TableCell style={{textAlign: 'center'}}>Monto total</TableCell>
                    <TableCell style={{textAlign: 'center'}}>Correo</TableCell>
                    <TableCell style={{textAlign: 'center'}}>Estado</TableCell>
                    <TableCell style={{textAlign: 'center'}}>Acciones</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {ordenes.map((item) => (
                    <RellenarOrden key={item.id} orden={item} />
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Box display="flex" justifyContent="space-between" alignItems="center" padding="16px">
              <Typography variant="body2">Anterior</Typography>
              <Pagination
              /*
                count={Math.ceil(ordenes.length / filasPorPagina)}
                page={pagina}
                onChange={handleChangePagina}
                shape="rounded"
                color="primary"
                */
              />
              <Typography variant="body2">Siguiente</Typography>
            </Box>
          </Paper>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default ListaOrdenes;
