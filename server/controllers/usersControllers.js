import {UsersService} from '../service/UserService/userService.js'
import { RegisterService } from '../service/registerService/registerService.js';
import {phonenumberValid,emailValid,userNameValid} from '../middleware/validation.js'

export default class UsersController {
    async getAllUsers(req, res, next) {
        try {

            const userService = new UsersService();
            const startIndex = (req.query.page_ - 1) * req.query.limit_;
            const resultItems = await userService.getUsers(req.query.limit_,startIndex);
            return res.status(200).json(resultItems);
        }
        catch (ex) {
            const err = {}
            err.statusCode = 500;
            err.message = ex;
            next(err)
        }

    }
    
    async getUserByUsername(req, res, next) {
        try {
            const userService = new UsersService();
            const startIndex = (req.query.page_ - 1) * req.query.limit_;
            const resultItems = await userService.getUserByUsername(req.params.username,req.query.limit_,startIndex);
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
            if(!phonenumberValid(req.body.phone)||!userNameValid(req.body.username)||!emailValid(req.body.email))
              throw("not valid params");
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
            console.log(req.params.id);
            const userService = new UsersService();
            const resultItems = await userService.getUserById(req.params.id);
            console.log(resultItems[0])
            const registerService=new RegisterService();
            await registerService.deleteRegister(resultItems[0].email);
            await userService.deleteUser(req.params.id);
            return res.status(200).json({ status: 200, data: req.params.id });
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
            if(!phonenumberValid(req.body.phone)||!userNameValid(req.body.username)||!emailValid(req.body.email))
                throw("not valid params");
            const resultItem = await userService.addUser(req.body);
            res.status(200).json({ status: 200, data: resultItem.insertId });
        }
        catch (ex) {
            const err = {}
            err.statusCode = 500;
            err.message = ex;
            next(err)
        }
    }
}