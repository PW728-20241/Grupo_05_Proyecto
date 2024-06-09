import React from 'react';
import { Container, Grid, Box, Typography, Button, Link } from '@mui/material';
import Header1 from '../../Componentes/Header1';
import Footer from '../../Componentes/Footer';
import CantidadProducto from '../Alumno01/DETALLE/Cantidad';

const product = {
  title: 'Título de Producto: Puede ser bastante largo',
  brand: 'HASBRO',
  series: 'Avengers Endgame',
  price: 88.99,
  description: `From the Voltron franchise comes a new Mini Action Voltron Vehicle Force figure by Action Toys. This figure is highly articulated and able to produce various poses from the series, along with being able to separate various parts to form vehicles. This Voltron Vehicle Force toy figure is sure to be a great addition to any Voltron collection!`,
  features: [
    'Mide 18 centímetros',
    'Hecho de PVC',
    'De la serie Voltron',
    'Articulado',
    '15 piezas distintas',
    'Combinable con otras figuras'
  ]
};

const DetalleProducto = () => {
  const [cantidad, setCantidad] = React.useState(1);

  const aumentarCantidad = () => setCantidad(cantidad + 1);
  const disminuirCantidad = () => cantidad > 1 && setCantidad(cantidad - 1);

  return (
    <>
      <Header1 />
      <Container maxWidth="md">
        <Box my={4}>
          <Typography variant="h4">{product.title}</Typography>
          <Typography variant="subtitle1">Por: {product.brand} - Serie: {product.series}</Typography>
        </Box>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box 
              width="100%" 
              height={300} 
              bgcolor="grey.300"
              display="flex" 
              justifyContent="center" 
              alignItems="center"
              borderRadius={5}
            >
              <Typography variant="subtitle1">Imagen del Producto</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Box border={1} borderColor="black" borderRadius={8} p={2} textAlign="center">
                <Box borderBottom={1} borderColor="black" pb={1} mb={1}>
                  <Typography variant="h6">DISPONIBLE</Typography>
                </Box>
                <Typography variant="h4" color="black" fontWeight="bold">S/{product.price.toFixed(2)}</Typography>
                <Button variant="contained" style={{ marginTop: 8, backgroundColor: '#fbbd08', color: '#ffffff'}}>
                  AÑADIR AL CARRITO
                </Button>
                <Box mt={2} />
                <CantidadProducto cantidad={cantidad} aumentar={aumentarCantidad} disminuir={disminuirCantidad} />
                <Typography variant="body2" mt={2}>
                  <Link href="#" color="inherit">
                    Ver métodos de envío disponibles
                  </Link>
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Box mt={4}>
          <Typography variant="h6">Descripción</Typography>
          <Typography variant="body1" paragraph>
            {product.description}
          </Typography>
        </Box>

        <Box mt={4} mb={4} bgcolor="grey.300" p={2} borderRadius={3}>
          <Typography variant="h6">Características del Producto:</Typography>
          <ul>
            {product.features.map((feature, index) => (
              <li key={index}>
                <Typography variant="body1">{feature}</Typography>
              </li>
            ))}
          </ul>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default DetalleProducto;
