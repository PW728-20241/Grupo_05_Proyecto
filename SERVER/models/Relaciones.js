// Definición de relaciones entre los modelos

import { Usuario } from './Usuario.js';
import { Producto } from './Producto.js';
import { Serie } from './Serie.js';
import { Carrito } from './Carrito.js';
import { ProductoCarrito } from './ProductoCarrito.js';
import { Orden } from './Orden.js';
import { ProductoOrden } from './ProductoOrden.js';
import { Pago } from './Pago.js';
import { Direccion } from './Direccion.js';

// Relaciones

Usuario.hasMany(Carrito, { foreignKey: 'usuarioID' });
Carrito.belongsTo(Usuario, { foreignKey: 'usuarioID' });

Carrito.hasMany(ProductoCarrito, { foreignKey: 'carritoID' });
ProductoCarrito.belongsTo(Carrito, { foreignKey: 'carritoID' });

Producto.hasMany(ProductoCarrito, { foreignKey: 'productoID' });
ProductoCarrito.belongsTo(Producto, { foreignKey: 'productoID' });

Usuario.hasMany(Orden, { foreignKey: 'usuarioID' });
Orden.belongsTo(Usuario, { foreignKey: 'usuarioID' });

Orden.hasMany(ProductoOrden, { foreignKey: 'ordenID' });
ProductoOrden.belongsTo(Orden, { foreignKey: 'ordenID' });

Producto.hasMany(ProductoOrden, { foreignKey: 'productoID' });
ProductoOrden.belongsTo(Producto, { foreignKey: 'productoID' });

Orden.hasOne(Pago, { foreignKey: 'ordenID' });
Pago.belongsTo(Orden, { foreignKey: 'ordenID' });

Orden.hasOne(Direccion, { foreignKey: 'ordenID' });
Direccion.belongsTo(Orden, { foreignKey: 'ordenID' });

Serie.hasMany(Producto, { foreignKey: 'serieID' });
Producto.belongsTo(Serie, { foreignKey: 'serieID' });

export {
    Usuario,
    Producto,
    Serie,
    Carrito,
    ProductoCarrito,
    Orden,
    ProductoOrden,
    Pago,
    Direccion
};
