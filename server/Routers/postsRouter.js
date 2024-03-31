import express from "express";
import postsController from "../controllers/postsController.js";
const postRouter = express.Router();
let PostsController = new postsController();

postRouter.get("/", PostsController.getAllPosts);
postRouter.get("/:id", PostsController.getPostById);
postRouter.put("/:id", PostsController.updatePost);
postRouter.delete("/:id", PostsController.deletePost);
postRouter.post("/", PostsController.addPost);
export {
    postRouter
}