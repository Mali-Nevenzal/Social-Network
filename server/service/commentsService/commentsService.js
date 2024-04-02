
import { query } from '../db.js';
import {updateCommentQuery,deleteCommentQuery,addCommentQuery,deleteCommentByPostIdQuery} from './queryComments.js'
import {getCommentByIdQuery,getCommentsQuery} from './queryComments.js'
import {addQuery,updateQuery,deleteQuery,getByIdQuery,getQuery} from '../query.js'

export class CommentsService {

    async getComments() {
        const queryComments = getQuery("comments");
        const result = await query(queryComments);
        return result;
    }

    async getCommentById(id) {
        const queryComment = getByIdQuery("comments","id");
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

    async updateUser(updatedComment) {
        const queryComment = updateQuery("comments","body = ?");
        const result =  await query(queryComment, [updatedComment.body,updatedUser.id]);
        return result;
    }

}


