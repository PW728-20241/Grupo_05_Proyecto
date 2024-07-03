import React from 'react';
import { Box, Typography, Button } from '@mui/material';

function CartSummary({ total }) {
  return (
    <Box sx={{ textAlign: 'right', padding: 2, borderTop: '1px solid #ddd', mt: 2 }}>
      <Typography variant="h6" sx={{ mb: 1 }}>Total: S/ {total.toFixed(2)}</Typography>
      <Button variant="contained" color="primary" href='/gracias'>Checkout</Button>
    </Box>
  );
}

export default CartSummary;
