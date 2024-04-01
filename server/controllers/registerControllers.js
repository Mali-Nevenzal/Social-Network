import { RegisterService } from '../service/registerService/registerService.js';

export class RegisterController {

    async getUserByEmail(req, res) {
        try {
            const registerService = new RegisterService();
            const resultItem = await registerService.getUserByEmail(req.params.email);
            res.status(200).json({ status: 200, data: resultItem });
        }
        catch (ex) {
            const err = {}
            err.statusCode = 500;
            err.message = ex;
            next(err)
        }
    }

    async addUser(req, res) {
        try {
            const registerService = new RegisterService();
            await registerService.addUser(req.body);
            res.status(200).json({ status: 200 });
        }
        catch (ex) {
            const err = {}
            err.statusCode = 500;
            err.message = ex;
            next(err)
        }
    }


    async deleteUser(req, res) {
        try {
            console.log("Register");
            console.log(req.params.email);
            res.status(200).json({ status: 200, data: req.params.email });
        }
        catch (ex) {
            const err = {}
            err.statusCode = 500;
            err.message = ex;
            next(err)
        }
    }


}