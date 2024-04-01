import 'dotenv/config'
const db = process.env.DB_NAME;

function getUserByEmailQuery() {
    const query = `SELECT * FROM ${db}.register  where email = ?`;
    return query
}

function addUserQuery() {
    const query = `INSERT INTO register(email,password) VALUES (?,?)`;
    return query
}

function deleteUserQuery(){
    const query= `DELETE FROM ${db}.register WHERE email=?`;
    return query;
}

export {
    deleteUserQuery, addUserQuery,getUserByEmailQuery
}