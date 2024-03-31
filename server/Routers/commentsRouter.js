
import express from "express";
import { CommentsController } from "../controllers/commentsControllers";
const commentRouter = express.Router();

const commentController = new CommentsController()

commentRouter.get("/:id", commentController.getTestById)
commentRouter.get("/", commentController.getTest)
commentRouter.post("/", commentController.addTest)
commentRouter.delete("/:id", commentController.deleteTest)
commentRouter.put("/:id", commentController.updateTest)

export {
    commentRouter
}