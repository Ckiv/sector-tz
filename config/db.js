import mysql from 'mysql2'
import Sequelize from 'sequelize'
import config from './config.js'

const sequelize = new Sequelize(config.database, config.user, config.password, {
    host: config.host,
    dialect: "mysql",
    define: {
        timestamps: false
    }
});

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

export default sequelize;