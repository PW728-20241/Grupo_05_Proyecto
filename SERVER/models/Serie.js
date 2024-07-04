import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Orden = sequelize.define(
    "Orden", {
        // nombre_del_atributo : {configuracion del atributo}
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING
        },
        descripcion: {
            type: DataTypes.STRING
        },
        fechaCreacion: {
            type: DataTypes.STRING
        },
        numeroProductos: {
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