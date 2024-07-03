import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, TextField, Button } from '@mui/material';

const BarradeBusqueda = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/resultado`, { state: { query: searchTerm } });
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
