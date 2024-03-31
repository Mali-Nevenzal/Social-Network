import {UserService} from '../service/UserService/userService.js'
export default class usersController {
    async getAllUsers(req, res, next) {
        try {

            const userService = new UserService();
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

            const userService = new UserService();
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

            const userService = new UserService();
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

            const userService = new UserService();
            const resultItems = await userService.deleteUser(req.params.id);
            return res.status(200).json(resultItems);
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

            const userService = new UserService();
            const resultItems = await userService.addUser(req.body);
            return res.status(200).json(resultItems);
        }
        catch (ex) {
            const err = {}
            err.statusCode = 500;
            err.message = ex;
            next(err)
        }
    }
}