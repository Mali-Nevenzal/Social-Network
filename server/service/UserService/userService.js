import { query } from '../db.js'
import { getUsersQuery,getUserByIdQuery,deleteUserQuery} from './queryUsers.js'

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
        const queryUser =deleteUserQuery();
        const result =  await query(queryUser, [id]);
        return result;
    }
    async updateUser(updatedUser) {
        const queryUser =updateUserQuery();
        const result =  await query(queryUser, [updatedUser.]);
        return result;
    }


}