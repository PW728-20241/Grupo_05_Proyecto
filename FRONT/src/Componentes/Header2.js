import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Slide from '@mui/material/Slide';
import Grow from '@mui/material/Grow';

const Barra = styled('div')(({ theme }) => ({
  flexGrow: 1,
}));

const Titulo_Boton = styled(Button)(({ theme }) => ({
  color: '#000000', 
  textTransform: 'none',
  fontWeight: 'bold',
  fontSize: '1.25rem',
  fontFamily: 'Arial, sans-serif', 
  transition: 'color 0.3s ease, transform 0.2s ease',
  '&:hover': {
    color: '#fbbd08', 
    transform: 'scale(1.1)',
  },
}));


const Header1 = () => {
  return (
    <Barra>
      <Slide direction="down" in={true} mountOnEnter unmountOnExit>
        <AppBar position="static" color="default" elevation={4}>
          <Toolbar>
            <Grow in={true} timeout={500}>
              <Titulo_Boton>
                ALDO'S MARKET
              </Titulo_Boton>
            </Grow>
           
          </Toolbar>
        </AppBar>
      </Slide>
    </Barra>
  );
};

export default Header1;
