import { DataTypes } from "sequelize";
import { sequelize } from "../database/database";

export const Producto = sequelize.define(
    "Producto", {
        // nombre_del_atributo : {configuracion del atributo}
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        detalle: {
            type: DataTypes.STRING
        },
        serie: {
            type: DataTypes.STRING
        },
        precio: {
            type: DataTypes.STRING
        },
        fechaRegistro: {
            type: DataTypes.STRING
        },
        stock: {
            type: DataTypes.STRING
        },
        estado: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    }, {
        freezeTableName: true
    }
);