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

// 회원가입
app.post("/regist", upload.single("profileimage"), (req, res) => {
  const id = req.body.id;
  const pw = req.body.pw;
  const sellername = req.body.sellername;
  const email = req.body.email;
  const channelname = req.body.channelname;
  const channelplatform = req.body.channelplatform;
  const channelgenre = req.body.channelgenre;
  const url = req.body.url;
  const filename = req.file.filename;
  const intro = req.body.intro;

  let sql = "INSERT INTO seller VALUES(NULL,?,?,?,?,?,?,?,?,?,?,now());";
  bcrypt.hash(req.body.pw, saltRounds, (err, hash_pw) => {
    db.query(
      sql,
      [
        id,
        hash_pw,
        sellername,
        email,
        channelname,
        channelplatform,
        channelgenre,
        url,
        filename,
        intro,
      ],
      (err) => {
        if (err) {
          throw err;
        }

        res.send({
          id: id,
          pw: hash_pw,
          sellername: sellername,
          email: email,
          channelname: channelname,
          channelplatform: channelplatform,
          channelgenre: channelgenre,
          url: url,
          filename: filename,
          intro: intro,
          status: 201,
          message: "판매자 신청이 완료되었습니다.",
        });
      }
    );
  });
});

// 로그인
app.post("/login", (req, res) => {
  const { id } = req.body;
  const { pw } = req.body;

  let sql = "SELECT * FROM seller WHERE id=?;";
  db.query(sql, [req.body.id], (err, user) => {
    if (user[0] === undefined) {
      res.send({
        status: 404,
        message: "아이디를 확인해주세요.",
      });
    } else {
      bcrypt.compare(req.body.pw, user[0].pw, (err, result) => {
        if (result) {
          console.log("로그인 성공");
          res.send({
            status: 201,
            message: "로그인 성공. 환영합니다!",
            message: user[0].id + "님 환영합니다",
            token: user[0].pw,
            id: user[0].id,
          });
        } else {
          console.log("비밀번호 틀림");
          res.send({
            status: 400,
            message: "비밀번호를 다시 확인해주세요.",
          });
        }
      });
    }
  });
});
//문의하기
app.post("/ask", upload.single("askImage"), (req, res) => {
  const askCategory = req.body.askCategory;
  const askTitle = req.body.askTitle;
  const askWriter = req.body.askWriter;
  const filename = req.file.filename;
  const askContents = req.body.askContents;

  let sql = "INSERT INTO AskToAdmin VALUES(NULL,NULL,?,?,?,?,?,now());";
  bcrypt.hash(req.body.pw, saltRounds, (err) => {
    db.query(
      sql,
      [askCategory, askTitle, askWriter, filename, askContents],
      (err) => {
        if (err) {
          throw err;
        }

        res.send({
          askCategory: askCategory,
          askTitle: askTitle,
          askWriter: askWriter,
          filename: filename,
          askContents: askContents,
          // message: '판매자 신청이 완료되었습니다.',
        });
      }
    );
  });
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
