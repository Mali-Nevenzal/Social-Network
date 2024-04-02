
import { query } from '../db.js';
import { getRegisterByEmailQuery,addRegisterQuery,deleteRegisterQuery } from './queryRegister.js';

export class RegisterService {


    async getRegisterByEmail(email) {
        const queryRegister = getRegisterByEmailQuery();
        const result =  await query(queryRegister, [email]);
        return result;
    }

    async addRegister(user) {
        const queryRegister = addRegisterQuery();
        const result =  await query(queryRegister, [user.email,user.password]);
        return result;
    }

    async deleteRegister(email) {
        const queryRegister = deleteRegisterQuery();
        const result =  await query(queryRegister, [email]);
        return result;
    }

}


