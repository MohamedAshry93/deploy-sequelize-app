import { Router } from "express";
import * as postController from "./post.controller.js";
const postRouter = Router();

postRouter.post("/addPost", postController.addPost);
postRouter.get("/getPosts", postController.getAllPosts);
postRouter.put("/updatePost/:id", postController.updatePost);
postRouter.delete("/deletePost/:id", postController.deletePost);
postRouter.get("/getPost/:id", postController.getSpecificPost);

export default postRouter;
