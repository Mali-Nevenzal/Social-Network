import { query } from '../db.js'
import {phonenumberValid,emailValid,userNameValid} from '../../middleware/validation.js'
import {addQuery,updateQuery,getByIdQuery,getQuery, deleteByIsActiveQuery} from '../query.js'
import {PostService} from '../PostsService/postsService.js';
import {TodosService} from '../todosService/todosService.js'
const postService = new PostService();
const todoService=new TodosService();
export class UsersService {

    async getUsers(limit,start) {
        const queryUsers = getQuery("users",limit,start,"Where is_active=1");
        const result = await query(queryUsers);
        return result;
    }

    async getUserById(id,limit,start) {
        const queryUser = getByIdQuery("users","is_active=1 AND id",limit,start);
        const result =  await query(queryUser, [id]);
        return result;
    }

    async deleteUser(id) { 
        await postService.deletePost(id,"user_id");
        await todoService.deletetodo(id,"user_id");
        const queryUser = deleteByIsActiveQuery("users","id");
        const result =  await query(queryUser, [id]);
        return result;
    }
    async updateUser(updatedUser) {
        const queryUser = updateQuery("users","name = ?, email = ?,phone=?");
        const result =  await query(queryUser, [updatedUser.name, updatedUser.email,updatedUser.phone,updatedUser.id]);
        return result;
    }
    async addUser(User) {

        const queryUser =addQuery("users","name, username, email, phone","?,?,?,?");
        console.log("in user service add user");
        console.log(User.name+User.username+User.email+User.phone);
        // if(!phonenumberValid(User.phone)||!userNameValid(User.username)||!emailValid(User.email))
        //     throw("not valid params");
        const result =  await query(queryUser, [User.name,User.username, User.email,User.phone]);
        return result;
    }
}