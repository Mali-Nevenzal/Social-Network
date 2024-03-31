
function getTodosQuery() {
    const query = `SELECT * FROM db_users.test `;
    return query
}

function getTodoByIdQuery() {
    const query = `SELECT * FROM db_users.test  where id = ?`;
    return query
}

function addTodoQuery() {
    const query = `INSERT INTO todos(user_id,title,completed) VALUES (?,?,?)`;
    return query
}

function deleteTodoQuery(){
    const query='DELETE FROM social_network.todos WHERE id=?;';
    return query;
}
function updateTodoQuery(){
    const query='UPDATE social_network.todos SET title = ?, completed = ? WHERE id=?;';
    return query;
}
    



export {
    getTodosQuery, getTodoByIdQuery,addTodoQuery,deleteTodoQuery,updateTodoQuery
}