import express from "express";
import UsersController from "../controllers/usersControllers.js";
const userRouter = express.Router();
let usersController = new UsersController();

userRouter.get("/", usersController.getAllUsers);
userRouter.get("/:id", usersController.getUserById);
userRouter.put("/:id", usersController.updateUser);
userRouter.delete("/:id", usersController.deleteUser);
userRouter.post("/", usersController.addUser);
export {
    userRouter
}