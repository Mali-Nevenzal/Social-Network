import {CommentsService} from '../service/commentsService/commentsService.js'

export class CommentsController {

    async getComments(req, res, next) {
        try {
            const commentsService = new CommentsService();
            console.log(req.query.post_id);
            const resultItems = await commentsService.getCommentById(req.query.post_id,"post_id")
            return res.status(200).json(resultItems);
        }
        catch (ex) {
            const err = {}
            err.statusCode = 500;
            err.message = ex;
            next(err)
        }
    }

    async getCommentById(req, res) {
        try {
            const commentsService = new CommentsService();
            const resultItem = await commentsService.getCommentById(req.params.id,"id");
            res.status(200).json({ status: 200, data: resultItem });
        }
        catch (ex) {
            const err = {}
            err.statusCode = 500;
            err.message = ex;
            next(err)
        }
    }


    async addComment(req, res) {
        try {
            const commentsService = new CommentsService();
            await commentsService.addComment(req.body);
            res.status(200).json({ status: 200 });
        }
        catch (ex) {
            const err = {}
            err.statusCode = 500;
            err.message = ex;
            next(err)
        }
    }


    async deleteComment(req, res) {
        try {
            const commentsService = new CommentsService();
            await commentsService.deleteComment(req.params.id,"id");
            return res.status(200).json({ status: 200, data: req.params.id });
        }
        catch (ex) {
            const err = {}
            err.statusCode = 500;
            err.message = ex;
            next(err)
        }
    }

    
    async updateComment(req, res) {
        try {
            console.log("Comment");
            console.log(req.params.id);
            console.log(req.body);
            res.status(200).json({ status: 200, data: req.params.id });
        }
        catch (ex) {
            const err = {}
            err.statusCode = 500;
            err.message = ex;
            next(err)
        }
    }

}