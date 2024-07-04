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
        fechaOrden: {
            type: DataTypes.STRING
        },
        total: {
            type: DataTypes.STRING
        },
        productos: {
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