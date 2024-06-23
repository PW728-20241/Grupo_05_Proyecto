import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';
import Link from '@mui/material/Link';
import PropTypes from 'prop-types';

const Subrayado = styled(Link)(({ theme }) => ({
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
      {categorias && categorias.length > 0 && categorias.map((category, index) => (
        <Grid item xs={12} sm={4} key={index}>
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
              {category.title}
            </Typography>
            <Subrayado href='#'>Learn More</Subrayado>
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
