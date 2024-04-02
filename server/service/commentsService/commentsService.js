
import { query } from '../db.js';
import {updateCommentQuery,deleteCommentQuery,addCommentQuery,deleteCommentByPostIdQuery} from './queryComments.js'
import {getCommentByIdQuery,getCommentsQuery} from './queryComments.js'

export class CommentsService {

    async getComments() {
        const queryComments = getCommentsQuery();
        const result = await query(queryComments);
        return result;
    }

    async getCommentById(id) {
        const queryComment = getCommentByIdQuery();
        const result =  await query(queryComment, [id]);
        return result;
    }

    async addComment(commentItem) {
        const queryComments = addCommentQuery();
        const result =  await query(queryComments, [commentItem.post_id,commentItem.name,commentItem.email,commentItem.body]);
        return result;
    }

    async deleteComment(id) {
        const queryComment = deleteCommentQuery();
        const result =  await query(queryComment, [id]);
        return result;
    }
    async deleteCommentByPostId(post_id)
    {
        const queryComment=deleteCommentByPostIdQuery();
        const result=await query(queryComment,[post_id]);
    }

    async updateUser(updatedComment) {
        const queryComment = updateCommentQuery();
        const result =  await query(queryComment, [updatedComment.body,updatedUser.id]);
        return result;
    }

}


