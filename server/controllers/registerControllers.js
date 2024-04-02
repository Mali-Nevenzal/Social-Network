import { RegisterService } from '../service/registerService/registerService.js';
import { emailValid } from '../middleware/validation.js';
export class RegisterController {

    async getRegisterByEmail(req, res) {
        try {
            const registerService = new RegisterService();
            const resultItem = await registerService.getRegisterByEmail(req.params.email);
            res.status(200).json({ status: 200, data: resultItem });
        }
        catch (ex) {
            const err = {}
            err.statusCode = 500;
            err.message = ex;
            next(err)
        }
    }

    async addRegister(req, res) {
        try {
            if(emailValid(req.body.email))
            {
                const registerService = new RegisterService();
                await registerService.addRegister(req.body);
                res.status(200).json({ status: 200 });
            }
            else{
                rerr.message("EMAIL incorrect");
                err.statusCode = 422;
            }
        }
        catch (ex) {
            const err = {}
            err.statusCode = 500;
            err.message = ex;
            next(err)
        }
    }


    async deleteRegister(req, res) {
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