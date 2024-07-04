import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Pago = sequelize.define(
    "Pago", {
        // nombre_del_atributo : {configuracion del atributo}
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        tipo: {
            type: DataTypes.STRING 
        },
        numeroTarjeta: {
            type: DataTypes.STRING
        },
        nombreTarjeta: {
            type: DataTypes.STRING
        },
        vencimiento: {
            type: DataTypes.STRING
        },
        ccv: {
            type: DataTypes.STRING            
        }
    }, {
        freezeTableName: true,
        timestamps: false  
    }
);
