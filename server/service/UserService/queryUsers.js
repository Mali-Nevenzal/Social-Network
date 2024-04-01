
function getUsersQuery() {
    const query = `SELECT * FROM social_network.users `;
    return query
}


function getUserByIdQuery() {
    const query = `SELECT * FROM social_network.users  where id = ?`;
    return query
}
function deleteUserQuery(){
    const query='UPDATE social_network.users SET isActive=FALSE WHERE id=?;';
    return query;
}
function updateUserQuery(){
    const query='UPDATE social_network.users SET name = ?, email = ?,phone=? ,isActive=? WHERE id=?;';
    return query;
}
function addUserQuery(){
    const query='INSERT INTO table_name (username, name, email, phone,isActive) VALUES (?, ?, ?, ?,?);';
    return query;
}
export{
    getUsersQuery,getUserByIdQuery,deleteUserQuery,updateUserQuery,addUserQuery
}