import express from "express";
import { TodosController } from "../controllers/todosControllers.js";
const todosRouter = express.Router();

const todoController = new TodosController()

todosRouter.get("/:id", todoController.getTodoById)
todosRouter.get("/", todoController.getTodos)
todosRouter.post("/", todoController.addTodo)
todosRouter.delete("/:id", todoController.deleteTodo)
todosRouter.put("/:id", todoController.updateTodo)

export {
    todosRouter
}