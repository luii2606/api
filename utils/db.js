import mysql from "mysql2/promise";

const conection =await mysql.createConnection({
    host: "localhost",
    user:"valemidx",
    password:"luisa123",
    database:"node_adso2894667"
})

export default conection;