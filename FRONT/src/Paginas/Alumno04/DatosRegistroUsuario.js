import React from "react";
import {
  Box,
  Container,
  TextField,
  Button,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const Detalle = () => {
  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Paper
        sx={{
          p: 3,
          background: 'transparent',
          textAlign: "left",
          width: "100%",
          margin: "auto"
        }}
      >
         <Typography
          variant="h6"
          gutterBottom
          sx={{ 
            backgroundColor: "grey", 
            p: 1,
            textAlign: "left",
            borderColor: 'black',
            borderWidth: 1,
            borderStyle: 'solid',
            width: "100%",
            maxWidth: 900
          }}
        >
          Datos de Registro
        </Typography>
        <Box component="form" gap={4} p={2} noValidate autoComplete="off">
          <TextField
            label="Nombre"
            type="text"
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="Apellidos"
            type="text"
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="Correo"
            type="email"
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <Box textAlign="center"> {/* Aquí se ha añadido el estilo para centrar */}
            <Button
              variant="contained"
              fullWidth
              sx={{
                mt: 2,
                background: "black",
                color: "White",
                width: "50%",
                textAlign: "center",
              }}
            >
              Actualizar
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};


export default Detalle;
