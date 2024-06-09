import React from "react";
import {Box, Button, Container, Grid, Paper, Typography, CssBaseline, TextField} from '@mui/material';
import Header from '../../Componentes/Header2';
import Footer from '../../Componentes/Footer';
import BarLateral from '../../Componentes/BarraLateral2';

const AgregarProducto=()=>
    {
        return(
            <>
            <Header/>
            <Box sx={{display: 'flex'}}>
                <CssBaseline/>
                <BarLateral/>
                <Container component="main" sx={{flexGrow:1, p:3}}>
                    <Paper sx={{p:3, mb:2}}>
                        <Typography variant="h4" gutterBottom style={{fontWeight:'bold'}}>
                            Agregar Producto
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <Paper variant="outlined" sx={{height:'100%', display: 'flex', alignItems:'center', justifyContent:'center'}}>
                                    <Button variant="contained" component="label" style={{backgroundColor: '#FFEB3B', color:'black', fontWeight:'bold'}}>
                                        Agregar Imagen
                                        <input type="file" hidden/>
                                    </Button>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField label="Nombre" variant="outlined" fullWidth sx={{mb:2}}/>
                                <TextField label="Descripci&oacute;n" variant="outlined" fullWidth multiline rows={2} sx={{mb: 2}}/>
                                <TextField label="Caracter&iacute;sticas" variant="outlined" fullWidth multiline rows={2} sx={{mb:2}}/>
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                    <TextField label="Marca" variant="outlined" fullWidth />
                                    </Grid>
                                    <Grid item xs={6}>
                                    <TextField label="Serie" variant="outlined" fullWidth />
                                    </Grid>
                                </Grid>
                                <Grid container spacing={2} sx={{mt: 2}}>
                                    <Grid item xs={6}>
                                    <TextField label="Precio" variant="outlined" fullWidth InputProps={{startAdornment:'S/', inputProps: { min: 1, step: 0.10 }}} type="number"/>
                                    </Grid>
                                    <Grid item xs={6}>
                                    <TextField label="Stock" variant="outlined" fullWidth type="number" InputProps={{inputProps: { min: 1}}}/>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={2} sx={{mt:2}}>
                                    <Grid item xs={6}>
                                        <TextField label="Tipo" variant="outlined" fullWidth/>
                                    </Grid>
                                </Grid>
                                <Box sx={{display:'flex', justifyContent: 'flex-end', mt:3}}>
                                    <Button variant="contained" component="label" style={{backgroundColor: '#FFEB3B', color:'black', fontWeight:'bold'}}>
                                        Guardar
                                    </Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </Paper>
                </Container>
            </Box>
            <Footer/>
            </>
        );
    };

export default AgregarProducto;