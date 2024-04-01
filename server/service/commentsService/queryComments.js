import 'dotenv/config'
const db = process.env.DB_NAME;

function getCommentsQuery() {
    const query = `SELECT * FROM ${db}.comments `;
    return query
}

function getCommentByIdQuery() {
    const query = `SELECT * FROM ${db}.comments  where id = ?`;
    return query
}

function addCommentQuery() {
    const query = `INSERT INTO comments(post_id,name,email,body) VALUES (?,?,?,?)`;
    return query
}

function deleteCommentQuery(){
    const query= `DELETE FROM ${db}.comments WHERE id=?`;
    return query;
}
function updateCommentQuery(){
    const query= `UPDATE ${db}.comments SET body = ? WHERE id=?`;
    return query;
}

export {
    getCommentsQuery, getCommentByIdQuery,addCommentQuery,deleteCommentQuery,updateCommentQuery
}