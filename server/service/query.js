import 'dotenv/config'
const db = process.env.DB_NAME;

function getQuery(table_name) {
    const query = `SELECT * FROM ${db}.${table_name} `;
    return query
}


function getByIdQuery(table_name,idParameter) {
    const query = `SELECT * FROM ${db}.${table_name}  where ${idParameter} = ?`;
    return query
}
function deleteQuery(table_name,idParameter){
    const query=`DELETE FROM ${db}.${table_name} WHERE  ${idParameter} = ?`;
    return query;
}
function updateQuery(table_name,values){
    const query=`UPDATE ${db}.${table_name} SET ${values}  WHERE id=?`;
    return query;
}
function addQuery(table_name,values,columnsNum){
    const query=`INSERT INTO ${db}.${table_name} (${values}) VALUES (${columnsNum})`;
    return query;
}
function deleteByIsActiveQuery(table_name,idParameter){
    const query=`UPDATE ${db}.${table_name} SET is_active=0 WHERE ${idParameter} = ?`;
    return query;
}
export{
    getQuery,getByIdQuery,deleteQuery,updateQuery,addQuery,deleteByIsActiveQuery
}
