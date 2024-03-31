import { query } from '../db.js'
import { getPostsQuery,getPostByIdQuery,updatePostQuery,addPostQuery} from './queryPosts.js'

export class PostsService {

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
        const result =  await query(queryUser, [updatedPost.title, updatedPost.body,updatedPost.id]);
        return result;
    }
    async addPost(Post) {
        const queryUser =addPostQuery();
        const result =  await query(queryUser, [Post.user_id, Post.title, Post.body]);
        return result;
    }

}