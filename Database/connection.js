import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
    "b7gffbv8eoqqua7ogrlj",
    "uxisy2xkzbaqa0dw",
    "uNwS2WyewQGqs52NR0N0",
    {
        host: "b7gffbv8eoqqua7ogrlj-mysql.services.clever-cloud.com",
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
