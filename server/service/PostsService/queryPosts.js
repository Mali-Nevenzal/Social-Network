
function getPostsQuery() {
    const query = `SELECT * FROM social_network.posts `;
    return query
}


function getPostByIdQuery() {
    const query = `SELECT * FROM social_network.posts  where id = ?`;
    return query
}
function deletePostQuery(){
    const query='UPDATE social_network.posts SET isActive=FALSE WHERE id=?;';
    return query;
}
function updatePostQuery(){
    const query='UPDATE social_network.posts SET title = ?, body = ? ,isActive=? WHERE id=?;';
    return query;
}
function addPostQuery(){
    const query='INSERT INTO social_network.posts (user_id, title, body,isActive) VALUES ( ?, ?, ?,?);';
    return query;
}
 
export{
    getPostsQuery,getPostByIdQuery,updatePostQuery,deletePostQuery,addPostQuery
}