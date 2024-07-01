// ContenidoTablaOrdenes.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { Button, TableCell, TableRow } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function RellenarOrden(props) {
  const { orden, onOrdenDesactivada } = props;
  const navigate = useNavigate();

  const handleVerClick = () => {
    navigate(`/ordenes/${orden.id}`);
  };

  const handleDesactivarClick = async () => {
    try {
      const response = await fetch(`http://localhost:3100/ordenes/${orden.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.status === 200) {
        alert("Esta orden ha sido desactivada");
        onOrdenDesactivada(orden.id);  // Llamar a la función pasada como prop para actualizar la lista
      } else {
        alert("Error al desactivar la orden");
      }
    } catch (error) {
      console.error("Error al desactivar la orden:", error);
    }
  };

  return (
    <TableRow>
      <TableCell style={{ textAlign: 'center' }}>{orden.id}</TableCell>
      <TableCell style={{ textAlign: 'center' }}>{orden.usuarioId}</TableCell>
      <TableCell style={{ textAlign: 'center' }}>{orden.fechaOrden}</TableCell>
      <TableCell style={{ textAlign: 'center' }}>{orden.total}</TableCell>
      <TableCell style={{ textAlign: 'center' }}>{orden.productos}</TableCell>
      <TableCell style={{ textAlign: 'center' }}>{orden.estado}</TableCell>
      <TableCell style={{ textAlign: 'center' }}>
        <Button
          variant="text"
          size="small"
          style={{ fontWeight: 'bold', color: 'black' }}
          onClick={handleVerClick}
        >
          Ver
        </Button>
        <Button
          variant="text"
          size="small"
          style={{ fontWeight: 'bold', color: '#CC0000' }}
          onClick={handleDesactivarClick}
        >
          Desactivar
        </Button>
      </TableCell>
    </TableRow>
  );
}

RellenarOrden.propTypes = {
  orden: PropTypes.shape({
    id: PropTypes.number.isRequired,
    usuarioId: PropTypes.string.isRequired,
    fechaOrden: PropTypes.string.isRequired,
    total: PropTypes.string.isRequired,
    productos: PropTypes.string.isRequired,
    estado: PropTypes.string.isRequired,
  }).isRequired,
  onOrdenDesactivada: PropTypes.func.isRequired, // Función para manejar la desactivación de la orden
};

export default RellenarOrden;
