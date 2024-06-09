import React from 'react';
import { Box, TextField, Button } from '@mui/material';

const BarradeBusqueda = () => {
  return (
    <Box my={4}>
      <TextField
        variant="outlined"
        placeholder="Busca productos por nombre..."
        fullWidth
        InputProps={{
          endAdornment: (
            <Button variant="contained" sx={{ marginLeft: 2, backgroundColor: '#fbbd08', color: '#ffffff' }}>
              Buscar
            </Button>
          ),
        }}
      />
    </Box>
  );
};

export default BarradeBusqueda;
