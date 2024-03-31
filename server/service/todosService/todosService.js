
import { query } from '../db.js';
import { getTodosQuery ,getTodosByIdQuery} from './queryTodos.js'

export class TodosService {

    async getTodos() {
        const queryTodos = getTodosQuery();
        const result = await query(queryTodos);
        return result;
    }

    async getTodosById(id) {
        const queryTodos = getTodosByIdQuery();
        const result =  await query(queryTodos, [id]);
        return result;
    }

    async addTodos(todoItem) {
        const queryTodos = addTodoQuery();
        const result =  await query(queryTodos, [todoItem.user_id,todoItem.title,todoItem.completed]);
        return result;
    }


}



async function addMember(member) {
    if (!lettersOnly(member.LastName) || !lettersOnly(member.FirstName) || !lettersOnly(member.City) || !lettersOnly(member.Street) || !numbersOnly(member.MobileNum) || !numbersOnly(member.PhoneNum) || !numbersOnly(member.MemberId))
        throw ("Invalid input");
    console.log("member Id "+member.MemberId)
    const resulat = await query(`INSERT INTO hmo.Members  VALUES (?, ?, ?, ?,?,?,?,?,?);`, [member.MemberId, member.LastName, member.FirstName, member.City, member.Street, member.HouseNum, member.DateOfBirth, member.MobileNum, member.PhoneNum]);
    return resulat;
}
