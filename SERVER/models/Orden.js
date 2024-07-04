import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Pago } from "./models/Pago.js";
import { Direccion } from "./models/Direccion.js";

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

Orden.hasMany(Pago,{

    foreignKey: "ordenID",
    sourceKey: "id"    
});

Pago.belongsTo(Orden,{
    foreignKey: "ordenID",
    targetKey: "id"
});

Orden.hasMany(Direccion,{

    foreignKey: "ordenID",
    sourceKey: "id"    
});

Direccion.belongsTo(Orden,{
    foreignKey: "ordenID",
    targetKey: "id"
});