import { RegisterService } from '../service/registerService/registerService.js';
import { emailValid } from '../middleware/validation.js';
import crypto from 'crypto';
export class RegisterController {

    async getRegisterByEmail(req, res,next) {
        try {
            const registerService = new RegisterService();
            console.log(req.query.email);
            const startIndex = (req.query.page_ - 1) * req.query.limit_;
            const resultItem = await registerService.getRegisterByEmail(req.query.email,req.query.limit_,startIndex);
            res.status(200).json({ status: 200, data: resultItem });
        }
        catch (ex) {
            const err = {}
            err.statusCode = 500;
            err.message = ex;
            next(err)
        }
    }

    async addRegister(req, res, next) {
        try {
            if(emailValid(req.body.email))
            {
                const registerService = new RegisterService();

                let algorithm = "sha256"
                let key = "Social-Network"
                let digest = crypto.createHash(algorithm).update(key).digest() 
                console.log(digest)
                
                await registerService.addRegister(req.body);
                res.status(200).json({ status: 200 });
            }
            else{
                throw("error email is not valid")
            }

        }
        catch (ex) {
            const err = {}
            if(ex=="error email is not valid")
              err.statusCode = 422;
            else
              err.statusCode = 500;
            err.message = ex;
            next(err)
        }
    }


    async deleteRegister(req, res) {
        try {
            console.log("register");
            const registerService = new RegisterService();
            await registerService.deleteRegister(req.query.email);
            return res.status(200).json({ status: 200, data: req.query.email });
        }
        catch (ex) {
            const err = {}
            err.statusCode = 500;
            err.message = ex;
            next(err)
        }
    }


}