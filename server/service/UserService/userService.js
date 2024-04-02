import { query } from '../db.js'

import {addQuery,updateQuery,getByIdQuery,getQuery, deleteByIsActiveQuery} from '../query.js'
import {PostService} from '../PostsService/postsService.js';
import {TodosService} from '../todosService/todosService.js'
const postService = new PostService();
const todoService=new TodosService();
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
         await postService.deletePost(req.params.id,"user_id");
         await todoService.deletetodo(req.params.id,"user_id");
        const queryUser = deleteByIsActiveQuery("users","id");
        const result =  await query(queryUser, [id]);
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