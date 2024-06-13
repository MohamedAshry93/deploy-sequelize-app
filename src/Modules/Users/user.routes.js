import { Router } from "express";
import * as userController from "./user.controller.js";
import { checkEmailExist } from "../../middleware/checkEmailExist.js";
const userRouter = Router();

userRouter.post("/signup", checkEmailExist, userController.signUp);
userRouter.post("/signin", userController.signIn);
userRouter.get('/getUser/:id', userController.getSpecificUser);

export default userRouter;
