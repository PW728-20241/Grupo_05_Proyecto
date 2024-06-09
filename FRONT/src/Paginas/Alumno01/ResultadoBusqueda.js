import React from 'react';
import { Container, Grid, Box, Typography, MenuItem, Select, FormControl, InputLabel, Pagination, Paper } from '@mui/material';
import Header1 from '../../Componentes/Header1';
import Footer from '../../Componentes/Footer';
import TarjetaProducto from '../Alumno01/RESULTADO_BUSQUEDA/Grids';
import SelectorOrden from '../Alumno01/RESULTADO_BUSQUEDA/Orden';

const productos = [
    { title: "Voltron Mini Action Voltron Vehicle Force Figure (Standard)", price: 65.99, brand: "Bandai", series: "", link: "#voltron-65.99" },
    { title: "Saint Seiya HQS Plus Athena Limited Edition Statue", price: 185.89, brand: "Bandai", series: "Saint Seiya HQS", link: "#athena-185.89" },
    { title: "Saint Seiya Premium Masterline Dragon Shiryu Final Bronze Cloth 1/4 Scale Statue", price: 4599.69, brand: "Prime 1 Studio", series: "Knights of The Zodiac", link: "#shiryu-4599.69" },
    { title: "Voltron Mini Action Voltron Vehicle Force Figure (Standard)", price: 2500.36, brand: "Bandai", series: "", link: "#voltron-2500.36" },
];

const ResultadoBusqueda = () => {
    const [ordenarPor, setOrdenarPor] = React.useState('Precio');

    const manejarCambioOrden = (event) => {
        setOrdenarPor(event.target.value);
    };

    const productosOrdenados = React.useMemo(() => {
        const copia = [...productos];
        if (ordenarPor === 'Precio') {
            return copia.sort((a, b) => a.price - b.price);
        } else if (ordenarPor === 'Nombre') {
            return copia.sort((a, b) => a.title.localeCompare(b.title));
        }
        return copia;
    }, [ordenarPor]);

    return (
        <>
            <Header1 />
            <Container maxWidth="lg">
                <SelectorOrden ordenarPor={ordenarPor} manejarCambioOrden={manejarCambioOrden} />
                <Box mb={2} p={2} border={1} borderColor="grey.400" borderRadius={4}>
                    <Typography variant="h6">Resultados de Búsqueda</Typography>
                </Box>
                {productosOrdenados.map((producto, indice) => (
                    <TarjetaProducto producto={producto} indice={indice} key={indice} />
                ))}
                <Box display="flex" justifyContent="center" mt={4} pb={20}>
                    <Pagination count={11} page={2} variant="outlined" shape="rounded" />
                </Box>
            </Container>
            <Footer />
        </>
    );
};

export default ResultadoBusqueda;