import express from "express";
import PostsController from "../controllers/postsController.js";
const postsRouter = express.Router();
let postsController = new PostsController();

postsRouter.get("/", postsController.getAllPosts);
postsRouter.get("/:id", postsController.getPostById);
postsRouter.put("/:id", postsController.updatePost);
postsRouter.delete("/:id", postsController.deletePost);
postsRouter.post("/", postsController.addPost);
export {
    postsRouter
}