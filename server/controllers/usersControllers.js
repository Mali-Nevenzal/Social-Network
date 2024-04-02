import {UsersService} from '../service/UserService/userService.js'
import { RegisterService } from '../service/registerService/registerService.js';
export default class UsersController {
    async getAllUsers(req, res, next) {
        try {

            const userService = new UsersService();
            const resultItems = await userService.getUsers()
            return res.status(200).json(resultItems);
        }
        catch (ex) {
            const err = {}
            err.statusCode = 500;
            err.message = ex;
            next(err)
        }

    }
    
    async getUserById(req, res, next) {
        try {

            const userService = new UsersService();
            const resultItems = await userService.getUserById(req.params.id);
            return res.status(200).json(resultItems);
        }
        catch (ex) {
            const err = {}
            err.statusCode = 500;
            err.message = ex;
            next(err)
        }
    }

    async updateUser(req, res, next) {
        try {
            const userService = new UsersService();
            const resultItems = await userService.updateUser(req.body);
            return res.status(200).json(resultItems);
        }
        catch (ex) {
            const err = {}
            err.statusCode = 500;
            err.message = ex;
            next(err)
        }
    }
    async deleteUser(req, res, next) {
        try {
            console.log("users");
            const userService = new UsersService();
            const resultItems = await userService.getUserById(req.params.id);
            console.log(resultItems[0].email);
            const registerService=new RegisterService();
            await registerService.deleteRegister(result[0].email);
            console.log("after delete register");
            await userService.deleteUser(req.params.id);
            return res.status(200).json({ status: 200, data: req.params.id });
            //console.log("users");
         
            //const registerService=new RegisterService();
            //await registerService.deleteRegister(result[0].email);
           // console.log("resualt " +result);
   
        }
        catch (ex) {
            const err = {}
            err.statusCode = 500;
            err.message = ex;
            next(err)
        }
    }
    async addUser(req, res, next) {
        try {
            console.log(req.body);
            const userService = new UsersService();
            await userService.addUser(req.body);
            res.status(200).json({status: 200});
        }
        catch (ex) {
            const err = {}
            err.statusCode = 500;
            err.message = ex;
            next(err)
        }
    }
}