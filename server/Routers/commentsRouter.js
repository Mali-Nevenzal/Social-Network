
import express from "express";
import { CommentsController } from "../controllers/commentsControllers.js";
const commentsRouter = express.Router();

const commentController = new CommentsController()

commentsRouter.get("/:id", commentController.getCommentById)
commentsRouter.get("/", commentController.getComments)
commentsRouter.post("/", commentController.addComment)
commentsRouter.delete("/:id", commentController.deleteComment)
commentsRouter.put("/:id", commentController.updateComment)

export {
    commentsRouter
}