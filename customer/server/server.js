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
app.use(cors());
app.use(express.static("uploads"));

// url
//customer home//
app.get("/", (req, res) => {
  res.send("");
});

//customer regist//
app.post("/customer/regist", (req, res) => {
  const { customerId, customerPw, customerName, customerMobile, customerEmail, customerAddress1, customerAddress2, customerZipcod } = req.body;
  let sql = "INSERT INTO customer VALUES(NULL,?,?,?,?,?,?,?,?,now());";
  bcrypt.hash(customerPw, saltRounds, (err, hash_pw) => {
    db.query(
      sql,
      [ customerId, hash_pw, customerName, customerMobile, customerEmail, customerAddress1, customerAddress2, customerZipcod ],
      (err) => {
        if (err) throw err;
        res.send({ status: 201, message: "회원 가입이 완료되었습니다." });
      }
    );
  });
});

// id duplicaton Check
app.post("/customer/idDuplicatonChk", (req, res) => {
  const customerId = req.body.customerId;

  let sql = "SELECT * FROM customer WHERE id = ?;";
  db.query(sql, [customerId], (err, id) => {
    if (err) throw err;

    if (id[0] === undefined) {
      res.send({
        status: 201,
      });
    }
  });
});

//customer login//
app.post("/customer/login", (req, res) => {
  sql = "SELECT * FROM customer WHERE id = ?;";
  db.query(sql, [req.body.id], (err, customer) => {
    if (customer[0] === undefined) {
      res.send({ status: 404, message: "회원 정보가 없습니다" });
    } else {
      bcrypt.compare(req.body.pw, customer[0].pw, (err, result) => {
        if (result) {
          res.send({
            status: 201,
            message: "로그인 되었습니다",
            token_id: customer[0].id,
            token_pw: customer[0].pw,
          });
        } else {
          res.send({
            status: 400,
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
app.get("/customer/goodslists", (req, res) => {
  const start = Number.parseInt(req.query.start) || 0;
  const offset = Number.parseInt(req.query.offset) || 30;

  let sql =
    // "SELECT * FROM item WHERE category_goods_idx = ? ORDER BY seller_idx DESC LIMIT ?, ?;";
    "SELECT * FROM item ORDER BY idx DESC LIMIT ?,?;";
  db.query(
    sql,
    // [req.params.category_goods_idx, start, offset],
    [start, offset],
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
app.get("/customer/detail/:idx", (req, res) => {
  let sql = "select * from item where idx =?;";
  db.query(sql, [req.params.idx], (err, result) => {
    if (err) {
      throw err;
    } else {
      res.send(result);
    }
  });
});

//profile
app.get("/customer/profile/:userId", (req, res) => {
  const { userId } = req.params;
  if (!userId) {
    res.send({ status: 404, message: "로그인 후 이용해 주세요" });
    res.redirect("/customer/login");
  } else if (userId) {
    let sql = "select * from customer where id = ?;";
    db.query(sql, [userId], (err, result) => {
      if (err) {
        throw err;
      } else {
        res.send({status: 201, result});
        console.log(result);
      }
    });
  }
});

//profile modify//
app.post("/customer/profileModify/:userId", (req, res) => {
  const { userId } = req.params;
  const { pw, name, mobile, email, address1, address2, zipcod } = req.body;
  
  let sql = "UPDATE customer SET pw=?, name=?, mobile=?, email=?, address1=?, address2=?, zipcod=? WEHRE id = ?);";
  bcrypt.hash(pw, saltRounds, (err, hash_pw) => {
    db.query(
      sql,
      [hash_pw, name, mobile, email, address1, address2, zipcod, userId],
      (err) => {
        if (err) throw err;
        res.send({ status: 201, message: "회원 정보 수정이 완료되었습니다." });
      }
    );
  });
});

//profile withdrawal
app.delete("/customer/delete/:idx", (req, res) => {
  const idx = req.params.idx;
  let delSql = "DELETE FROM customer WHERE idx = ?;";
  db.query(delSql, idx, (err) => {
    if (err) throw err;
  
    res.send({ status: 201, message: "회원 탈퇴 되었습니다." });
  });
});

//cart
app.get("/customer/cart", (req, res) => {
  if (!userId) {
    res.send({ status: 404, message: "로그인 후 이용해 주세요" });
    res.redirect("/customer/login");
  } else {
    let sql = "select * from cart left join customer as c on (cart.customer_idx = c.idx) where c.id = ?;";
    db.query(sql, [userId], (err, result) => {
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
  if (!userId) {
    res.send({ status: 404, message: "로그인 후 이용해 주세요" });
    res.redirect("/customer/login");
  } else {
    let sql = "INSERT INTO cart VALUES();";
    db.query(sql, [userId], (err, result) => {
      if (err) {
        throw err;
      } else {
        res.send(result);
      }
    });
  }
});

//write review
app.post("/customer/writeReview", upload.array("attach"), (req, res) => {
  const {customer_idx, item_idx, title, content, star} = req.body;
  const {attach} = req.file;

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
