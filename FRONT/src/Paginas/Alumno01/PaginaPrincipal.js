import React from 'react';
import { Container, Box, Divider } from '@mui/material';
import Header from '../../Componentes/Header1';
import Footer from '../../Componentes/Footer';
import BarradeBusqueda from './PAGINA_PRINCIPAL/BarradeBusqueda'; 
import CategoriaSeccion from './PAGINA_PRINCIPAL/Categoria_Seccion'; 
import Items from './PAGINA_PRINCIPAL/Items';
import NuevaSeccion from './PAGINA_PRINCIPAL/NuevaSeccion';

import img1 from '../../Imagenes/casa.jpeg';
import img3 from '../../Imagenes/colegio.jpeg';
import img4 from '../../Imagenes/ezio.jpeg';
import img5 from '../../Imagenes/FIFA_22.webp';
import img6 from '../../Imagenes/god.avif';
import img7 from '../../Imagenes/Grand_Theft_Auto_V.png';
import img8 from '../../Imagenes/hori.webp';
import img9 from '../../Imagenes/injustice.jpg';
import img10 from '../../Imagenes/last.webp';
import img11 from '../../Imagenes/lastofus.avif';
import img12 from '../../Imagenes/mine.webp';
import img13 from '../../Imagenes/mortal.avif';
import img14 from '../../Imagenes/niños.webp';
import img15 from '../../Imagenes/pub.png';
import img16 from '../../Imagenes/ragna.webp';
import img17 from '../../Imagenes/red.avif';
import img18 from '../../Imagenes/Super_Mario_Maker_Artwork.jpg';
import img19 from '../../Imagenes/ufc.jpg';
import img20 from '../../Imagenes/uncharted.jpg';
import img21 from '../../Imagenes/WWE_2K2.jpg';


const Categorias = [
  { title: "Colección de Items 1: Juegos para regresar al colegio", imageUrl: img3 },
  { title: "Colección de Items 2: Juegos para la casa", imageUrl: img1 },
  { title: "Colección de Items 3: Juegos para los pequeños", imageUrl: img14 },
];

const fila1 = [
  { imageUrl: img4, title: "Assasin´s Creed II" },
  { imageUrl: img5, title: "FIFA 2022" },
  { imageUrl: img6, title: "God of War" },
  { imageUrl: img7, title: "Grand Theft Auto V" },
  { imageUrl: img13, title: "Mortal Kombat I" },
];

const fila2 = [
  { imageUrl: img12, title: "Minecraft" },
  { imageUrl: img8, title: "Horizont Zero Down" },
  { imageUrl: img15, title: "PUBG" },
  { imageUrl: img11, title: "The Last Of Us Part II" },
  { imageUrl: img10, title: "The Last Of Us" },
];

const fila3 = [
  { imageUrl: img17, title: "Red Dead Redemption 2" },
  { imageUrl: img18, title: "Super Mario Maker" },
  { imageUrl: img16, title: "God of War Ragnarok" },
  { imageUrl: img20, title: "Uncharted" },
  { imageUrl: img21, title: "WWW 2020" },
];

const Nuevo = [
  { title: "Magic The Gathering: Colección de Invierno Fase 2 2024 Nueva Temporada", imageUrl: img21 },
  { title: "GI Joe Classified Series Big Boa, Airborne & More", imageUrl: img19 },
  { title: "Spawn 30 Anniversary", imageUrl: img9 },
];

const PaginaPrincipal = () => {
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
