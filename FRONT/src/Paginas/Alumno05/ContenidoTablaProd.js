import React from "react";
import PropTypes from 'prop-types';
import { Button, TableCell, TableRow } from '@mui/material';

function AgregarFila(props) {   
    const { producto } = props;

    return (
        <TableRow >
            <TableCell style={{ textAlign: 'center' }}>{producto.id}</TableCell>
            <TableCell style={{ textAlign: 'center' }}>{producto.nombre}</TableCell>
            <TableCell style={{ textAlign: 'center' }}>{producto.editor}</TableCell>
            <TableCell style={{ textAlign: 'center' }}>{"S/ " + parseFloat(producto.precio).toFixed(2)}</TableCell>
            <TableCell style={{ textAlign: 'center' }}>{producto.fechaRegistro}</TableCell>
            <TableCell style={{ textAlign: 'center' }}>{producto.stock}</TableCell>
            <TableCell style={{ textAlign: 'center' }}>{producto.estado}</TableCell>
            <TableCell style={{ textAlign: 'center' }}>
                <Button variant="text" size="small" style={{ fontWeight: 'bold', color: 'black' }}>
                    Ver
                </Button>
                <Button variant="text" size="small" style={{ fontWeight: 'bold', color: '#CC0000' }}>
                    Desactivar
                </Button>
            </TableCell>
        </TableRow>
        
    );
}

AgregarFila.propTypes = {
    producto: PropTypes.shape({
        id: PropTypes.number.isRequired,
        nombre: PropTypes.string.isRequired,
        editor: PropTypes.string.isRequired,
        precio: PropTypes.number.isRequired,
        fechaRegistro: PropTypes.string.isRequired,
        stock: PropTypes.number.isRequired,
        estado: PropTypes.string.isRequired
    }).isRequired,
};

export default AgregarFila;
