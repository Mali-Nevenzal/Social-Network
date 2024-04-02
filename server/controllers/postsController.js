
import { PostService } from "../service/postsService/postsService.js";
export default class PostsController {
    async getAllPosts(req, res, next) {
        try {
            const postService = new PostService();
            const startIndex = (page - 1) * req.query.limit_;
            const resultPosts = await postService.getPosts(req.query.limit_,startIndex);
            return res.status(200).json(resultPosts);
        }
        catch (ex) {
            const err = {}
            err.statusCode = 500;
            err.message = ex;
            next(err)
        }

    }
    
    async getPostById(req, res, next) {
        try {

            const postService = new PostService();
            const resultItems = await postService.getPostById(req.params.id);
            return res.status(200).json({ status: 200, data: resultItems });
        }
        catch (ex) {
            const err = {}
            err.statusCode = 500;
            err.message = ex;
            next(err)
        }
    }

    async updatePost(req, res, next) {
        try {

            const postService = new PostService();
            const resultItems = await postService.updatePost(req.body);
            return res.status(200).json(resultItems);
        }
        catch (ex) {
            const err = {}
            err.statusCode = 500;
            err.message = ex;
            next(err)
        }
    }
    async deletePost(req, res, next) {
        try {
            console.log("posts");
            const postService = new PostService();
            await postService.deletePost(req.params.id,"id");
            return res.status(200).json({ status: 200, data: req.params.id });
        }
        catch (ex) {
            const err = {}
            err.statusCode = 500;
            err.message = ex;
            next(err)
        }
    }
    async addPost(req, res, next) {
        try {

            const postService = new PostService();
            await postService.addPost(req.body);
            res.status(200).json({ status: 200 });
        }
        catch (ex) {
            const err = {}
            err.statusCode = 500;
            err.message = ex;
            next(err)
        }
    }
}