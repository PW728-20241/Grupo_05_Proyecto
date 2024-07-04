import React from 'react';
import { Container, Typography, Box, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Header from './Header1';
import Footer from './Footer';

const FAQ = () => {
  return (
    <>
      <Header />
      <Container sx={{ mt: 4 }}>
        <Typography variant="h4" sx={{ mb: 2, fontWeight: 'bold' }}>Preguntas Frecuentes</Typography>
        <Box sx={{ mb: 4 }}>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">¿Cómo puedo realizar un pedido?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Para realizar un pedido, simplemente navega por nuestro catálogo, añade los productos que deseas a tu carrito y procede al pago. Necesitarás crear una cuenta o iniciar sesión para completar la compra.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">¿Qué métodos de pago aceptan?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Aceptamos pagos con tarjetas de crédito y débito, PayPal y transferencias bancarias.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">¿Cómo puedo rastrear mi pedido?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Una vez que tu pedido haya sido enviado, recibirás un correo electrónico con un número de seguimiento que puedes usar para rastrear tu paquete en el sitio web del transportista.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">¿Puedo devolver o cambiar un producto?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Sí, aceptamos devoluciones y cambios dentro de los 30 días posteriores a la compra. El producto debe estar en su estado original y en el empaque original. Para iniciar una devolución o cambio, por favor contáctanos.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default FAQ;
