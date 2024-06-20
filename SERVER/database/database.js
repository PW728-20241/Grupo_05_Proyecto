import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("grupo5_bd", "postgres", "postgres", {
    host: "localhost",
    dialect: "postgres"
});