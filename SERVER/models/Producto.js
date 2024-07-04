import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';
import { Orden } from "./models/Orden.js";

export const Producto = sequelize.define(
    "Producto", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING
        },        
        precio: {
            type: DataTypes.FLOAT
        },
        fechaRegistro: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        stock: {
            type: DataTypes.INTEGER
        },
        estado: {
            type: DataTypes.STRING
        },
        imageUrl: {
            type: DataTypes.STRING
        },
        categoria: {
            type: DataTypes.STRING
        },
        nuevo: {
            type: DataTypes.BOOLEAN 
        },
        descripcion: {
            type: DataTypes.STRING 
        },
        caracteristicas: {
             type: DataTypes.ARRAY(DataTypes.STRING) 
        }
    }, {
        freezeTableName: true,
        timestamps: false  
    }
);

const Producto_Orden = sequelize.define(
    "Producto_Orden", {
        cantidad: {
            type: DataTypes.INTEGER
        },
        precio: {
            type: DataTypes.FLOAT
        }
    }, {
        freezeTableName: true,
        timestamps: false
    }
);

Producto.belongsToMany(Orden, {
    throug9u8h: Producto_Orden
});

Orden.belongsToMany(Producto, {
    through: Producto_Orden
});

