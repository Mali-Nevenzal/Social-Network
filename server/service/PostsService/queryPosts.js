
function getPostsQuery() {
    const query = `SELECT * FROM social_network.posts `;
    return query
}


function getPostByIdQuery() {
    const query = `SELECT * FROM social_network.posts  where id = ?`;
    return query
}
function deletePostQuery(){
    const query='DELETE FROM social_network.posts WHERE id=?;';
    return query;
}
function updatePostQuery(){
    const query='UPDATE social_network.posts SET title = ?, body = ?  WHERE id=?;';
    return query;
}
function addPostQuery(){
    const query='INSERT INTO social_network.posts (user_id, title, body) VALUES ( ?, ?, ?);';
    return query;
}
 
export{
    getPostsQuery,getPostByIdQuery,updatePostQuery,deletePostQuery
}