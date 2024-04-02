
import express from "express";
import { RegisterController } from "../controllers/registerControllers";
const registerRouter = express.Router();

const registerController = new RegisterController()

registerRouter.get("/:email", registerController.getRegisterByEmail)
registerRouter.post("/", registerController.addRegister)
registerRouter.delete("/:id", registerController.deleteRegister)

export {
    registerRouter
}