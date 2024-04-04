import express from "express";
import UsersController from "../controllers/usersControllers.js";
const usersRouter = express.Router();
let usersController = new UsersController();

usersRouter.get("/", usersController.getAllUsers);
usersRouter.get("/:username", usersController.getUserByUsername);
usersRouter.put("/:id", usersController.updateUser);
usersRouter.delete("/:id", usersController.deleteUser);
usersRouter.post("/", usersController.addUser);
export {
    usersRouter
}