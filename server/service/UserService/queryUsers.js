
function getUsersQuery() {
    const query = `SELECT * FROM social_network.users `;
    return query
}


function getUserByIdQuery() {
    const query = `SELECT * FROM social_network.users  where id = ?`;
    return query
}
function deleteUserQuery(){
    const query='DELETE FROM social_network.users WHERE id=?;';
    return query;
}
function updateUserQuery(){
    const query='';
    return query;
}

export{
    getUsersQuery,getUserByIdQuery,deleteUserQuery
}