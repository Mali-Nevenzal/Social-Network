import { query } from '../db.js'
import {addQuery,updateQuery,getByIdQuery,getQuery,deleteByIsActiveQuery} from '../query.js'
export class PostService {

    async getPosts() {
        const queryUsers = getQuery("posts");
        const result = await query(queryUsers);
        return result;
    }

    async getPostById(id) {
        const queryUser = getByIdQuery("posts","id");
        const result =  await query(queryUser, [id]);
        return result;
    }
    async deletePost(id) {
        const queryUser =deleteByIsActiveQuery("posts","id");
        const result =  await query(queryUser, [id]);
        await commentsServic.deleteComment(req.params.id,"post_id");
        return result;
    }

    async updatePost(updatedPost) {
        const queryUser =updateQuery("posts","title = ?, body = ?,isActive=?");
        const result =  await query(queryUser, [updatedPost.title, updatedPost.body,updatedPost.isActive,updatedPost.id]);
        return result;
    }
    async addPost(Post) {
        const queryUser =addQuery("posts","user_id, title, body,isActive","?,?,?,?");
        const result =  await query(queryUser, [Post.user_id, Post.title, Post.body,Post.isActive]);
        return result;
    }

}