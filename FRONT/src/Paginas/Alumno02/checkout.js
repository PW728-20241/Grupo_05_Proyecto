import React, { useState, useEffect } from 'react';
import { Container, Grid, Box, Typography, TextField, Button, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';
import Header1 from '../../Componentes/Header1';
import Footer from '../../Componentes/Footer';

const CheckoutPage = () => {
  const [shippingAddress, setShippingAddress] = useState({
    linea1: '',
    linea2: '',
    distrito: '',
    ciudad: '',
    pais: ''
  });

  const [paymentMethod, setPaymentMethod] = useState('qr');
  const [creditCard, setCreditCard] = useState({
    numeroTarjeta: '',
    nombreTarjeta: '',
    vencimiento: '',
    ccv: ''
  });

  const [shippingMethod, setShippingMethod] = useState('economico');
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    async function fetchCart() {
      try {
        const response = await fetch('http://localhost:3100/cart');
        if (!response.ok) {
          throw new Error('Error al obtener el carrito');
        }
        const data = await response.json();
        setCartItems(data);

        const subtotal = data.reduce((sum, item) => sum + item.precio * item.cantidad, 0);
        const shippingCost = shippingMethod === 'economico' ? 10 : 17;
        const taxes = subtotal * 0.18;
        setTotal(subtotal + shippingCost + taxes);
      } catch (error) {
        console.error('Error:', error);
      }
    }
    fetchCart();
  }, [shippingMethod]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setShippingAddress({ ...shippingAddress, [name]: value });
  };

  const handlePaymentChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleCreditCardChange = (event) => {
    const { name, value } = event.target;
    setCreditCard({ ...creditCard, [name]: value });
  };

  const handleShippingMethodChange = (event) => {
    setShippingMethod(event.target.value);
  };

  const handleSubmit = async () => {
    if (Object.values(shippingAddress).some(value => !value) ||
      (paymentMethod === 'tarjeta' && Object.values(creditCard).some(value => !value))) {
      alert('Por favor, complete todos los campos.');
      return;
    }

    const order = {
      usuarioId: 1, // Asigna el usuario ID correspondiente
      total,
      productos: cartItems.map(item => ({ id: item.id, cantidad: item.cantidad }))
    };

    const response = await fetch('http://localhost:3100/ordenes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(order)
    });

    if (response.ok) {
      localStorage.removeItem('cart');
      alert('¡Orden completada con éxito!');
    } else {
      alert('Hubo un error al completar la orden.');
    }
  };

  return (
    <>
      <Header1 />
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Typography variant="h4" sx={{ mb: 2, textAlign: 'center' }}>¡Casi Listo! Tu orden no estará completa hasta que revises y presiones el botón “completar orden” al final de la página.</Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box sx={{ mb: 2 }}>
              <Typography variant="h6">Datos de compra</Typography>
              <TextField name="linea1" label="Línea 1" fullWidth margin="normal" value={shippingAddress.linea1} onChange={handleInputChange} />
              <TextField name="linea2" label="Línea 2" fullWidth margin="normal" value={shippingAddress.linea2} onChange={handleInputChange} />
              <TextField name="distrito" label="Distrito" fullWidth margin="normal" value={shippingAddress.distrito} onChange={handleInputChange} />
              <TextField name="ciudad" label="Ciudad" fullWidth margin="normal" value={shippingAddress.ciudad} onChange={handleInputChange} />
              <TextField name="pais" label="País" fullWidth margin="normal" value={shippingAddress.pais} onChange={handleInputChange} />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ mb: 2 }}>
              <Typography variant="h6">Pago</Typography>
              <FormControl component="fieldset">
                <RadioGroup name="paymentMethod" value={paymentMethod} onChange={handlePaymentChange}>
                  <FormControlLabel value="qr" control={<Radio />} label="Pago con código QR" />
                  <FormControlLabel value="tarjeta" control={<Radio />} label="Pago con tarjeta de crédito" />
                </RadioGroup>
              </FormControl>
              {paymentMethod === 'qr' ? (
                <img src="https://via.placeholder.com/150" alt="Código QR" />
              ) : (
                <>
                  <TextField name="numeroTarjeta" label="Número de Tarjeta" fullWidth margin="normal" value={creditCard.numeroTarjeta} onChange={handleCreditCardChange} />
                  <TextField name="nombreTarjeta" label="Nombre en tarjeta" fullWidth margin="normal" value={creditCard.nombreTarjeta} onChange={handleCreditCardChange} />
                  <TextField name="vencimiento" label="Vencimiento" fullWidth margin="normal" value={creditCard.vencimiento} onChange={handleCreditCardChange} />
                  <TextField name="ccv" label="CCV" fullWidth margin="normal" value={creditCard.ccv} onChange={handleCreditCardChange} />
                </>
              )}
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ mb: 2 }}>
          <Typography variant="h6">Método de Envío</Typography>
          <FormControl component="fieldset">
            <RadioGroup name="shippingMethod" value={shippingMethod} onChange={handleShippingMethodChange}>
              <FormControlLabel value="economico" control={<Radio />} label="Económico Aéreo - S/10.00" />
              <FormControlLabel value="prioritario" control={<Radio />} label="Envío prioritario (5 a 10 días) - S/17.00" />
            </RadioGroup>
          </FormControl>
        </Box>
        <Box sx={{ mb: 2 }}>
          <Typography variant="h6">Items en Pedido:</Typography>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                <Typography variant="body1">{item.cantidad} x {item.nombre} - S/ {item.precio.toFixed(2)}</Typography>
              </li>
            ))}
          </ul>
        </Box>
        <Box sx={{ mb: 2 }}>
          <Typography variant="h6">Resumen de Orden</Typography>
          <Typography variant="body1">Subtotal: S/ {(total * 0.82).toFixed(2)}</Typography>
          <Typography variant="body1">Envío: S/ {(shippingMethod === 'economico' ? 10 : 17).toFixed(2)}</Typography>
          <Typography variant="body1">Impuestos: S/ {(total * 0.18).toFixed(2)}</Typography>
          <Typography variant="h6">Total: S/ {total.toFixed(2)}</Typography>
        </Box>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Completar Orden
        </Button>
      </Container>
      <Footer />
    </>
  );
};

export default CheckoutPage;
