import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
    "bgrkphdywgacjs7zraxl",
    "usawfs8enq0zryyk",
    "ZgSvHrevK0g0MhcQtdAy",
    {
        host: "bgrkphdywgacjs7zraxl-mysql.services.clever-cloud.com",
        dialect: "mysql",
    }
);
const testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
};

const dbConnection = async () => {
    try {
        await sequelize.sync({ alter: true, force: false });
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
};

export { sequelize, testConnection, dbConnection };
