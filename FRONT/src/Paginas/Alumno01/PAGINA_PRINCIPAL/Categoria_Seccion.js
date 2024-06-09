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

function CategoriaSeccion(props) {
  const{categorias}=props; 
  return (
    <Grid container spacing={2} mb={4}>
      {categorias.map((category, index) => (
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
          ></Box>
          <Typography variant='h6' align='left'>
            {category.title}
          </Typography>
          <Subrayado href='#'>Learn More</Subrayado>
        </Grid>
      ))}
    </Grid>
  );
};

CategoriaSeccion.propTypes = {
  categorias: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CategoriaSeccion;
