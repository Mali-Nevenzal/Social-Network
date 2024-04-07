import { query } from '../db.js'
import {addQuery,updateQuery,getByIdQuery,getQuery,deleteByIsActiveQuery} from '../query.js'
import { CommentsService } from '../commentsService/commentsService.js';

const commentsService = new CommentsService;
export class PostService {

    async getPosts(limit,start,sort) {
        const queryUsers = getQuery("posts",limit,start,sort ,"Where is_active=1");
        const result = await query(queryUsers);
        return result;
    }
    async getPostById(id,limit,start,sort) {
        const queryPost = getByIdQuery("posts","is_active=1 AND id",limit,start,sort);
        const result =  await query(queryPost, [id]);
        return result;
    }

    async deletePost(id,idParameter) {
        console.log(id);
        await commentsService.deleteComment(id,"post_id");
        const queryPost = deleteByIsActiveQuery("posts",`${idParameter}`);
        const result =  await query(queryPost, [id]);
        return result;
    }

    async updatePost(updatedPost) {
        const queryUser =updateQuery("posts","title = ?, body = ?");
        console.log("updated post: "+ updatedPost.title+" "+updatedPost.body+" "+updatedPost.id);
        const result =  await query(queryUser, [updatedPost.title, updatedPost.body,updatedPost.id]);
        return result;
    }
    async addPost(Post) {
        const queryUser =addQuery("posts","user_id, title, body","?,?,?");
        const result =  await query(queryUser, [Post.user_id, Post.title, Post.body]);
        return result;
    }

}