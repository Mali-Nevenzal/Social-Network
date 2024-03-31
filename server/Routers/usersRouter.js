import express from "express";
import usersController from "../controllers/usersControllers.js";
const userRouter = express.Router();
let UsersController = new usersController();

userRouter.get("/", UsersController.getAllUsers);
userRouter.get("/:id", UsersController.getUserById);
userRouter.put("/:id", UsersController.updateUser);
userRouter.delete("/:id", UsersController.deleteUser);
userRouter.post("/", UsersController.addUser);
export {
    userRouter
}