
import { query } from '../db.js';
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
        console.log("in delete register before delete")
        const result =  await query(queryRegister, [email]);
        console.log("in registers service in delete register, email: "+ email);
        return result;
    }

}


