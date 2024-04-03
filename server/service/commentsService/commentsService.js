
import { query } from '../db.js';
import {updateCommentQuery,deleteCommentQuery,addCommentQuery,deleteCommentByPostIdQuery} from './queryComments.js'
import {getCommentByIdQuery,getCommentsQuery} from './queryComments.js'
import {addQuery,updateQuery,deleteQuery,getByIdQuery,getQuery} from '../query.js'

export class CommentsService {

    async getComments(limit,start) {
        const queryComments = getQuery("comments",limit,start);
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
    
    async sortComments(comments, sortParam) {
        let sortedComments;

        if (sortParam) {
            switch (sortParam) {
                case 'name':
                    sortedComments = comments.slice().sort((a, b) => a[0].name.localeCompare(b[0].name));
                    break;
                case 'post_id':
                    sortedComments = comments.slice().sort((a, b) => a[0].post_id .localeCompare(b[0].post_id));
                    break;
                case 'id':
                    sortedComments = comments.slice().sort((a, b) => a[0].id .localeCompare(b[0].id));
                     break;
                default:
                    return res.status(400).json({ error: 'Invalid sort parameter' });
            }
        } else {
            console.log( "in else sort in comments service "+comments[0].id)
            return comments;
        }
        console.log("in sort comment in comments service "+comments[0].id);
        return sortedComments;
    }
}


