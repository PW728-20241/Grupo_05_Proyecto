import React from "react";
import PropTypes from 'prop-types';
import { Button, TableCell, TableRow } from '@mui/material';

function RellenarUsuario(props) {
    const { usuario } = props;
    return (
        <TableRow>
            <TableCell style={{ textAlign: 'center' }}>{usuario.id}</TableCell>
            <TableCell style={{ textAlign: 'center' }}>{usuario.nombre}</TableCell>
            <TableCell style={{ textAlign: 'center' }}>{usuario.apellido}</TableCell>
            <TableCell style={{ textAlign: 'center' }}>{usuario.correo}</TableCell>
            <TableCell style={{ textAlign: 'center' }}>{usuario.fechaRegistro}</TableCell>
            <TableCell style={{ textAlign: 'center' }}>{usuario.estado}</TableCell>
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

RellenarUsuario.propTypes = {
    usuario: PropTypes.shape({
        id: PropTypes.number.isRequired,
        nombre: PropTypes.string.isRequired,
        apellido: PropTypes.string.isRequired,
        correo: PropTypes.string.isRequired,
        fechaRegistro: PropTypes.string.isRequired,
        estado: PropTypes.string.isRequired,
    }).isRequired,
};

export default RellenarUsuario;
