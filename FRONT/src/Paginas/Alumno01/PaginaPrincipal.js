import React, { useState, useEffect } from "react";
import { Container, Box, Divider } from '@mui/material';
import Header from '../../Componentes/Header1';
import Footer from '../../Componentes/Footer';
import BarradeBusqueda from './PAGINA_PRINCIPAL/BarradeBusqueda'; 
import CategoriaSeccion from './PAGINA_PRINCIPAL/Categoria_Seccion'; 
import Items from './PAGINA_PRINCIPAL/Items';
import NuevaSeccion from './PAGINA_PRINCIPAL/NuevaSeccion';

const PaginaPrincipal = () => {
  const [fila1, setFila1] = useState([]);
  const [fila2, setFila2] = useState([]);
  const [fila3, setFila3] = useState([]);
  const [Nuevo, setNuevo] = useState([]);
  const [Categorias, setCategorias] = useState([]);

  useEffect(() => {
    async function obtenerContenido() {
      try {        
        const response = await fetch('http://localhost:3100/contenido');
        if (!response.ok) {
          throw new Error('Error al obtener los datos del servidor');
        }
        const data = await response.json();
        
        console.log('Data received from backend:', data);

        
        const makeAbsoluteUrls = (items) => items.map(item => ({
          ...item,
          imageUrl: `http://localhost:3100${item.imageUrl}`
        }));

        setFila1(makeAbsoluteUrls(data.fila1));
        setFila2(makeAbsoluteUrls(data.fila2));
        setFila3(makeAbsoluteUrls(data.fila3));
        setNuevo(makeAbsoluteUrls(data.Nuevo));
        setCategorias(makeAbsoluteUrls(data.Categorias));
      } catch (error) {
        console.error('Error al obtener datos del servidor:', error);
      }
    }

    obtenerContenido();
  }, []);

  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <BarradeBusqueda /> 
        <CategoriaSeccion categorias={Categorias} /> 
        <Box id='ofertas' mb={4}>
          <Items items={fila1} />
          <Items items={fila2} />
        </Box>
        <Divider />
        <NuevaSeccion nuevos={Nuevo} /> 
        <Box mb={4}>
          <Items items={fila3} />
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default PaginaPrincipal;
