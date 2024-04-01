
import { query } from '../db.js';
import { getUserByEmailQuery,addRegisterQuery,deleteRegisterQuery } from './queryRegister.js';

export class RegisterService {


    async getUserByEmail(email) {
        const queryRegister = getUserByEmailQuery();
        const result =  await query(queryRegister, [email]);
        return result;
    }

    async addUser(user) {
        const queryRegister = addRegisterQuery();
        const result =  await query(queryRegister, [user.email,user.password]);
        return result;
    }

    async deleteUser(email) {
        const queryRegister = deleteRegisterQuery();
        const result =  await query(queryRegister, [email]);
        return result;
    }

}


