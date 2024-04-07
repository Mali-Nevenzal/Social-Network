import {CommentsService} from '../service/commentsService/commentsService.js'

export class CommentsController {

    async getComments(req, res, next) {
        try {
            const commentsService = new CommentsService();
            const startIndex = (req.query.page_ - 1) * req.query.limit_;
            const sort = req.query.sort_ || "id";
            console.log("sort with: "+sort);
            let resultItems = await commentsService.getComments(req.query.limit_,startIndex,sort,"post_id");
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
            const startIndex = (req.query.page_ - 1) * req.query.limit_;
            const sort = req.query.sort_ || "id";
            const resultItem = await commentsService.getCommentById(req.params.id,req.query.limit_,startIndex,"post_id",sort);
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
            const resultItem = await commentsService.addComment(req.body);
            res.status(200).json({ status: 200, data: resultItem.insertId });
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
            console.log("in remove comment : "+req.params.id);
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

    
    async updateComment(req, res,next) {
        try {
            const commentsService = new CommentsService();
            await commentsService.updateComment(req.body);
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