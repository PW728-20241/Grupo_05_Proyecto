import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize("grupo5_bd", "usr_juego", "Videojuegos#", {
    host: "juegosbd.postgres.database.azure.com",
    dialect: "postgres",
    port: 5432,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
});

sequelize.authenticate()
    .then(() => {
        console.log('Conexión establecida con éxito.');
    })
    .catch(err => {
        console.error('No se puede conectar a la base de datos:', err);
    });
