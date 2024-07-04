// src/App.jsx
import React from 'react';
import { Container, CssBaseline, Grid,Box } from '@mui/material';
import Header from '../../Componentes/Header1';
import Sidebar from '../../Componentes/BarraLateral2';
import SeriesTable from './ListadoSeriesAdmin';
import Footer from '../../Componentes/Footer';

const ListadoSeries = () => {
    return (
        <>
        <Header/>
        <Box sx={{display:'flex'}}>
            <CssBaseline/>
              <Sidebar/>
                <Container component="main" sx={{flexGrow: 1, p:3}}>
                    <Container sx={{flexGrow: 1}}>
                        <SeriesTable/>
                    </Container>
                </Container>
            
        </Box>
        <br/>
        <Footer/>
        </>
    );
  };
  
  export default ListadoSeries;
