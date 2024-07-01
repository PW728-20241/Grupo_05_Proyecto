import React from 'react';
import { Box, Grid, Typography, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const TarjetaProducto = ({ producto, indice }) => {
    return (
        <Link to={`/detalle/${producto.id}`} style={{ textDecoration: 'none' }}>
            <Paper variant="outlined" sx={{ mb: 2, p: 2 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={3}>
                        <Box 
                            width="100%" 
                            height={100} 
                            bgcolor="grey.300"
                            display="flex" 
                            justifyContent="center" 
                            alignItems="center"
                        >
                            {producto.imageUrl ? (
                                <img src={producto.imageUrl} alt={producto.title} style={{ maxWidth: '100%', maxHeight: '100%' }} />
                            ) : (
                                <Typography variant="subtitle1">Imagen</Typography>
                            )}
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={9}>
                        <Typography variant="h6">{producto.title}</Typography>
                        <Typography variant="body2">Por: {producto.brand} </Typography>
                        <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'black' }}>S/ {producto.price.toFixed(2)}</Typography>
                    </Grid>
                </Grid>
            </Paper>
        </Link>
    );
};

TarjetaProducto.propTypes = {
    producto: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        brand: PropTypes.string.isRequired,
        series: PropTypes.string,
        imageUrl: PropTypes.string, 
    }).isRequired,
    indice: PropTypes.number.isRequired,
};

export default TarjetaProducto;
