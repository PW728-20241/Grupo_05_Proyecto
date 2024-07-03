import React from 'react';
import { Box, Grid } from '@mui/material';
import Detalle from './DatosRegistroUsuario';
import Sidebar from '../../Componentes/BarraLateral1';
import Footer from '../../Componentes/Footer';
import Header1 from '../../Componentes/Header2';
const DetalleUsuario = () => {
  return (<>
    <Header1/>
    <Box sx={{ flexGrow: 2, p: 2}}>
      <Grid container spacing={4}>
          <Sidebar />
        <Grid item xs={12} md={9}>
          <Detalle />
        </Grid>
      </Grid>
    </Box>
    <Footer/>
    </>
  );
};

export default DetalleUsuario;
