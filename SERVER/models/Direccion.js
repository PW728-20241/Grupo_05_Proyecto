import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";


export const Direccion = sequelize.define(
    "Direccion", {
        // nombre_del_atributo : {configuracion del atributo}
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        linea1: {
            type: DataTypes.STRING 
        },
        linea2: {
            type: DataTypes.STRING
        },
        distrito: {
            type: DataTypes.STRING
        },
        ciudad: {
            type: DataTypes.STRING
        },
        pais: {
            type: DataTypes.STRING            
        }
    }, {
        freezeTableName: true,
        timestamps: false  
    }
);


