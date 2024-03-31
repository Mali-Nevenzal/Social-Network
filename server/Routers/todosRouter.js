import express from "express";
import { TodosController } from "../controllers/todosControllers.js";
const todosRouter = express.Router();

const testcontroller = new TodosController()

todosRouter.get("/:id", testcontroller.getTestById)
todosRouter.get("/", testcontroller.getTest)
todosRouter.post("/", testcontroller.addTest)
todosRouter.delete("/:id", testcontroller.deleteTest)
todosRouter.put("/:id", testcontroller.updateTest)

export {
    todosRouter
}