
import { query } from '../db.js';
import {updateCommentQuery,deleteCommentQuery,addCommentQuery,deleteCommentByPostIdQuery} from './queryComments.js'
import {getCommentByIdQuery,getCommentsQuery} from './queryComments.js'
import {addQuery,updateQuery,deleteQuery,getByIdQuery,getQuery} from '../query.js'

export class CommentsService {

    async getComments(limit,start) {
        console.log("in commentService at getComments");
        const queryComments = getQuery("comments",limit,start);
        console.log("query commants: "+ queryComments);
        const result = await query(queryComments);
        return result;
    }
    async getCommentById(id,limit,start,idParameter) {
        console.log("in comment by id in service ")
        const queryComment = getByIdQuery("comments",idParameter,limit,start);
        console.log("after get by id query: "+queryComment +" id: "+id);
        const result =  await query(queryComment, [id]);
        return result;
    }

    async addComment(commentItem) {
        const queryComments = addQuery("comments","post_id,name,email,body","?,?,?,?");
        const result =  await query(queryComments, [commentItem.post_id,commentItem.name,commentItem.email,commentItem.body]);
        return result;
    }

    async deleteComment(id,idParameter) {
        const queryComment = deleteQuery("comments",idParameter);
        const result =  await query(queryComment, [id]);
        return result;
    }

    async updateComment(updatedComment) {
        const queryComment = updateQuery("comments","body=?");
        const result =  await query(queryComment, [updatedComment.body,updatedComment.id]);
        return result;
    }

}


