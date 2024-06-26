
import { query } from '../db.js';
import {addQuery,deleteQuery,getByIdQuery,updateQuery} from '../query.js'

export class RegisterService {


    async getRegister(username,limit,start,sort) {
        const queryRegister = getByIdQuery("register","username",limit,start,sort);
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
    async updateRegister(username,password) {
        const queryUser = updateQuery("register","password = ?","username");
        const result =  await query(queryUser, [username,password]);
        return result;
    }

}


