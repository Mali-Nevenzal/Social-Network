import 'dotenv/config'
const db = process.env.DB_NAME;

function getRegisterByEmailQuery() {
    const query = `SELECT * FROM ${db}.register  where email = ?`;
    return query
}

function addRegisterQuery() {
    const query = `INSERT INTO register(email,password) VALUES (?,?)`;
    return query
}

function deleteRegisterQuery(){
    const query= `DELETE FROM ${db}.register WHERE email=?`;
    return query;
}

export {
    deleteRegisterQuery, addRegisterQuery,getRegisterByEmailQuery
}