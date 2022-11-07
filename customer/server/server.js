// import
require("dotenv").config();
const cors = require("cors");
const mysql = require("mysql");
const express = require("express");
const app = express();

// db
const db = mysql.createConnection({
    host: process.env.DB_URL,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});

// db.connect
db.connect((err) => {
    if (!err) {
        console.log("Mysql DB Success");
    } else {
        console.log(err);
    }
});

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// url
app.get("/", (req, res) => {});

// port
app.listen(process.env.PORT, () => console.log("Server Running 4001"));
