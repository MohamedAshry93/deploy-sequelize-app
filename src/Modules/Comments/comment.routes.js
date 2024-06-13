import { Router } from 'express';
import * as commentController from './comment.controller.js';
const commentRouter = Router();

commentRouter.post('/addComment', commentController.addComment);
commentRouter.get('/getComments', commentController.getAllComments);
commentRouter.put('/updateComment/:id', commentController.updateComment);
commentRouter.delete('/deleteComment/:id', commentController.deleteComment)

export default commentRouter;
