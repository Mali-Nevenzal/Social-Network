import express from "express";
import PostsController from "../controllers/postsController.js";
const postRouter = express.Router();
let postsController = new PostsController();

postRouter.get("/", postsController.getAllPosts);
postRouter.get("/:id", postsController.getPostById);
postRouter.put("/:id", postsController.updatePost);
postRouter.delete("/:id", postsController.deletePost);
postRouter.post("/", postsController.addPost);
export {
    postRouter
}