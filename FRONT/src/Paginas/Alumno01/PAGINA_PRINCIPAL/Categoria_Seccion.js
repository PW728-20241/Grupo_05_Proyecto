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

function CategoriaSeccion({ categorias }) {
  return (
    <Grid container spacing={2} mb={4}>
      {categorias && categorias.length > 0 && categorias.map((category) => (
        <Grid item xs={12} sm={4} key={category.id}>
          <Box
            width="100%"
            height={200}
            sx={{
              backgroundImage: `url(${category.imageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: 5,
            }}
            display="flex"
            justifyContent="center"
            alignItems="center"
            mb={2}
          />
          <Box display="flex" flexDirection="column" alignItems="left">
            <Typography variant='h6' align='left'>
              {category.nombre}
            </Typography>
            <Subrayado to={`/detalle/${category.id}`}>Learn More</Subrayado>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}

CategoriaSeccion.propTypes = {
  categorias: PropTypes.array.isRequired,
};

export default CategoriaSeccion;
