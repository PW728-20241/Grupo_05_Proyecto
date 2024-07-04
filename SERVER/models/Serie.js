import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Producto } from "./Producto.js";

export const Serie = sequelize.define(
    "Serie", {
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
        imgUrl: {
            type: DataTypes.STRING
        }, 
        cantidadProductos: {
            type: DataTypes.INTEGER,          
        }       
    }, {
        freezeTableName: true,
        timestamps: false  
    }
);

Serie.hasMany(Producto,{

    foreignKey: "serieID",
    sourceKey: "id"    
});

Producto.belongsTo(Serie,{
    foreignKey: "serieID",
    targetKey: "id"
});