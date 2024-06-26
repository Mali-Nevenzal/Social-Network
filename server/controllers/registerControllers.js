import { RegisterService } from '../service/registerService/registerService.js';
import crypto from 'crypto';
export class RegisterController {

    // async getRegister(req, res,next) {
    //     try {
    //         const registerService = new RegisterService();
    //         const startIndex = (req.query.page_ - 1) * req.query.limit_;
    //         const resultItem = await registerService.getRegister(req.query.username,req.query.limit_,startIndex);
    //         console.log(resultItem[0].password);
    //         res.status(200).json({ status: 200, data: resultItem });
    //     }
    //     catch (ex) {
    //         const err = {}
    //         err.statusCode = 500;
    //         err.message = ex;
    //         next(err)
    //     }
    // }

    async addRegister(req, res, next) {
        try {
            console.log("mali");
            const registerService = new RegisterService();
            const startIndex = (req.query.page_ - 1) * req.query.limit_;
            const sort = req.query.sort_ || "passwordd";
           //inter if there is a same email.
            const resultItem = await registerService.getRegister(req.body.username,req.query.limit_,startIndex,sort);                 
            let algorithm = "sha256"                
            let key = req.body.password;
            let digest2 = crypto.createHash(algorithm).update(key).digest("base64") 
            console.log("In base64 encoding: \n " + digest2)
            console.log(resultItem);
            await registerService.addRegister(req.body.username,digest2);
            res.status(200).json({ status: 200 });
        }
        catch (ex) {
            const err = {}
            err.statusCode = 500;
            err.message = ex;
            next(err)
        }
    }


    async getRegister(req, res, next) {
        try {
            const registerService = new RegisterService();
            const startIndex = (req.query.page_ - 1) * req.query.limit_;
            const sort = req.query.sort_ || "password";
            const resultItem = await registerService.getRegister(req.body.username,req.query.limit_,startIndex,sort);
            if(resultItem[0])
            {
                let algorithm = "sha256";
                let key = req.body.password;
                let digest= crypto.createHash(algorithm).update(key).digest("base64"); 
                if(resultItem[0].password===digest)
                {
                    console.log(resultItem[0].username)
                    res.status(200).json({ status: 200});
                }
                else{
                    res.status(500).json({ status: 500});
                }
            }
            else{
                res.status(204).json({ status: 204});
            }

        }
        catch (ex) {
            const err = {}
            err.statusCode = 500;
            err.message = ex;
            next(err)
        }
    }

    async deleteRegister(req, res,next) {
        try {
            console.log("register");
            const registerService = new RegisterService();
            await registerService.deleteRegister(req.query.username);
            return res.status(200).json({ status: 200, data: req.query.username });
        }
        catch (ex) {
            const err = {}
            err.statusCode = 500;
            err.message = ex;
            next(err)
        }
    }

    async updateRegister(req, res,next) {
        try {
            const registerService = new RegisterService();
            let digest;
         const startIndex = (req.query.page_ - 1) * req.query.limit_;
            const sort = req.query.sort_ || "password";
            const resultItem = await registerService.getRegister(req.body.username,req.query.limit_,startIndex,sort);
            if(resultItem[0])
            {
                let algorithm = "sha256";
                let key = req.body.prevPassword;
                digest= crypto.createHash(algorithm).update(key).digest("base64"); 
                if(resultItem[0].password!==digest)
                {
                    res.status(500).json({ status: 500});
                }

            }
            else{
                res.status(500).json({ status: 500});
            }
                        //במקרה של עדכון קוד, נדרוש קוד ישן קוד חדש נבצע אימות , ונאפשר במידה שהאימות תקין
            await registerService.updateRegister(req.body.username,digest);
            res.status(200).json({ status: 200, data: req.params.username });
        }
        catch (ex) {
            const err = {}
            err.statusCode = 500;
            err.message = ex;
            next(err)
        }
    }

}