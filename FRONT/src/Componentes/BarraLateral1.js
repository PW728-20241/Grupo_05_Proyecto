import React from 'react';
import { Paper, List, ListItem, ListItemText } from '@mui/material';

const Sidebar = () => {
  return (
    <Paper elevation={6} sx={{ height: '100%', pt: 2, ml: 5, mt: 5, width: "20%" }}>
      <List>
        <ListItem>
          <ListItemText primary="Mi Cuenta" sx={{ textAlign: 'center' }} />
        </ListItem>
        <ListItem button sx={{ p: 1 }}>
          <ListItemText primary="Órdenes Recientes" sx={{ textAlign: 'center' }} />
        </ListItem>
        <ListItem button sx={{ p: 1 }}>
          <ListItemText primary="Datos de Registro" sx={{ textAlign: 'center' }} />
        </ListItem>
        <ListItem button sx={{ p: 1 }}>
          <ListItemText primary="Cambiar Password" sx={{ textAlign: 'center' }} />
        </ListItem>
      </List>
    </Paper>
  );
};

export default Sidebar;
