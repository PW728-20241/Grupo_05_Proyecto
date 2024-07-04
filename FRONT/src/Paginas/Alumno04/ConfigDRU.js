import React from "react";
import { Box, Grid, CssBaseline, Container } from "@mui/material";
import Detalle from "./DatosRegistroUsuario";
import Sidebar from "../../Componentes/BarraLateral1";
import Footer from "../../Componentes/Footer";
import Header1 from "../../Componentes/Header2";
const DetalleUsuario = () => {
  return (
    <>
      <Header1 />
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Sidebar />
        <Container component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Container sx={{ flexGrow: 1 }}>
            <Detalle />
          </Container>
        </Container>
      </Box>
      <br />
      <Footer />
    </>
  );
};

export default DetalleUsuario;
