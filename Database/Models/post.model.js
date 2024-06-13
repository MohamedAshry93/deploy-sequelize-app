import { DataTypes } from "sequelize";
import { sequelize } from "../connection.js";
import { User } from "./user.model.js";

const Post = sequelize.define(
    "Post",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        timestamps: true,
    }
);
console.log(sequelize.models.Post);

User.hasMany(Post, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
});
Post.belongsTo(User);

export { Post };
