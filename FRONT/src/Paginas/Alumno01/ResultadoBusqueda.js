import React, { useState, useEffect } from 'react';
import { Container, Box, Typography, Pagination } from '@mui/material';
import Header1 from '../../Componentes/Header1';
import Footer from '../../Componentes/Footer';
import TarjetaProducto from '../Alumno01/RESULTADO_BUSQUEDA/Grids';
import SelectorOrden from '../Alumno01/RESULTADO_BUSQUEDA/Orden';

const ResultadoBusqueda = () => {
    const [productos, setProductos] = useState([]);
    const [paginaActual, setPaginaActual] = useState(1);
    const productosPorPagina = 5; // Número de productos por página

    useEffect(() => {
        fetch('http://localhost:3100/buscar?query=')
            .then(response => response.json())
            .then(data => {
                const resultados = data.map((producto, index) => ({
                    title: producto.titulo,
                    price: producto.precio,
                    brand: producto.brand,
                    imageUrl: producto.imageUrl,
                    series: producto.series,
                    link: `#producto-${index}`
                }));
                setProductos(resultados);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const [ordenarPor, setOrdenarPor] = useState('Precio');

    const manejarCambioOrden = (event) => {
        setOrdenarPor(event.target.value);
    };

    const productosOrdenados = productos.slice().sort((a, b) => {
        if (ordenarPor === 'Precio') {
            return a.price - b.price;
        } else if (ordenarPor === 'Nombre') {
            return a.title.localeCompare(b.title);
        }
        return 0;
    });

    
    const indiceInicio = (paginaActual - 1) * productosPorPagina;
    const indiceFin = indiceInicio + productosPorPagina;
    const productosPaginados = productosOrdenados.slice(indiceInicio, indiceFin);

    const handleChangePage = (event, value) => {
        setPaginaActual(value);
    };

    return (
        <>
            <Header1 />
            <Container maxWidth="lg">
                <SelectorOrden ordenarPor={ordenarPor} manejarCambioOrden={manejarCambioOrden} />
                <Box mb={2} p={2} border={1} borderColor="grey.400" borderRadius={4}>
                    <Typography variant="h6">Resultados de Búsqueda</Typography>
                </Box>
                {productosPaginados.map((producto, index) => (
                    <TarjetaProducto producto={producto} indice={indiceInicio + index} key={indiceInicio + index} />
                ))}
                <Box display="flex" justifyContent="center" mt={4} pb={20}>
                    <Pagination
                        count={Math.ceil(productosOrdenados.length / productosPorPagina)}
                        page={paginaActual}
                        variant="outlined"
                        shape="rounded"
                        onChange={handleChangePage}
                    />
                </Box>
            </Container>
            <Footer />
        </>
    );
};

export default ResultadoBusqueda;
