import React from 'react';
import { Container, CssBaseline, Grid } from '@mui/material';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../Componentes/Header/Header';
import BarraLateral from '../Componentes/BarraLateral/BarraLateral2';
import Footer from '../Componentes/Footer/Footer';
import SeriesTable from './SeriesTable';
import AddSeries from './AddSeries';
import SeriesDetail from './SeriesDetail';

const Dseries = () => {
  return (
    <>
      <Header />
      <Container maxWidth="lg" sx={{ padding: 3 }}>
        <CssBaseline />
        <Grid container spacing={2}>
          <Grid item xs={12} md={2}>
            <BarraLateral />
          </Grid>
          <Grid item xs={12} md={10}>
            <Router>
              <Switch>
                <Route exact path="/ver/serie/:id" component={SeriesDetail} />
                <Route path="/agregar-serie" component={AddSeries} />
                <Route path="/" component={SeriesTable} />
              </Switch>
            </Router>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default Dseries;
