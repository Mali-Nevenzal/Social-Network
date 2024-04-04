
import { query } from '../db.js';
import {addQuery,deleteQuery,getByIdQuery} from '../query.js'

export class RegisterService {


    async getRegister(username,limit,start) {
        const queryRegister = getByIdQuery("register","username",limit,start);
        const result =  await query(queryRegister, [username]);
        return result;
    }

    async addRegister(username,password) {
        const queryRegister = addQuery("register","username,password","?,?");
        const result =  await query(queryRegister, [username,password]);
        return result;
    }

    async deleteRegister(username) {
        console.log("in delete register before delete");
        const queryRegister = deleteQuery("register","username");
        const result =  await query(queryRegister, [username]);
        console.log("in registers service in delete register, username: "+ username);
        return result;
    }

}


