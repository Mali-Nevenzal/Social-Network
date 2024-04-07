
import express from "express";
import { RegisterController } from "../controllers/registerControllers.js";
const registerRouter = express.Router();

const registerController = new RegisterController()

//registerRouter.get("/", registerController.getRegisterByEmail)
registerRouter.post("/:email", registerController.getRegister)
registerRouter.delete("/:username", registerController.deleteRegister)

export {
    registerRouter
}