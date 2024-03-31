import express from "express";
import { TestController } from '../controllers/testController.js'
const todosRouter = express.Router();

const testcontroller = new TestController()

todosRouter.get("/:id", testcontroller.getTestById)
todosRouter.get("/", testcontroller.getTest)
todosRouter.post("/", testcontroller.addTest)
todosRouter.delete("/:id", testcontroller.deleteTest)
todosRouter.put("/:id", testcontroller.updateTest)

export {
    todosRouter
}