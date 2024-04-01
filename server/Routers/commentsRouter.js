
import express from "express";
import { CommentsController } from "../controllers/commentsControllers";
const commentRouter = express.Router();

const commentController = new CommentsController()

commentRouter.get("/:id", commentController.getCommentById)
commentRouter.get("/", commentController.getComments)
commentRouter.post("/", commentController.addComment)
commentRouter.delete("/:id", commentController.deleteComment)
commentRouter.put("/:id", commentController.updateComment)

export {
    commentRouter
}