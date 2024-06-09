import React from 'react';
import { Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import PropTypes from 'prop-types';

const SelectorOrden = ({ ordenarPor, manejarCambioOrden }) => {
    return (
        <Box display="flex" justifyContent="flex-end" my={4}>
            <FormControl variant="outlined" size="small">
                <InputLabel>Ordenar Por:</InputLabel>
                <Select
                    value={ordenarPor}
                    onChange={manejarCambioOrden}
                    label="Ordenar Por:"
                >
                    <MenuItem value="Precio">Precio</MenuItem>
                    <MenuItem value="Nombre">Nombre</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
};

SelectorOrden.propTypes = {
    ordenarPor: PropTypes.string.isRequired,
    manejarCambioOrden: PropTypes.func.isRequired,
};

export default SelectorOrden;
