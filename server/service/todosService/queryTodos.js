import 'dotenv/config'
const db = process.env.DB_NAME;


function getTodosQuery() {
    const query = `SELECT * FROM ${db}.todos `;
    return query
}

function getTodoByIdQuery() {
    const query = `SELECT * FROM ${db}.todos  where id = ?`;
    return query
}

function addTodoQuery() {
    const query = `INSERT INTO todos(user_id,title,completed) VALUES (?,?,?)`;
    return query
}

function deleteTodoQuery(){
    const query= `DELETE FROM ${db}.todos WHERE id=?`;
    return query;
}
function updateTodoQuery(){
    const query=`UPDATE ${db}.todos SET title = ?, completed = ? WHERE id=?`;
    return query;
}
    

export {
    getTodosQuery, getTodoByIdQuery,addTodoQuery,deleteTodoQuery,updateTodoQuery
}