import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Producto } from "./models/Producto.js";

export const Carrito = sequelize.define(
    "Carrito", {
        // nombre_del_atributo : {configuracion del atributo}
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        total: {
            type: DataTypes.INTEGER 
        },
    }, {
        freezeTableName: true,
        timestamps: false  
    }
);

const Producto_Carrito = sequelize.define(
    "Producto_Carrito", {
        cantidad: {
            type: DataTypes.INTEGER
        },
        precio: {
            type: DataTypes.FLOAT
        },
        subtotal: {
            type: DataTypes.FLOAT
        }
    }, {
        freezeTableName: true,
        timestamps: false
    }
);

Carrito.belongsToMany(Producto, {
    through: Producto_Carrito
});

Producto.belongsToMany(Carrito, {
    through: Producto_Carrito
});



