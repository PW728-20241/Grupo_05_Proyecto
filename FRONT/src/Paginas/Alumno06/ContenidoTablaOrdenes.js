import React from "react";
import PropTypes from 'prop-types';
import { Button, TableCell, TableRow } from '@mui/material';

function RellenarOrden(props){
    const { orden } = props;
    return (
        <TableRow>
            <TableCell style={{ textAlign: 'center' }}>{orden.id}</TableCell>
            <TableCell style={{ textAlign: 'center' }}>{orden.usuario}</TableCell>
            <TableCell style={{ textAlign: 'center' }}>{orden.fechaOrden}</TableCell>
            <TableCell style={{ textAlign: 'center' }}>{orden.total}</TableCell>
            <TableCell style={{ textAlign: 'center' }}>{orden.correo}</TableCell>
            <TableCell style={{ textAlign: 'center' }}>{orden.estado}</TableCell>
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

RellenarOrden.propTypes = {
    orden: PropTypes.shape({
        id: PropTypes.number.isRequired,
        usuario: PropTypes.string.isRequired,
        fechaOrden: PropTypes.string.isRequired,
        total: PropTypes.string.isRequired,
        correo: PropTypes.string.isRequired,
        estado: PropTypes.string.isRequired,
    }).isRequired,
};

export default RellenarOrden;