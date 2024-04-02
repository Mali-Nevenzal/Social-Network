
import { query } from '../db.js';
import { getTodosQuery ,getTodoByIdQuery,addTodoQuery} from './queryTodos.js'
import { deleteTodoQuery ,updateTodoQuery} from './queryTodos.js'
import {addQuery,updateQuery,deleteQuery,getByIdQuery,getQuery} from '../query.js'

export class TodosService {

    async getTodos() {
        const queryTodos = getQuery("todos");
        const result = await query(queryTodos);
        return result;
    }

    async getTodoById(id) {
        const queryTodos = getByIdQuery("todos","id");
        const result =  await query(queryTodos, [id]);
        return result;
    }

    async addTodo(todoItem) {
        const queryTodos = addQuery("todos","user_id,title,completed","?,?,?");
        console.log("mali"+todoItem)
        const result =  await query(queryTodos, [todoItem.user_id,todoItem.title,todoItem.completed]);
        return result;
    }

    async deletetodo(id,idParameter) {
        console.log(idParameter);
        const queryTodos = deleteQuery("todos",idParameter);
        const result =  await query(queryTodos, [id]);
        return result;
    }

    async updateTodo(updatedTodo) {
        const queryTodo =updateQuery("todos","title = ?, completed = ?");
        const result =  await query(queryTodo, [updatedTodo.title, updatedTodo.completed,updatedTodo.id]);
        return result;
    }

}


