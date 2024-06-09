import React from "react";
import {Box, Button, Container, Typography, CssBaseline} from '@mui/material';
import Header from '../../Componentes/Header2';
import Footer from '../../Componentes/Footer';
import BarLateral from '../../Componentes/BarraLateral2';
import Contenido from './ContenidoDashboard';

const infoDia = [
    {
        cantUsuarioNuevos: 0,
        cantOrdenesDia: 0,
        ingresosDia: 0,
        Fecha: '02/06/2024'
    }
];


const Dashboard = ()=>
    {
        return (
            <>
            <Header/>
            <Box sx={{display:'flex'}}>
                <CssBaseline/>
                  <BarLateral/>
                    <Container component="main" sx={{flexGrow: 1, p:3}}>
                        <Container sx={{flexGrow: 1}}>
                            <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
                                <Typography variant="h4" style={{fontWeight:'bold'}}>Dashboard</Typography>
                                <Button variant="contained" component="label" style={{backgroundColor: '#FFEB3B', color:'black', fontWeight:'bold'}}>Cambiar Fecha o Periodo</Button>
                            </Box>
                            {infoDia.map((item) => ( 
                                <Contenido key={item.Fecha} infoDia={item} /> 
                            ))}
                        </Container>
                    </Container>
                
            </Box>
            <br/>
            <Footer/>
            </>
        );
    };

export default Dashboard;