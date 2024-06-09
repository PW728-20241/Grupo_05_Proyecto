import React, { useState } from 'react';
import { Box, Container, CssBaseline, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, TextField, Button, Pagination } from '@mui/material';
import BarraLateral2 from '../../Componentes/BarraLateral2';
import Header2 from '../../Componentes/Header2';
import Footer from '../../Componentes/Footer';
import RellenarUsuario from "./ContenidoTablaUsuarios"; 

const drawerWidth = 240;

const usuarios = [
  { id: 1, nombre: 'Antonio', apellido: 'Lopez Caro', correo: 'correo@sanchez.com', fechaRegistro: '11/02/2022', estado: 'Activo' },
  { id: 12333, nombre: 'Ana', apellido: 'Sanchez', correo: 'anita123@hotmail.com', fechaRegistro: '11/02/2022', estado: 'Inactivo' },
  { id: 12334, nombre: 'Ana', apellido: 'Sanchez', correo: 'anita123@hotmail.com', fechaRegistro: '11/02/2022', estado: 'Inactivo' },
  { id: 2, nombre: 'Antonio', apellido: 'Lopez Caro', correo: 'correo@sanchez.com', fechaRegistro: '11/02/2022', estado: 'Activo' },
];

function ListaUsuarios() {
  const [pagina, setPagina] = useState(1);
  const [filasPorPagina, setFilasPorPagina] = useState(4);

  const handleChangePagina = (event, nuevaPagina) => {
    setPagina(nuevaPagina);
  };

  const handleChangeFilasPorPagina = (event) => {
    setFilasPorPagina(parseInt(event.target.value, 10));
    setPagina(0);
  };

  /*Conexion al backend*/
  /*----------------------------------------------------------------------------------------------------------------*/
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  async function fetchDatos(query=""){
    const url_base = "http://localhost:3100/usuarios";
    const url = query ? `${url_base}-url?id=${query}&correo=${query}&nombre=${query}&apellido=${query}` : url_base; 
    try {
      const res = await fetch(url);
      if (res.status === 200) {
          const data = await res.json();
          setData(data);
      } else {
          alert("El usuario no existe");
      }
    } catch (error) {
      console.error('Error fetching data:', error);
     }
  }

  useEffect(() => {
      fetchDatos();
  }, []);

  const handleSearch = () => {
    fetchDatos(searchQuery);
  };
/*---------------------------------------------------------------------------------------------------------------------*/
  return (
    <>
      <Header2 />
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <BarraLateral2 />
        <Container component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Typography variant="h4" style={{ fontWeight: 'bold' }} gutterBottom>
              Usuarios registrados
            </Typography>
          <Button variant="contained" style={{ backgroundColor: '#FFEB3B', color: 'black', fontWeight: 'bold' }}>
              Agregar Usuario
            </Button>
          </Box>
          <TextField
            fullWidth
            margin="normal"
            variant="outlined"
            placeholder="Buscar por correo, nombre o apellidos..."
            value = {searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            InputProps={{
              endAdornment: (
                  <Button type="button" onClick={handleSearch} variant="contained" component="label" style={{ backgroundColor: '#FFEB3B', color: 'black', fontWeight: 'bold' }}>
                      Buscar
                  </Button>
              ),
          }}
          />
          <Paper>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell style={{textAlign: 'center'}}>ID</TableCell>
                    <TableCell style={{textAlign: 'center'}}>Nombre</TableCell>
                    <TableCell style={{textAlign: 'center'}}>Apellido</TableCell>
                    <TableCell style={{textAlign: 'center'}}>Correo</TableCell>
                    <TableCell style={{textAlign: 'center'}}>Fecha de Registro</TableCell>
                    <TableCell style={{textAlign: 'center'}}>Estado</TableCell>
                    <TableCell style={{textAlign: 'center'}}>Acciones</TableCell>
                  </TableRow>
                </TableHead>
                  <TableBody>
                    {data.length > 0 ? data.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell style={{ textAlign: 'center' }}>{item.id}</TableCell>
                        <TableCell style={{ textAlign: 'center' }}>{item.nombre}</TableCell>
                        <TableCell style={{ textAlign: 'center' }}>{item.apellido}</TableCell>
                        <TableCell style={{ textAlign: 'center' }}>{item.correo}</TableCell>
                        <TableCell style={{ textAlign: 'center' }}>{item.fechaRegistro}</TableCell>
                        <TableCell style={{ textAlign: 'center' }}>{item.estado}</TableCell>
                        <TableCell style={{ textAlign: 'center' }}>
                        <Button variant='text' size='small' style={{ fontWeight: 'bold', color: 'black' }}>Ver</Button>
                        <Button variant='text' size='small' style={{ fontWeight: 'bold', color: '#CC0000' }}>Desactivar</Button>
                        </TableCell>
                      </TableRow>
                        )) : (
                          <TableRow>
                          <TableCell colSpan={8} style={{ textAlign: 'center' }}>No hay datos disponibles</TableCell>
                          </TableRow>
                        )}
                </TableBody>
              </Table>
            </TableContainer>
            
            <Box display="flex" justifyContent="space-between" alignItems="center" padding="16px">
              <Typography variant="body2">Anterior</Typography>
              <Pagination
              /*
                count={Math.ceil(filas.length / filasPorPagina)}
                page={pagina}
                onChange={handleChangePagina}
                shape="rounded"
                color="primary"*/

                /**{usuarios.map((item) => (
                    <RellenarUsuario key={item.id} usuario={item} />
                  ))} **/
              />
              <Typography variant="body2">Siguiente</Typography>
            </Box>
          </Paper>
        </Container>
      </Box>
      <Footer />
    </>
  );
}

export default ListaUsuarios;
