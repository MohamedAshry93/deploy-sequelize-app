import { DataTypes } from "sequelize";
import { sequelize } from "../connection.js";
import { Post } from "./post.model.js";
import { User } from "./user.model.js";

const Comment = sequelize.define("Comment", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})

console.log(sequelize.models.Comment);

Post.hasMany(Comment, {
    onDelete: "CASCADE",
    onUpdate: 'CASCADE',
});
Comment.belongsTo(Post);

User.hasMany(Comment, {
    onDelete: "CASCADE",
    onUpdate: 'CASCADE',
});
Comment.belongsTo(User);

export { Comment };
