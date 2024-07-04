import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Pago } from "./Pago.js";
import { Direccion } from "./Direccion.js";

export const Orden = sequelize.define(
    "Orden", {
        // nombre_del_atributo : {configuracion del atributo}
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        usuario: {
            type: DataTypes.STRING 
        },
        total: {
            type: DataTypes.INTEGER
        },
        fechaOrden: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        estado: {
            type: DataTypes.STRING
        },
        metodoEnvio: {
            type: DataTypes.STRING            
        }
    }, {
        freezeTableName: true,
        timestamps: false  
    }
);