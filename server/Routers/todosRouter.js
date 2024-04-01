import express from "express";
import { TodosController } from "../controllers/todosControllers.js";
const todosRouter = express.Router();

const todoController = new TodosController()

todosRouter.get("/:id", todoController.getTestById)
todosRouter.get("/", todoController.getTest)
todosRouter.post("/", todoController.addTest)
todosRouter.delete("/:id", todoController.deleteTest)
todosRouter.put("/:id", todoController.updateTest)

export {
    todosRouter
}