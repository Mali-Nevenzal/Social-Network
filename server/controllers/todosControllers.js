import {TodosService} from '../service/todosService/todosService.js'
export class TodosController {

    async getTodos(req, res, next) {
        try {
            const todosService = new TodosService();
            const startIndex = (req.query.page_ - 1) * req.query.limit_;
            const resultItems = await todosService.getTodos(req.query.limit_,startIndex)
            return res.status(200).json(resultItems);
        }
        catch (ex) {
            const err = {}
            err.statusCode = 500;
            err.message = ex;
            next(err)
        }
    }

    async getTodoById(req, res) {
        try {
            const todosService = new TodosService();
            const startIndex = (req.query.page_ - 1) * req.query.limit_;
            const resultItem = await todosService.getTodoById(req.params.id,req.query.limit_,startIndex);
            res.status(200).json({ status: 200, data: resultItem });
        }
        catch (ex) {
            const err = {}
            err.statusCode = 500;
            err.message = ex;
            next(err)
        }
    }


    async addTodo(req, res) {
        try {
            const todosService = new TodosService();
            await todosService.addTodo(req.body);
            res.status(200).json({ status: 200 });
        }
        catch (ex) {
            const err = {}
            err.statusCode = 500;
            err.message = ex;
            next(err)
        }
    }


    async deleteTodo(req, res) {
        try {
            console.log("todos");
            const todoService = new TodosService();
            await todoService.deletetodo(req.params.id,"id");
            return res.status(200).json({ status: 200, data: req.params.id });
        }
        catch (ex) {
            const err = {}
            err.statusCode = 500;
            err.message = ex;
            next(err)
        }
    }

    
    async updateTodo(req, res) {
        try {
            const todoService = new TodosService();
            await todoService.updateTodo(req.body);
            res.status(200).json({ status: 200, data: req.params.id });
        }
        catch (ex) {
            const err = {}
            err.statusCode = 500;
            err.message = ex;
            next(err)
        }
    }

}