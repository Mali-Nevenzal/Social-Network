import { query } from '../db.js'
import { getPostsQuery,getPostByIdQuery,updatePostQuery,addPostQuery,deletePostQuery} from './queryPosts.js'

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
        const queryUser =deletePostQuery();
        const result =  await query(queryUser, [id]);
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