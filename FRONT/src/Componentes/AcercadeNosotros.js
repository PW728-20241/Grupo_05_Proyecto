import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import Header from './Header1';
import Footer from './Footer';

const AcercaDeNosotros = () => {
  return (
    <>
      <Header />
      <Container sx={{ mt: 4 }}>
        <Typography variant="h4" sx={{ mb: 2, fontWeight: 'bold' }}>Acerca de Nosotros</Typography>
        <Box sx={{ mb: 4 }}>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Bienvenido a ALDO'S MARKET, tu fuente número uno para todos los videojuegos. Nos dedicamos a ofrecerte lo mejor en videojuegos, con un enfoque en la calidad, el servicio al cliente y la exclusividad.
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Fundada en 2020, Tienda de Videojuegos ha recorrido un largo camino desde sus comienzos. Cuando empezamos, nuestra pasión por los videojuegos nos impulsó a hacer un montón de investigación y esfuerzo para que Tienda de Videojuegos pudiera ofrecerte "lo mejor de los videojuegos". Ahora servimos a clientes en todo el país y estamos encantados de poder transformar nuestra pasión en nuestra propia página web.
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Esperamos que disfrutes de nuestros productos tanto como nosotros disfrutamos ofreciéndotelos. Si tienes alguna pregunta o comentario, no dudes en contactarnos.
          </Typography>
          <Typography variant="body1">
            Sinceramente,<br />
            Aldo
          </Typography>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default AcercaDeNosotros;
