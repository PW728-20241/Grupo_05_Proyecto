import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, TextField, Button } from '@mui/material';

const BarradeBusqueda = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/resultado`, { state: { query: searchTerm } });
  };

  const fetchProductoPorNombre = async (nombre) => {
    try {
      const response = await fetch(`http://localhost:3100/producto/nombre/${nombre}`);
      if (!response.ok) {
        throw new Error('Producto no encontrado');
      }
      const producto = await response.json();
      console.log('Producto encontrado:', producto);
      // Aquí puedes manejar el producto encontrado, por ejemplo, guardarlo en el estado o pasarlo a otro componente
    } catch (error) {
      console.error('Error al buscar el producto:', error);
    }
  };

  return (
    <Box my={4}>
      <TextField
        variant="outlined"
        placeholder="Busca productos por nombre..."
        fullWidth
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        InputProps={{
          endAdornment: (
            <Button onClick={handleSearch} variant="contained" sx={{ marginLeft: 2, backgroundColor: '#fbbd08', color: '#ffffff' }}>
              Buscar
            </Button>
          ),
        }}
      />
    </Box>
  );
};

export default BarradeBusqueda;
