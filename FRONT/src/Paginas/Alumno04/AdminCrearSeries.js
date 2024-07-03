import React, { useEffect, useState } from 'react';
import { Box, Container, TextField, Button, Typography, Paper, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const CreateSerie = () => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [productos, setProductos] = useState([]);
  const [serieProductos, setSerieProductos] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3100/productos')
      .then(response => {
        setProductos(response.data);
        setFilteredProducts(response.data);
      })
      .catch(error => console.error(error));
  }, []);

  const handleAddProduct = (product) => {
    setSerieProductos([...serieProductos, product.nombre]);
    setOpenDialog(false);
  };

  const handleRemoveProduct = (productName) => {
    setSerieProductos(serieProductos.filter(p => p !== productName));
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    const filtered = productos.filter(product =>
      product.nombre.toLowerCase().includes(event.target.value.toLowerCase()) ||
      product.id.toString().includes(event.target.value)
    );
    setFilteredProducts(filtered);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevaSerie = { nombre, descripcion, fechaCreacion: new Date().toISOString().split('T')[0], productos: serieProductos };
    axios.post('http://localhost:3100/series', nuevaSerie)
      .then(response => {
        console.log('Serie creada:', response.data);
        navigate('/ListadoSeries'); // Redirige a la página de series
      })
      .catch(error => console.error('Error creando la serie:', error));
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>
          Crear Nueva Serie
        </Typography>
        <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Nombre"
                fullWidth
                margin="normal"
                variant="outlined"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Descripción"
                fullWidth
                margin="normal"
                variant="outlined"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" sx={{ mt: 3 }}>
                Productos en la serie
              </Typography>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>ID</TableCell>
                      <TableCell>Descripción</TableCell>
                      <TableCell>Acción</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {serieProductos.map((productName) => (
                      <TableRow key={productName}>
                        <TableCell>{productos.find(p => p.nombre === productName)?.id}</TableCell>
                        <TableCell>{productName}</TableCell>
                        <TableCell>
                          <IconButton color="error" onClick={() => handleRemoveProduct(productName)}>
                            <DeleteIcon />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                <IconButton color="primary" onClick={() => setOpenDialog(true)}>
                  <AddIcon />
                </IconButton>
              </Box>
              <Button type="submit" variant="contained" component={Link} to="/ListaSeries" color="primary" fullWidth sx={{ mt: 2 }}>
                Guardar
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Agregar Producto</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            placeholder="Buscar por descripción o ID"
            variant="outlined"
            size="small"
            value={searchTerm}
            onChange={handleSearchChange}
            sx={{ marginBottom: 2 }}
          />
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Descripción</TableCell>
                  <TableCell>Acción</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredProducts.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell>{product.id}</TableCell>
                    <TableCell>{product.nombre}</TableCell>
                    <TableCell>
                      <Button onClick={() => handleAddProduct(product)}>Agregar</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cerrar</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default CreateSerie;
