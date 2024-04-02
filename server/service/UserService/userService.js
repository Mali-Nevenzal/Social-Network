import { query } from '../db.js'
//import { getUsersQuery,getUserByIdQuery,deleteUserQuery,updateUserQuery,addUserQuery} from './queryUsers.js'
import {addQuery,updateQuery,deleteByIsActiveQuery,getByIdQuery,getQuery} from '../query.js'
import { PostService } from '../postsService/postsService.js';

const postService = new PostService();

export class UsersService {

    async getUsers() {
        const queryUsers = getQuery("users");
        const result = await query(queryUsers);
        return result;
    }

    async getUserById(id) {
        const queryUser = getByIdQuery("users","id");
        const result =  await query(queryUser, [id]);
        return result;
    }
    async deleteUser(id) {
        const queryUser = deleteByIsActiveQuery("users");
        const result =  await query(queryUser, [id]);
        await postService.deletePost(req.params.id,"user_id");
        return result;
    }
    async updateUser(updatedUser) {
        const queryUser =updateQuery("users","name = ?, email = ?,phone=?");
        const result =  await query(queryUser, [updatedUser.name, updatedUser.email,updatedUser.phone,updatedUser.isActive,updatedUser.id]);
        return result;
    }
    async addUser(User) {
        const queryUser =addQuery("users","username, name, email, phone","?,?,?,?");
        const result =  await query(queryUser, [User.username,User.name, User.email,User.phone,User.isActive]);
        return result;
    }

}