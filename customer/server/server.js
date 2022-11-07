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
    callback(null, "./reviews");
  },
  filename: function (req, file, callback) {
    callback(null, Date.now() + "_" + file.originalname);
  },
});

const upload = multer({
  storage
});

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors({
  origin: ["http://localhost:3000"],
  methods: ["GET", "POST"],
  credentials: true
}));
app.use(express.static("reviews"));
app.use(express.static(""));


// url
//customer home//
app.get("/", (req, res) => {
  res.send("");
});

//customer regist//
app.post("/regist", (req, res) => {
  const { id } = req.body;
  const { pw } = req.body;
  const { name } = req.body;
  const { mobile } = req.body;
  const { email } = req.body;
  const { address1 } = req.body;
  const { address2 } = req.body;
  const { zipcod } = req.body;

  let sql = "INSERT INTO customer VALUES(NULL,?,?,?,?,?,?,?,?,now());";
  db.query(sql, [id, pw, name, mobile, email, address1, address2, zipcod], (err) => {
    if (err) throw err;
    res.send({ status: 201, message: "회원 가입이 완료되었습니다."});
    }
  );
});

//customer login//
app.post("/login", (req, res) => {
  sql = "SELECT * FROM customer WHERE id = ?;";
  db.query(sql, [req.body.id], (err, customer) => {
    if(customer[0] === undefined) {
      res.send({status: 404, message: "회원 정보가 없습니다"});
    }else{
      bcrypt.compare(req.body.pw, user[0].pw, (err, result) => {
        if(result){
          res.send({
            status: 201,
            message: "로그인 되었습니다",
            token_id: user[0].id
          });
        }else{
          res.send({
            status: 404,
            message: "비밀번호가 틀렸습니다"
          });
        }
      });
    }
  })
})

//category select
app.get("/category", (req, res) => {

})

//search form
app.get("/search", (req, res) => {
  const page = Number.parseInt(req.query.page);
  const offset = Number.parseInt(req.query.offset);
  const startNum = page * offset;
  const search = req.query.searchQuery || "";

  const sellerSearch = '%'+search+'%';
  const itemSearch = '%'+search+'%';
  
  let sql = "SELECT COUNT(id) AS cnt FROM item WHERE seller_name LIKE ? OR item_name LIKE ?;";
  db.query(sql, [sellerSearch, itemSearch], (err, result) => {
    if(err) {
      throw err;
    }else{
      let dataSQL = "SELECT * FROM item WHERE seller_name LIKE ? OR item_name LIKE ? ORDER BY id DESC LIMIT ?, ?;";
      db.query(dataSQL, [sellerSearch, itemSearch], (err, search) => {
        if(err) {
          throw err;
        }else{
          res.json({
            search,
            page, // 현재 페이지
            totalRows: result[0].cnt, // 전체 상품 수
            totalPageNumber: Math.ceil( result[0].cnt / offset ) // 전체 페이지 수
          });
        }
      });
    }
  });
})

//item detail

//mypage

//cart

//add cart
app.post("/addCart", (req, res) => {
 
})

//write review
app.post("", (req, res) => {
  const sql = "INSERT INTO review VALUES (NULL, ?, ?, ?, ?, ?, ?, now());";
  db.query(sql, [customer_idx, item_idx, title, content, star, attach], (err) => {
    if (err) throw err;
    res.send({ status: 201, message: "리뷰 작성 완료"});
    }
  );
})

// port
app.listen(process.env.PORT, () => {
  const dir = "reviews";
  if (!fs.existsSync(dir)) {
    fs.mkdir(dir, (err) => {
      if (err) {
        throw err;
      }
    });
  }
  console.log("Server Running Port : " + process.env.PORT);
});
