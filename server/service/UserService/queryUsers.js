import 'dotenv/config'
const db = process.env.DB_NAME;

function getUsersQuery() {
    const query = `SELECT * FROM ${db}.users `;
    return query
}


function getUserByIdQuery() {
    const query = `SELECT * FROM ${db}.users  where id = ?`;
    return query
}
function deleteUserQuery(){
    const query='DELETE FROM social_network.users WHERE id=?;';
    return query;
}
function updateUserQuery(){
    const query='UPDATE social_network.users SET name = ?, email = ?,phone=?  WHERE id=?;';
    return query;
}
function addUserQuery(){
    const query='INSERT INTO table_name (username, name, email, phone) VALUES (?, ?, ?, ?);';
    return query;
}
export{
    getUsersQuery,getUserByIdQuery,deleteUserQuery,updateUserQuery,addUserQuery
}