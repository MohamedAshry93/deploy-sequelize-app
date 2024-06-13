import express from "express";
import { dbConnection } from "./Database/connection.js";
import { User } from "./Database/Models/user.model.js";
import { Post } from "./Database/Models/post.model.js";
import { Comment } from "./Database/Models/comment.model.js";
import userRouter from "./src/Modules/Users/user.routes.js";
import postRouter from "./src/Modules/Posts/post.routes.js";
import commentRouter from './src/Modules/Comments/comment.routes.js';

const app = express();
const port = 8080;
app.use(express.json());

app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRouter);

User;
Post;
Comment;
dbConnection();
app.use("*", (req,res) => res.status(404).json({ Message: "Not found route" }));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
