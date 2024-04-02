import { query } from '../db.js'
import { deletePostByUserIdQuery, deletePostQuery } from '../postsService/queryPosts.js';
import { deleteTodoQuery } from '../todosService/queryTodos.js';
import { getUsersQuery,getUserByIdQuery,deleteUserQuery,updateUserQuery,addUserQuery} from './queryUsers.js'

export class UsersService {

    async getUsers() {
        const queryUsers = getUsersQuery();
        const result = await query(queryUsers);
        return result;
    }

    async getUserById(id) {
        const queryUser = getUserByIdQuery();
        const result =  await query(queryUser, [id]);
        return result;
    }
    async deleteUser(id) {
        const queryUserTodos=deleteTodoQuery();
        const resultTodo =  await query(queryUser, [id]);
        //delete comments check how to delete with post id
        const queryUserPosts=deletePostByUserIdQuery();
        const resultPost =  await query(queryUser, [id]);
        
        const queryUser =deleteUserQuery();
        const result =  await query(queryUser, [id]);
        return result;
    }
    async updateUser(updatedUser) {
        const queryUser =updateUserQuery();
        const result =  await query(queryUser, [updatedUser.name, updatedUser.email,updatedUser.phone,updatedUser.isActive,updatedUser.id]);
        return result;
    }
    async addUser(User) {
        const queryUser =addUserQuery();
        const result =  await query(queryUser, [User.username,User.name, User.email,User.phone,User.isActive]);
        return result;
    }

}