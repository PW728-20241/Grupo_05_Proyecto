import React from 'react';
import { Box, Container, CssBaseline, Drawer, List, ListItem, ListItemText, Typography, Paper, Grid, Radio, RadioGroup, FormControlLabel, Button } from '@mui/material';

const drawerWidth = 240;

const orderDetails = {
  id: '12312312344',
  shippingAddress: {
    address: 'Jiron Huiracocha 2081 Departamento 922',
    district: 'Jesús María, Lima',
    city: 'Lima',
    country: 'Perú'
  },
  paymentMethod: {
    method: 'Tarjeta de crédito',
    card: '****8859'
  },
  shippingMethod: 'Económico Aéreo - S/10.00',
  items: [
    { name: 'Juego de Cartas Pokemon Masters League', price: 'S/ 50.00' },
    { name: 'Juego de Cartas Magic The Gathering', price: 'S/ 50.00' }
  ],
  summary: {
    subtotal: 'S/ 100.00',
    shipping: 'S/ 10.00',
    taxes: 'S/ 18.00',
    total: 'S/ 135.00'
  }
};

const DetalleOrden = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Container component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Detalles de Orden Nro {orderDetails.id}
        </Typography>
        <Paper sx={{ p: 2, mb: 2 }}>
          <Typography variant="body1" gutterBottom>
            <strong>Datos de compra</strong>
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography variant="body2">
                <strong>Dirección de Envío</strong><br />
                {orderDetails.shippingAddress.address}<br />
                {orderDetails.shippingAddress.district}<br />
                {orderDetails.shippingAddress.city}<br />
                {orderDetails.shippingAddress.country}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2">
                <strong>Pago</strong><br />
                Pago con {orderDetails.paymentMethod.method}<br />
                Tarjeta de Crédito que termina en: {orderDetails.paymentMethod.card}
              </Typography>
            </Grid>
          </Grid>
        </Paper>
        <Paper sx={{ p: 2, mb: 2 }}>
          <Typography variant="body1" gutterBottom>
            <strong>Método de Envío</strong>
          </Typography>
          <RadioGroup value={orderDetails.shippingMethod}>
            <FormControlLabel value="Económico Aéreo - S/10.00" control={<Radio />} label="Económico Aéreo - S/10.00" disabled />
            <FormControlLabel value="Envío prioritario (5 a 10 días) - S/17.00" control={<Radio />} label="Envío prioritario (5 a 10 días) - S/17.00" disabled />
          </RadioGroup>
        </Paper>
        <Paper sx={{ p: 2, mb: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography variant="body1" gutterBottom>
                <strong>Items en Pedido:</strong>
              </Typography>
              {orderDetails.items.map((item, index) => (
                <Typography key={index} variant="body2">
                  1x {item.name} - {item.price}
                </Typography>
              ))}
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1" gutterBottom>
                <strong>Resumen de Orden:</strong>
              </Typography>
              <Typography variant="body2">Subtotal: {orderDetails.summary.subtotal}</Typography>
              <Typography variant="body2">Envío: {orderDetails.summary.shipping}</Typography>
              <Typography variant="body2">Impuestos: {orderDetails.summary.taxes}</Typography>
              <Typography variant="body2"><strong>Total: {orderDetails.summary.total}</strong></Typography>
              <Button variant="contained" color="secondary" sx={{ mt: 2 }}>Cancelar Pedido</Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default DetalleOrden;