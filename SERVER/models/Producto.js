import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Producto = sequelize.define(
    "Producto", {
        // nombre_del_atributo : {configuracion del atributo}
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING
        },
        editor: {
            type: DataTypes.STRING
        },
        precio: {
            type: DataTypes.FLOAT
        },
        fechaRegistro: {
            type: DataTypes.STRING
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
        descripcion: {
            type: DataTypes.TEXT,
            
        },
        caracteristicas: {
            type: DataTypes.STRING ,
            
        }
    }, {
        freezeTableName: true
    }
);