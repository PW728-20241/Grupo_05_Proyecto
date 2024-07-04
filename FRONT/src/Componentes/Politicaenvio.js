import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import Header from './Header1';
import Footer from './Footer';

const PoliticaDeEnvio = () => {
  return (
    <>
      <Header />
      <Container sx={{ mt: 4 }}>
        <Typography variant="h4" sx={{ mb: 2, fontWeight: 'bold' }}>Política de Envío</Typography>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>Tiempo de Procesamiento de Envío</Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Todos los pedidos se procesan dentro de 2-3 días hábiles. Los pedidos no se envían ni se entregan los fines de semana o días festivos.
          </Typography>

          <Typography variant="h6" sx={{ mb: 2 }}>Tarifas de Envío y Estimaciones de Entrega</Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Ofrecemos dos métodos de envío:
            <ul>
              <li>Económico Aéreo: S/10.00 - 5 a 7 días hábiles</li>
              <li>Envío prioritario: S/17.00  - 2 a 3 días hábiles</li>
            </ul>
          </Typography>

          <Typography variant="h6" sx={{ mb: 2 }}>Confirmación de Envío y Seguimiento de Pedido</Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Recibirás un correo electrónico de confirmación de envío una vez que tu pedido haya sido enviado con tu(s) número(s) de seguimiento. El número de seguimiento estará activo en 24 horas.
          </Typography>

          <Typography variant="h6" sx={{ mb: 2 }}>Daños</Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            ALDO'S MARKET no es responsable de ningún producto dañado o perdido durante el envío. Si recibiste tu pedido dañado, por favor contacta al transportista para presentar una reclamación.
          </Typography>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default PoliticaDeEnvio;
