import React from "react";
import PropTypes from 'prop-types';
import { Button, TableCell, TableRow } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
function AgregarFila(props) {   
    const { arreglo_general } = props;
    async function eliminarProducto()
    {
        const respuesta = await fetch(`http://localhost:3100/productos/${arreglo_general.id}`,{method:'DELETE'})
        if(respuesta.status==200)
            {
              alert("Producto eliminado con exito");
            }
            else
            {
              alert("No se ha podido eliminar el producto");
            }
          
    }
    return (
        <TableRow >
            <TableCell style={{ textAlign: 'center' }}>{arreglo_general.id}</TableCell>
            <TableCell style={{ textAlign: 'center' }}>{arreglo_general.nombre}</TableCell>
            <TableCell style={{ textAlign: 'center' }}>{arreglo_general.editor}</TableCell>
            <TableCell style={{ textAlign: 'center' }}>{parseFloat(arreglo_general.precio).toFixed(2)}</TableCell>
            <TableCell style={{ textAlign: 'center' }}>{arreglo_general.fechaRegistro}</TableCell>
            <TableCell style={{ textAlign: 'center' }}>{arreglo_general.stock}</TableCell>
            <TableCell style={{ textAlign: 'center' }}>{arreglo_general.estado}</TableCell>
            <TableCell style={{ textAlign: 'center' }}>
                <Button component={RouterLink} to={`/detalle/${arreglo_general.id}`} variant="text" size="small" style={{ fontWeight: 'bold', color: 'black' }}>
                    Ver
                </Button>
                <Button onClick={eliminarProducto} variant="text" size="small" style={{ fontWeight: 'bold', color: '#CC0000' }}>
                    Eliminar
                </Button>
            </TableCell>
        </TableRow>
        
    );
}

AgregarFila.propTypes = {
    arreglo_general: PropTypes.shape({
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
