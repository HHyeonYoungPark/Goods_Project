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
  storage,
});

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(express.static("reviews"));

// url
//customer home//
app.get("/", (req, res) => {
  res.send("");
});

//customer regist//
app.post("/customer/regist", (req, res) => {
  const { id } = req.body;
  const { pw } = req.body;
  const { name } = req.body;
  const { mobile } = req.body;
  const { email } = req.body;
  const { address1 } = req.body;
  const { address2 } = req.body;
  const { zipcod } = req.body;

  let sql = "INSERT INTO customer VALUES(NULL,?,?,?,?,?,?,?,?,now());";
  bcrypt.hash(pw, saltRounds, (err, hash_pw) => {
    db.query(
      sql,
      [id, hash_pw, name, mobile, email, address1, address2, zipcod],
      (err) => {
        if (err) throw err;
        res.send({ status: 201, message: "회원 가입이 완료되었습니다." });
      }
    );
  });
});

//customer login//
app.post("/customer/login", (req, res) => {
  sql = "SELECT * FROM customer WHERE id = ?;";
  db.query(sql, [req.body.id], (err, customer) => {
    if (customer[0] === undefined) {
      res.send({ status: 404, message: "회원 정보가 없습니다" });
    } else {
      bcrypt.compare(req.body.pw, user[0].pw, (err, result) => {
        if (result) {
          res.send({
            status: 201,
            message: "로그인 되었습니다",
            token_id: user[0].id,
            token_pw: user[0].pw,
          });
        } else {
          res.send({
            status: 404,
            message: "비밀번호가 틀렸습니다",
          });
        }
      });
    }
  });
});

//category select
app.get("/customer/influencer", (req, res) => {});
app.get("/customer/goods", (req, res) => {});

//search form
app.get("/customer/search", (req, res) => {
  const start = Number.parseInt(req.query.start) || 0;
  const offset = Number.parseInt(req.query.offset) || 30;

  const search = req.query.searchQuery || "";

  const sellerSearch = "%" + search + "%";
  const itemSearch = "%" + search + "%";

  let sql =
    "SELECT * FROM item WHERE seller_name LIKE ? OR item_name LIKE ? ORDER BY id DESC LIMIT ?, ?;";
  db.query(sql, [sellerSearch, itemSearch, start, offset], (err, search) => {
    if (err) {
      throw err;
    } else {
      res.send({
        search,
        start: search.length ? start + offset : 0,
        offset: offset,
        moreData: search.length >= offset ? true : false,
      });
    }
  });
});

//goods list
app.get("/customer/goodslist", (req, res) => {
  const start = Number.parseInt(req.query.start) || 0;
  const offset = Number.parseInt(req.query.offset) || 30;

  let sql =
    "SELECT * FROM item WHERE category_goods_idx = ? ORDER BY seller_idx DESC LIMIT ?, ?;";
  db.query(
    sql,
    [req.params.category_goods_idx, start, offset],
    (err, goodslists) => {
      if (err) {
        throw err;
      } else {
        res.send({
          goodslists,
          start: goodslists.length ? start + offset : 0,
          offset: offset,
          moreData: goodslists.length >= offset ? true : false,
        });
      }
    }
  );
});

//goods detail
app.get("/customer/detail", (req, res) => {
  let sql = "";
  db.query(sql, [], (err, result) => {
    if (err) {
      throw err;
    } else {
      res.send(result);
    }
  });
});

//profile
app.get("/customer/profile", (req, res) => {
  if (!token_id) {
    res.send({ status: 404, message: "로그인 후 이용해 주세요" });
    res.redirect("/customer/login");
  } else {
    let sql = "select * from customer where id = ?;";
    db.query(sql, [token_id], (err, result) => {
      if (err) {
        throw err;
      } else {
        res.send(result);
      }
    });
  }
});

//cart
app.get("/customer/cart", (req, res) => {
  if (!token_id) {
    res.send({ status: 404, message: "로그인 후 이용해 주세요" });
    res.redirect("/customer/login");
  } else {
    let sql = "select * from cart where id = ?;";
    db.query(sql, [token_id], (err, result) => {
      if (err) {
        throw err;
      } else {
        res.send(result);
      }
    });
  }
});

//add cart
app.post("/customer/addCart", (req, res) => {
  if (!token_id) {
    res.send({ status: 404, message: "로그인 후 이용해 주세요" });
    res.redirect("/customer/login");
  } else {
    let sql = "select * from cart where id = ?;";
    db.query(sql, [token_id], (err, result) => {
      if (err) {
        throw err;
      } else {
        res.send(result);
      }
    });
  }
});

//write review
app.post("", (req, res) => {
  const sql = "INSERT INTO review VALUES (NULL, ?, ?, ?, ?, ?, ?, now());";
  db.query(
    sql,
    [customer_idx, item_idx, title, content, star, attach],
    (err) => {
      if (err) throw err;
      res.send({ status: 201, message: "리뷰 작성 완료" });
    }
  );
});

// port
app.listen(process.env.PORT, () => {
  console.log("Server Running Port : " + process.env.PORT);
});
