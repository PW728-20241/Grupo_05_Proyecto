import React from "react";
import PropTypes from 'prop-types';
import { Button, TableCell, TableRow } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function RellenarOrden(props){
    const { orden } = props;
    const navigate = useNavigate();

    const handleVerClick = () => {
        navigate(`/ordenes/${orden.id}`);
    };

    const handleDesactivarClick = async () => 
    {
        try {
            const response = await fetch(`http://localhost:3100/ordenes/${orden.id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.status === 200) {
                alert("Este usuario ha sido desactivado");
                window.location.reload();
            } else {
                alert("Error al desactivar el usuario");
            }
        } catch (error) {
            console.error("Error al desactivar el usuario:", error);
        }
    };

    return (
        <TableRow>
            <TableCell style={{ textAlign: 'center' }}>{orden.id}</TableCell>
            <TableCell style={{ textAlign: 'center' }}>{orden.usuario}</TableCell>
            <TableCell style={{ textAlign: 'center' }}>{orden.fechaOrden}</TableCell>
            <TableCell style={{ textAlign: 'center' }}>{orden.total}</TableCell>
            <TableCell style={{ textAlign: 'center' }}>{orden.correo}</TableCell>
            <TableCell style={{ textAlign: 'center' }}>{orden.estado}</TableCell>
            <TableCell style={{ textAlign: 'center' }}>
                <Button
                variant="text"
                size="small"
                style={{ fontWeight: 'bold', color: 'black' }}
                onClick={handleVerClick}>
                    Ver
                </Button>
                <Button variant="text"
                    size="small"
                    style={{ fontWeight: 'bold', color: '#CC0000' }}
                    onClick={handleDesactivarClick}>
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