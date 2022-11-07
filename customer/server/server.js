// import
require("dotenv").config();
const express = require("express");
const app = express();

const mysql = require("mysql");
const cors = require("cors");
const fs = require("fs");
const multer = require("multer");

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

// multer
const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./uploads");
  },
  filename: function (req, file, callback) {
    callback(null, Date.now() + "_" + file.originalname);
  },
});

const upload = multer({
  storage,
});

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(express.static("uploads"));

// url
app.post("/regist", upload.single("profileimage"), (req, res) => {
  const { id } = req.body;
  const { pw } = req.body;
  const { sellername } = req.body;
  const { email } = req.body;
  const { sellertype } = req.body;
  const { channelname } = req.body;
  const { url } = req.body;
  const { filename } = req.file;
  const { intro } = req.body;

  let sql = "INSERT INTO seller VALUES(NULL,?,?,?,?,?,?,?,?,?,now());";
  db.query(
    sql,
    [
      id,
      pw,
      sellername,
      email,
      sellername,
      sellertype,
      channelname,
      url,
      filename,
      intro,
    ],
    (err) => {
      if (err) {
        throw err;
      }

      res.send({ status: 201, message: "판매자 신청이 완료되었습니다." });
    }
  );
});

// port
app.listen(process.env.PORT, () => {
  const dir = "uploads";
  if (!fs.existsSync(dir)) {
    fs.mkdir(dir, (err) => {
      if (err) {
        throw err;
      }
    });
  }
  console.log("Server Running Port : " + process.env.PORT);
});
