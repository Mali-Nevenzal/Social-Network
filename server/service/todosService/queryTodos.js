
function getTodosQuery() {
    const query = `SELECT * FROM db_users.test `;
    return query
}

function getTodosByIdQuery() {
    const query = `SELECT * FROM db_users.test  where id = ?`;
    return query
}

function addTodoQuery() {
    const query = `INSERT INTO todos(user_id,title,completed) VALUES (?,?,?)`;
    return query
}


    



export {
    getTodosQuery, getTodosByIdQuery,addTodoQuery
}