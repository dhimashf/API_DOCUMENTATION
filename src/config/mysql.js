const mysql = require("mysql");

const database = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "dummydata",
});

database.connect((err) => {
  if (err) throw err;
  console.log("Database connected");
});

module.exports = database;
