
function getCommentsQuery() {
    const query = `SELECT * FROM db_users.comments `;
    return query
}

function getCommentByIdQuery() {
    const query = `SELECT * FROM db_users.comments  where id = ?`;
    return query
}

function addCommentQuery() {
    const query = `INSERT INTO Comments(post_id,name,email,body) VALUES (?,?,?,?)`;
    return query
}

function deleteCommentQuery(){
    const query='DELETE FROM social_network.comments WHERE id=?;';
    return query;
}
function updateCommentQuery(){
    const query='UPDATE social_network.comments SET body = ? WHERE id=?;';
    return query;
}
    



export {
    getCommentsQuery, getCommentByIdQuery,addCommentQuery,deleteCommentQuery,updateCommentQuery
}