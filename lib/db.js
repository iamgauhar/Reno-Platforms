import mysql from "mysql2/promise";

let db;

if (!db) {
  db = mysql.createPool(process.env.MYSQL_URL);
}

export default db;