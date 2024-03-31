import {PostService} from '../service/UserService/userService.js'
export default class PostsController {
    async getAllPosts(req, res, next) {
        try {

            const postService = new PostService();
            const resultItems = await postService.getPosts()
            return res.status(200).json(resultItems);
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
            return res.status(200).json(resultItems);
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

            const postService = new PostService();
            const resultItems = await postService.deletePost(req.params.id);
            return res.status(200).json(resultItems);
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
            const resultItems = await postService.addPost(req.body);
            return res.status(200).json(resultItems);
        }
        catch (ex) {
            const err = {}
            err.statusCode = 500;
            err.message = ex;
            next(err)
        }
    }
}