import 'dotenv/config'
const db = process.env.DB_NAME;

function getQuery(table_name,limit,start,sort,whereIsActive = "") {
    console.log("in get query sort: "+ sort);
    const query = `SELECT * FROM ${db}.${table_name} ${whereIsActive} ORDER BY ${sort} LIMIT ${limit} OFFSET ${start}`;
    return query
}
function getByIdQuery(table_name,idParameter,limit,start,sort) {
    console.log("in get query sort: "+ sort);

    const query = `SELECT * FROM ${db}.${table_name}  where ${idParameter} = ? ORDER BY ${sort} LIMIT ${limit} OFFSET ${start}`;
    return query
}
function deleteQuery(table_name,idParameter){
    const query=`DELETE FROM ${db}.${table_name} WHERE  ${idParameter} = ?`;
    return query;
}
function updateQuery(table_name,values,idParameter){
    const query=`UPDATE ${db}.${table_name} SET ${values}  WHERE ${idParameter}=?`;
    return query;
}
function addQuery(table_name,values,columnsNum){
    const query=`INSERT INTO ${db}.${table_name} (${values}) VALUES (${columnsNum})`;
    console.log("query:  "+ query);
    return query;
}
function deleteByIsActiveQuery(table_name,idParameter){
    const query=`UPDATE ${db}.${table_name} SET is_active=0 WHERE ${idParameter} = ?`;
    return query;
}
export{
    getQuery,getByIdQuery,deleteQuery,updateQuery,addQuery,deleteByIsActiveQuery
}
