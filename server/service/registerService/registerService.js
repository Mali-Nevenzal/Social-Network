
import { query } from '../db.js';
import { getRegisterByEmailQuery,addRegisterQuery,deleteRegisterQuery } from './queryRegister.js';
import {addQuery,deleteQuery,getByIdQuery} from '../query.js'

export class RegisterService {


    async getRegisterByEmail(email) {
        const queryRegister = getByIdQuery("register","email");
        const result =  await query(queryRegister, [email]);
        return result;
    }

    async addRegister(user) {
        const queryRegister = addQuery("register","email,password","?,?");
        const result =  await query(queryRegister, [user.email,user.password]);
        return result;
    }

    async deleteRegister(email) {
        const queryRegister = deleteQuery("register","email");
        const result =  await query(queryRegister, [email]);
        return result;
    }

}


