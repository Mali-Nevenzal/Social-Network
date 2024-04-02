import 'dotenv/config'
const db = process.env.DB_NAME;

function getPostsQuery() {
    const query = `SELECT * FROM ${db}.posts `;
    return query
}

function getPostByIdQuery() {
    const query = `SELECT * FROM ${db}.posts  where id = ?`;
    return query
}

function deletePostQuery(){
    const query=`UPDATE  ${db}.posts SET isActive=FALSE WHERE id=?;`;
    return query;
}
function deletePostByUserIdQuery(){
    const query=`UPDATE  ${db}.posts SET isActive=FALSE WHERE user_id=?;`;

    return query;
}


function updatePostQuery(){

    const query= `UPDATE ${db}.posts SET title = ?, body = ?,isActive=?  WHERE id=?`;
    return query;
}

function addPostQuery(){
    const query=`INSERT INTO ${db}.posts (user_id, title, body,isActive) VALUES ( ?, ?, ?,?);`;
    return query;
}
 
export{
    getPostsQuery,getPostByIdQuery,updatePostQuery,deletePostQuery,addPostQuery,deletePostByUserIdQuery
}