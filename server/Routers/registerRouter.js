
import express from "express";
import { RegisterController } from "../controllers/registerControllers";
const registerRouter = express.Router();

const registerController = new RegisterController()

registerRouter.get("/:email", registerController.getUserByEmail)
registerRouter.post("/", registerController.addUser)
registerRouter.delete("/:id", registerController.deleteUser)

export {
    registerRouter
}