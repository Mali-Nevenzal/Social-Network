
import { query } from '../db.js';
import { getTodosQuery ,getTodoByIdQuery,addTodoQuery} from './queryTodos.js'

export class TodosService {

    async getTodos() {
        const queryTodos = getTodosQuery();
        const result = await query(queryTodos);
        return result;
    }

    async getTodoById(id) {
        const queryTodos = getTodoByIdQuery();
        const result =  await query(queryTodos, [id]);
        return result;
    }

    async addTodo(todoItem) {
        const queryTodos = addTodoQuery();
        const result =  await query(queryTodos, [todoItem.user_id,todoItem.title,todoItem.completed]);
        return result;
    }


}


