import React from "react";
import PropTypes from 'prop-types';
import { Button, TableCell, TableRow } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function RellenarUsuario(props) {
    const { usuario } = props;
    const navigate = useNavigate();

    const handleVerClick = () => {
        navigate(`/usuarios/${usuario.id}`);
    };

    const handleDesactivarClick = async () => 
    {
        try {
            const response = await fetch(`http://localhost:3100/usuarios/${usuario.id}/desactivar`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.status === 200) {
                alert("Este usuario ha sido desactivado");
                window.location.reload();
            } else if (response.status === 404) {
                alert("Usuario no encontrado");
            } else {
                alert("Error al desactivar el usuario");
            }
        } catch (error) {
            console.error("Error al desactivar el usuario:", error);
        }
    };

    return (
        <TableRow>
            <TableCell style={{ textAlign: 'center' }}>{usuario.id}</TableCell>
            <TableCell style={{ textAlign: 'center' }}>{usuario.nombre}</TableCell>
            <TableCell style={{ textAlign: 'center' }}>{usuario.apellido}</TableCell>
            <TableCell style={{ textAlign: 'center' }}>{usuario.correo}</TableCell>
            <TableCell style={{ textAlign: 'center' }}>{usuario.fechaRegistro}</TableCell>
            <TableCell style={{ textAlign: 'center' }}>{usuario.estado}</TableCell>
            <TableCell style={{ textAlign: 'center' }}>
                <Button
                    variant="text"
                    size="small"
                    style={{ fontWeight: 'bold', color: 'black' }}
                    onClick={handleVerClick}
                >
                    Ver
                </Button>
                {usuario.estado === 'Activo' && (
                    <Button
                        variant="text"
                        size="small"
                        style={{ fontWeight: 'bold', color: '#CC0000' }}
                        onClick={handleDesactivarClick}
                    >
                        Desactivar
                    </Button>
                )}
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