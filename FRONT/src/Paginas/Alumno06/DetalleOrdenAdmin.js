import React from 'react';
import { Box, Container, CssBaseline, Drawer, List, ListItem, ListItemText, Typography, Paper, Grid, Radio, RadioGroup, FormControlLabel, Button } from '@mui/material';

const drawerWidth = 240;

const detallesOrden = {
  id: '12312312344',
  direccionEnvio: {
    direccion: 'Jiron Huiracocha 2081 Departamento 922',
    distrito: 'Jesús María, Lima',
    ciudad: 'Lima',
    pais: 'Perú'
  },
  metodoPago: {
    metodo: 'Tarjeta de crédito',
    tarjeta: '****8859'
  },
  metodoEnvio: 'Económico Aéreo - S/10.00',
  items: [
    { nombre: 'Juego de Cartas Pokemon Masters League', precio: 'S/ 50.00' },
    { nombre: 'Juego de Cartas Magic The Gathering', precio: 'S/ 50.00' }
  ],
  resumen: {
    subtotal: 'S/ 100.00',
    envio: 'S/ 10.00',
    impuestos: 'S/ 18.00',
    total: 'S/ 135.00'
  }
};

const DetalleOrden = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List>
          {['Dashboard', 'Usuarios registrados', 'Productos', 'Órdenes', 'Productos más vendidos', 'Series'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Container component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Detalles de Orden Nro {detallesOrden.id}
        </Typography>
        <Paper sx={{ p: 2, mb: 2 }}>
          <Typography variant="body1" gutterBottom>
            <strong>Datos de compra</strong>
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography variant="body2">
                <strong>Dirección de Envío</strong><br />
                {detallesOrden.direccionEnvio.direccion}<br />
                {detallesOrden.direccionEnvio.distrito}<br />
                {detallesOrden.direccionEnvio.ciudad}<br />
                {detallesOrden.direccionEnvio.pais}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2">
                <strong>Pago</strong><br />
                Pago con {detallesOrden.metodoPago.metodo}<br />
                Tarjeta de Crédito que termina en: {detallesOrden.metodoPago.tarjeta}
              </Typography>
            </Grid>
          </Grid>
        </Paper>
        <Paper sx={{ p: 2, mb: 2 }}>
          <Typography variant="body1" gutterBottom>
            <strong>Método de Envío</strong>
          </Typography>
          <RadioGroup value={detallesOrden.metodoEnvio}>
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
              {detallesOrden.items.map((item, index) => (
                <Typography key={index} variant="body2">
                  1x {item.nombre} - {item.precio}
                </Typography>
              ))}
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1" gutterBottom>
                <strong>Resumen de Orden:</strong>
              </Typography>
              <Typography variant="body2">Subtotal: {detallesOrden.resumen.subtotal}</Typography>
              <Typography variant="body2">Envío: {detallesOrden.resumen.envio}</Typography>
              <Typography variant="body2">Impuestos: {detallesOrden.resumen.impuestos}</Typography>
              <Typography variant="body2"><strong>Total: {detallesOrden.resumen.total}</strong></Typography>
              <Button variant="contained" color="secondary" sx={{ mt: 2 }}>Cancelar Pedido</Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default DetalleOrden;
