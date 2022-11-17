// import
require("dotenv").config();
const express = require("express");
const app = express();

const mysql = require("mysql");
const cors = require("cors");
const fs = require("fs");
const multer = require("multer");
const bcrypt = require("bcrypt");

const saltRounds = 10;

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

// 다중 게시판
app.get("/boardlist", (req, res) => {
  const sql = "select * from boardManager order by boardIdx desc;";
  db.query(sql, (err, result) => {
    if(err) throw err;
    res.send(result);
  })
})

app.post("/boardAdd", (req, res) => {
  const {boardName ,boardType, boardUrl, secret, readAllow, writeAllow, replyAllow, modifyAllow, deleteAllow, upload, download, boardDesc} = req.body;
  let sql = "INSERT INTO boardManager VALUES(NULL, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,now());";
  db.query(sql, [boardName ,boardType, boardUrl, secret, readAllow, writeAllow, replyAllow, modifyAllow, deleteAllow, upload, download, boardDesc], (err) => {
    if(err){
      throw err;
    }else{
      res.send({status:201, message:"게시판 생성 완료"});
      let createSQL = "CREATE TABLE board"+boardName+"(";
          createSQL += "idx int auto_increment primary key,";
          createSQL += "title varchar(100),";
          createSQL += "writer varchar(50),";
          createSQL += "passwd varchar(255),";
          createSQL += "contents text,";
          createSQL += "image varchar(255),";
          createSQL += "view int default 0,";
          createSQL += "regdate date";
          createSQL += ");";
      db.query(createSQL, (err) => {
        if(err){
          throw err;
        }else{
          console.log("board"+boardName+" Create Completed.");
        }
      })
    }
  })
})

app.get("/board", (req, res) => {
  // console.log(req.query);
  let sql = "select * from board"+req.query.boardName+" order by idx desc;";
  db.query(sql, (err, result) => {
    if(err){
      throw err;
    }else{
      res.send(result);
    }
  })
})

app.post("/write", upload.array, (req, res) => {
  const { boardName, title, writer, passwd, contents, image } = req.body;
  let sql = "insert into board"+boardName+" values(null, ?, ?, ?, ?, ?, 0, now());";
  db.query(sql, [title, writer, passwd, contents, image], (err) => {
    if(err){
      throw err;
    }else{
      console.log("write complete");
      res.send({ status: 201, message: "게시글 등록 완료"});
    }
  })
})

app.get("/view", (req, res) => {
  let sql = "select * from board"+req.query.boardName+" where idx = ?";
  db.query(sql, [req.query.idx], (err, result) => {
    if(err) {
      throw err;
    } else {
      res.send(result);
    }
  })
})
// 다중게시판

// port
app.listen(process.env.PORT, () => {
  console.log("Server Running Port : " + process.env.PORT);
});
