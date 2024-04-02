import { deleteCommentByPostIdQuery } from '../commentsService/queryComments.js';
import { query } from '../db.js'
import { getPostsQuery,getPostByIdQuery,updatePostQuery,addPostQuery,deletePostQuery, deletePostByUserIdQuery} from './queryPosts.js'

export class PostService {

    async getPosts() {
        const queryUsers = getPostsQuery();
        const result = await query(queryUsers);
        return result;
    }

    async getPostById(id) {
        const queryUser = getPostByIdQuery();
        const result =  await query(queryUser, [id]);
        return result;
    }
    async deletePost(id) {
        const queryComments=deleteCommentByPostIdQuery();
        const resultComments=await query(queryComments,[id]);
        const queryUser =deletePostQuery();
        const result =  await query(queryUser, [id]);
        return result;
    }
    async deletePostByUserId(user_id)
    {
        const queryPost=deletePostByUserIdQuery();
        const result =await query(queryPost,[user_id]);
        return result;
    }
    async updatePost(updatedPost) {
        const queryUser =updatePostQuery();
        const result =  await query(queryUser, [updatedPost.title, updatedPost.body,updatedPost.isActive,updatedPost.id]);
        return result;
    }
    async addPost(Post) {
        const queryUser =addPostQuery();
        const result =  await query(queryUser, [Post.user_id, Post.title, Post.body,Post.isActive]);
        return result;
    }

}