import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Subrayado = styled(RouterLink)(({ theme }) => ({
  fontFamily: 'Arial, sans-serif',
  color: '#000000',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
}));

function NuevaSeccion({ nuevos }) {
  return (
    <Box id="nuevos" mt={4} mb={2}>
      <Typography variant="h6" gutterBottom>Nuevos</Typography>
      <Grid container spacing={2}>
        {nuevos.map((newItem, index) => (
          <Grid item xs={12} sm={6} md={6} key={index}>
            <Box
              width="100%"
              height={200}
              sx={{
                backgroundImage: `url(${newItem.imageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: 5,
              }}
              display="flex"
              justifyContent="center"
              alignItems="center"
              mb={2}
            ></Box>
            <Typography variant='h6'>{newItem.nombre}</Typography>
            <Subrayado to={`/detalle/${newItem.id}`}>Learn More</Subrayado>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

NuevaSeccion.propTypes = {
  nuevos: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string.isRequired,
      nombre: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default NuevaSeccion;
