import React from 'react';
import { Container, Typography, Box, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Header from './Header1';
import Footer from './Footer';

const Ayuda = () => {
  return (
    <>
      <Header />
      <Container sx={{ mt: 4 }}>
        <Typography variant="h4" sx={{ mb: 2, fontWeight: 'bold' }}>Centro de Ayuda</Typography>
        <Box sx={{ mb: 4 }}>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">¿Cómo puedo crear una cuenta?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Para crear una cuenta, haz clic en el enlace "Registrar" en la parte superior de la página. Completa el formulario con tu información personal y sigue las instrucciones para completar el registro.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">¿Cómo puedo restablecer mi contraseña?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Si olvidaste tu contraseña, haz clic en el enlace "Olvidé mi contraseña" en la página de inicio de sesión. Introduce tu correo electrónico y te enviaremos las instrucciones para restablecer tu contraseña.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">¿Qué métodos de pago aceptan?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Aceptamos pagos con tarjetas de crédito y débito, PayPal y transferencias bancarias. Todos los pagos son seguros y cifrados.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">¿Cómo puedo rastrear mi pedido?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Una vez que tu pedido haya sido enviado, recibirás un correo electrónico con un número de seguimiento. Puedes usar este número para rastrear tu paquete en el sitio web del transportista.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">¿Puedo devolver o cambiar un producto?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Sí, aceptamos devoluciones y cambios dentro de los 30 días posteriores a la compra. El producto debe estar en su estado original y en el empaque original. Para iniciar una devolución o cambio, por favor contáctanos a través de nuestro formulario de contacto.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">¿Cómo puedo contactarlos?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Puedes contactarnos a través de nuestro formulario de contacto en la página "Contáctanos". También puedes enviarnos un correo electrónico a soporte@tiendadevideojuegos.com o llamarnos al 123-456-7890.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default Ayuda;
