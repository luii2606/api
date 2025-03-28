import mysql from "mysql2/promise";

const conection =await mysql.createConnection({
    host: "localhost",
    user:"luiisa_adso2894667",
    password:"Aprendi2025",
    database:"node_adso2894667"
})

export default conection;