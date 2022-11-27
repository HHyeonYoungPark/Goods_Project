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
  dateStrings: "date",
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
  const phone = req.body.phone;
  const zip = req.body.zip;
  const address = req.body.address;
  const detailAddress = req.body.detailAddress;
  const channelname = req.body.channelname;
  const channelplatform = req.body.channelplatform;
  const channelgenre = req.body.channelgenre;
  const url = req.body.url;
  const filename = req.file.filename;
  const intro = req.body.intro;

  let sql =
    "INSERT INTO user VALUES(NULL,?,?,?,?,?,?,?,?,?,?,?,?,?,'일반회원',now());";
  bcrypt.hash(req.body.pw, saltRounds, (err, hash_pw) => {
    db.query(
      sql,
      [
        id,
        hash_pw,
        sellername,
        email,
        phone,
        zip,
        address + detailAddress,
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
          status: 201,
          message: "회원가입 완료!",
        });
      }
    );
  });
});

// 아이디 중복체크
app.post("/idDuplicatonChk", (req, res) => {
  const id = req.body.id;

  let sql = "SELECT * FROM user WHERE id =?;";
  db.query(sql, [id], (err, id) => {
    if (err) throw err;

    if (id[0] === undefined) {
      res.send({
        status: 201,
      });
    } else {
      res.send({
        status: 400,
      });
    }
  });
});

// 로그인
app.post("/login", (req, res) => {
  const { id } = req.body;
  const { pw } = req.body;

  let sql = "SELECT * FROM user WHERE id=?;";
  db.query(sql, [req.body.id], (err, user) => {
    if (user[0] === undefined) {
      res.send({
        status: 404,
        message: "아이디를 확인해주세요.",
      });
    } else {
      bcrypt.compare(req.body.pw, user[0].pw, (err, result) => {
        if (result) {
          res.send({
            status: 201,
            message: user[0].id + "님 환영합니다",
            token: user[0].pw,
            id: user[0].id,
          });
        } else {
          res.send({
            status: 400,
            message: "비밀번호를 다시 확인해주세요.",
          });
        }
      });
    }
  });
});

// 마이페이지
app.get("/mypage", (req, res) => {
  let sql = "SELECT * FROM user WHERE id=?";
  db.query(sql, [userId], (err, response) => {
    if (err) {
      throw err;
    } else {
      res.send(response);
    }
  });
});

// 메인페이지
app.get("/main", (req, res) => {
  let sql = "SELECT * FROM item ORDER BY idx DESC;";
  db.query(sql, (err, response) => {
    if (err) {
      throw err;
    }
    res.send(response);
  });
});

// 메인페이지에서 검색
// 상품명으로 검색
app.get("/itemSearch", (req, res) => {
  const itemSearch = req.body.itemSearch;

  let sql = "SELECT * FROM item WHERE itemname LIKE ? ORDER BY idx DESC;";
  db.query(sql, ["%" + req.query.keyword + "%"], (err, result) => {
    if (err) {
      throw err;
    }
    res.send({ status: 201, result });
    // console.log(req.query.itemSearch);
    // console.log(response);
  });
});

// 관리자페이지에서 상품목록보이기
app.get("/goodsManager", (req, res) => {
  let sql = "SELECT * FROM item ORDER BY idx DESC LIMIT 0,10;";
  db.query(sql, (err, items) => {
    if (err) {
      throw err;
    }
    res.send(items);
  });
});

//상품 카테고리 설정
app.post("/getCate1", (req, res) => {
  let sql = "select * from category1 order by id asc;";
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }

    res.send(result);
  });
});

app.post("/getCate2", (req, res) => {
  let sql = "select category2 from category2 where category1 = ?;";
  const { cate1 } = req.body;
  db.query(sql, [cate1], (err, result) => {
    if (err) {
      throw err;
    }
    res.send(result);
  });
});
// 상품등록
app.post(
  "/addItem",
  upload.fields([{ name: "attach" }, { name: "attach2" }, { name: "attach3" }]),
  (req, res) => {
    console.log(req.file);

    const { itemname } = req.body;
    const { category } = req.body;
    const { categoryCode } = req.body;
    const { price } = req.body;
    const { stock } = req.body;
    const filename = req.files.attach[0].filename;
    const filename2 = req.files.attach2[0].filename;
    const filename3 = req.files.attach3[0].filename;
    const { contents } = req.body;
    const { madein } = req.body;

    let sql = "INSERT INTO item VALUES(NULL,?,?,?,?,?,?,?,?,?,?,now());";
    db.query(
      sql,
      [
        itemname,
        category,
        categoryCode,
        price,
        stock,
        filename,
        filename2,
        filename3,
        contents,
        madein,
      ],
      (err) => {
        if (err) {
          throw err;
        }
        res.send({ status: 201, message: "상품등록이 완료되었습니다!" });
      }
    );
  }
);

// 상품삭제
app.delete("/delete/:idx", (req, res) => {
  let sql = "DELETE FROM item WHERE idx=?;";
  db.query(sql, [req.params.idx], (err) => {
    if (err) {
      throw err;
    }
    res.send({ status: 201, message: "상품이 삭제되었습니다." });
  });
});

// 상품 한개불러오기
app.get("/updateItem/:idx", (req, res) => {
  let sql = "SELECT * FROM item WHERE idx = ?;";
  db.query(sql, [req.params.idx], (err, response) => {
    if (err) {
      throw err;
    }
    res.send(response);
  });
});

// 상품 수정
app.put("/updateItem/:idx", upload.single("attach"), (req, res) => {
  const { itemname, category, price, stock, contents, madein } = req.body;
  const { filename } = req.file;

  let sql = "UPDATE item SET ";
  sql +=
    "itemname=?, category=?, price=?, stock=?, attach=?, contents=?, madein=?, regdate=now() ";
  sql += "WHERE idx = ?;";
  db.query(
    sql,
    [
      itemname,
      category,
      price,
      stock,
      filename,
      contents,
      madein,
      req.params.idx,
    ],
    (err) => {
      if (err) {
        throw err;
      } else {
        console.log("update complete");
        res.send({ status: 201, message: "상품 수정 완료" });
      }
    }
  );
});

//상품 상세보기
// 상품 상세보기 페이지
app.get("/detail/:idx", (req, res) => {
  let sql = "select * from item where idx =?;";
  db.query(sql, [req.params.idx], (err, response) => {
    if (err) {
      throw err;
    }
    res.send(response);
    // console.log(response);
  });
});

// 상품 결제
app.get("/pay/:userId/:idx", (req, res) => {
  let userSQL = "select * from user where id=?;";
  db.query(userSQL, [req.params.userId], (err, user) => {
    if (err) {
      throw err;
    } else {
      let itemSQL = "select * from item where idx=?;";
      db.query(itemSQL, [req.params.idx], (err, result) => {
        if (err) {
          throw err;
        }
        console.log(user);
        console.log(result);
        res.send({ user, result });
      });
    }
  });
});

// 상품 결제 후 주문정보 저장
app.post("/pay/:userId/:idx", (req, res) => {
  const customerName = req.body.customerName;
  const destination = req.body.destination;
  const phone = req.body.phone;
  const orderedItem = req.body.orderedItem;
  const totalPrice = req.body.totalPrice;

  console.log(customerName);
  console.log(destination);
  console.log(phone);
  console.log(orderedItem);
  console.log(totalPrice);

  let sql = "INSERT INTO orders VALUES(NULL, ?,?,?,?,?,NOW());";
  db.query(
    sql,
    [customerName, destination, phone, orderedItem, totalPrice],
    (err) => {
      if (err) {
        throw err;
      }
      res.send({ status: 201, message: "결제완료!" });
    }
  );
});

//해당 상품 리뷰탭-> 리뷰 목록
app.get("/detail/:idx/detailReview", (req, res) => {
  let sql = "SELECT * FROM review where ItemNo =?;";
  db.query(sql, [req.params.idx], (err, reviews) => {
    if (err) {
      throw err;
    }
    res.send(reviews);
    // console.log(response);
  });
});

//해당 상품 리뷰-> 리뷰 작성
app.post(
  "/detail/:idx/addReview",
  upload.single("attach"),
  // upload.single("attach2"),
  // upload.single("attach3"),
  (req, res) => {
    console.log(req.params.idx);
    console.log(req.body);

    const { writer } = req.body;
    const { itemname } = req.body;
    const { title } = req.body;
    const { filename } = req.file;
    // const { filename2 } = req.file;
    // const { filename3 } = req.file;
    const { contents } = req.body;
    const { rating } = req.body;

    let sql = "INSERT INTO review VALUES(NULL,?,?,?,?,?,?,now());";
    db.query(
      sql,
      [
        writer,
        req.params.idx,
        itemname,
        title,
        filename,
        // filename2,
        // filename3,
        contents,
        rating,
      ],
      (err) => {
        if (err) {
          throw err;
        }
        res.send({ status: 201, message: "리뷰 등록이 완료되었습니다!" });
      }
    );
  }
);

//해당 상품 리뷰 상세보기

// 공지사항 작성
app.post("/writeNotice", (req, res) => {
  const noticeTitle = req.body.noticeTitle;
  const noticeWriter = req.body.noticeWriter;
  const noticeContent = req.body.noticeContent;

  let sql = "INSERT INTO notice VALUES(NULL,?,?,?,'1',now());";
  db.query(sql, [noticeTitle, noticeWriter, noticeContent], (err) => {
    if (err) {
      throw err;
    } else {
      res.send({ status: 201, message: "공지사항이 등록되었습니다!" });
    }
  });
});

// 문의하기
app.post("/ask", upload.single("askImage"), (req, res) => {
  const askCategory = req.body.askCategory;
  const askTitle = req.body.askTitle;
  const askWriter = req.body.askWriter;
  const filename = req.file.filename;
  const askContents = req.body.askContents;

  let sql = "INSERT INTO AskToAdmin VALUES(NULL,'미답변',?,?,?,?,?,now());";
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
          status: 201,
          message: "문의하기가 완료되었습니다.",
        });
      }
    );
  });
});

// 다중 게시판
app.get("/boardlist", (req, res) => {
  console.log(req.query);
  const page = Number.parseInt(req.query.page);
  const offset = Number.parseInt(req.query.offset);
  const startNum = (page - 1) * offset;
  const select = req.query.select || "";
  const search = req.query.searchQuery || "";
  const codeSearch = "%" + search + "%";
  const nameSearch = "%" + search + "%";
  const categorySearch = "%" + search + "%";

  // db 1 : 전체 개시물 수
  // let sql = "SELECT COUNT(boardIdx) AS cnt FROM boardManager WHERE ? LIKE ?;";
  // db.query(sql, [select, search], (err, result) => {
  let sql =
    "SELECT COUNT(boardIdx) AS cnt FROM boardManager WHERE boardCode LIKE ? OR boardName LIKE ?  OR boardCategory LIKE ?;";
  db.query(sql, [codeSearch, nameSearch, categorySearch], (err, result) => {
    if (err) {
      throw err;
    } else {
      // db 2 : 페이징 처리를 위한 쿼리 AND 검색 쿼리
      let listSQL =
        "SELECT * FROM boardManager WHERE boardCode LIKE ? OR boardName LIKE ? OR boardCategory LIKE ? ORDER BY boardIdx ASC LIMIT ?, ?;";
      db.query(
        listSQL,
        [codeSearch, nameSearch, categorySearch, startNum, offset],
        (err, lists) => {
          if (err) {
            throw err;
          } else {
            res.send({
              lists,
              page, // 현재 페이지
              totalRows: result[0].cnt, // 전체 게시판 수
              totalPageNum: Math.ceil(result[0].cnt / offset), // 전체 페이지 수
            });
          }
        }
      );
    }
  });
});

app.post("/boardAdd", (req, res) => {
  const {
    boardCode,
    boardCategory,
    boardName,
    boardBuilder,
    boardReadAllow,
    boardWriteAllow,
    boardCommentAllow,
    boardModifyAllow,
  } = req.body;
  let sql =
    "INSERT INTO boardManager VALUES(NULL, ?, ?, ?, ?, ?, ?, ?, ?, now(), now());";
  db.query(
    sql,
    [
      boardCode,
      boardCategory,
      boardName,
      boardBuilder,
      boardReadAllow,
      boardWriteAllow,
      boardCommentAllow,
      boardModifyAllow,
    ],
    (err) => {
      if (err) {
        throw err;
      } else {
        //IF NOT EXISTS 삽입하여 테이블명 중첩될 때 덮어쓰는 거로 임시방편. 추후 if문을 통해(테이블명이 같은게 있을 시 경고창) 수정,
        // boardName 이 아닌 boardCode로 테이블 생성
        let createSQL = "CREATE TABLE IF NOT EXISTS board" + boardCode + "(";
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
          if (err) {
            throw err;
          } else {
            console.log("board" + boardName + " Create Completed.");
          }
        });
        res.send({ status: 201, message: "게시판 생성 완료" });
      }
    }
  );
});

app.get("/boardUpdate", (req, res) => {
  // console.log(req.query);
  let sql = "select * from boardManager where boardCode=?;";
  db.query(sql, [req.query.boardCode], (err, result) => {
    if (err) {
      throw err;
    } else {
      res.send(result);
    }
  });
});

app.put("/boardUpdate", (req, res) => {
  const {
    boardCode,
    boardCategory,
    boardName,
    boardBuilder,
    boardReadAllow,
    boardWriteAllow,
    boardCommentAllow,
    boardModifyAllow,
    boardIdx,
  } = req.body;

  let sql =
    "update boardManager set boardCode=?, boardCategory=?, boardName=?, boardBuilder=?, boardReadAllow=?, boardWriteAllow=?, boardCommentAllow=?, boardModifyAllow=?, modifyDate=now() where boardIdx = ?";
  db.query(
    sql,
    [
      boardCode,
      boardCategory,
      boardName,
      boardBuilder,
      boardReadAllow,
      boardWriteAllow,
      boardCommentAllow,
      boardModifyAllow,
      boardIdx,
    ],
    (err) => {
      if (err) {
        throw err;
      } else {
        if (req.query.boardCode !== boardCode) {
          renameSQL =
            "rename table board" +
            req.query.boardCode +
            " to board" +
            boardCode +
            " ;";
          db.query(renameSQL, (err) => {
            if (err) throw err;
          });
        }
        console.log("update complete");
        res.send({ status: 201, message: "게시판 수정 완료" });
      }
    }
  );
});

app.get("/board", (req, res) => {
  const boardCode = req.query.boardCode;
  const page = Number.parseInt(req.query.page);
  const offset = Number.parseInt(req.query.offset);
  const startNum = (page - 1) * offset;
  const select = req.query.select || "";
  const search = req.query.searchQuery || "";
  const idxSearch = "%" + search + "%";
  const titleSearch = "%" + search + "%";
  const writerSearch = "%" + search + "%";

  let sql =
    "SELECT COUNT(idx) AS cnt FROM board" +
    boardCode +
    " WHERE idx LIKE ? OR title LIKE ?  OR writer LIKE ?;";
  db.query(sql, [idxSearch, titleSearch, writerSearch], (err, result) => {
    if (err) {
      throw err;
    } else {
      let listSQL =
        "SELECT * FROM board" +
        boardCode +
        " WHERE idx LIKE ? OR title LIKE ?  OR writer LIKE ? ORDER BY idx DESC LIMIT ?, ?;";
      db.query(
        listSQL,
        [idxSearch, titleSearch, writerSearch, startNum, offset],
        (err, lists) => {
          if (err) {
            throw err;
          } else {
            res.send({
              lists,
              page,
              totalRows: result[0].cnt,
              totalPageNum: Math.ceil(result[0].cnt / offset),
            });
          }
        }
      );
    }
  });
});

app.post("/write", upload.single("img"), (req, res) => {
  const { title, writer, passwd, contents } = req.body;
  const { filename } = req.file || "";

  let sql =
    "insert into board" +
    req.query.boardCode +
    " values(null, ?, ?, ?, ?, ?, 0, now());";
  db.query(sql, [title, writer, passwd, contents, filename], (err) => {
    if (err) {
      throw err;
    } else {
      console.log("write complete");
      res.send({ status: 201, message: "게시글 등록 완료" });
    }
  });
});

app.get("/view", (req, res) => {
  const { boardCode, idx } = req.query;
  let viewSQL = "update board" + boardCode + " set view=view+1 where idx = ?;";
  db.query(viewSQL, [idx], (err) => {
    if (err) {
      throw err;
    } else {
      let sql = "select * from board" + boardCode + " where idx = ? ;";
      db.query(sql, [idx], (err, result) => {
        if (err) {
          throw err;
        } else {
          res.send(result);
        }
      });
    }
  });
});

app.put("/update", upload.single("img"), (req, res) => {
  // console.log(req.body);
  // console.log(req.file);
  const { title, writer, passwd, contents } = req.body;
  const { filename } = req.file || "";

  let sql =
    "update board" +
    req.query.boardCode +
    " set title=?, writer=?, passwd=?, contents=?, image=? where idx = ?";
  db.query(
    sql,
    [title, writer, passwd, contents, filename, req.query.idx],
    (err) => {
      if (err) {
        throw err;
      } else {
        console.log("update complete");
        res.send({ status: 201, message: "게시글 수정 완료" });
      }
    }
  );
});

app.delete("/delImg", (req, res) => {
  const { boardCode, idx } = req.query;
  db.query(
    "SELECT image FROM board" + boardCode + " WHERE idx = ?;",
    [idx],
    (err, img) => {
      if (err) {
        throw err;
      } else {
        db.query("update board" + boardCode + " set image=NULL;");
        fs.unlink("./uploads/" + img[0].image, (err) => {
          if (err) throw err;
          res.send({ status: 201, message: "첨부파일 삭제 완료" });
        });
      }
    }
  );
});

// 게시판 삭제
//11-21-commit, 생성되었던 table DROP이 용이하도록 boardIdx가 아닌 boardCode를 param으로 가져와 delete와 drop을 실행.
// 이전 코드에선 게시판 목록에선 지워졌지만 데이터베이스에 생성되었던 테이블은 남아있었음.
app.delete("/board/delete/:boardCode", (req, res) => {
  const boardCode = req.params.boardCode;
  let delSql = "DELETE FROM boardManager WHERE boardCode = ?;";
  db.query(delSql, boardCode, (err) => {
    if (err) {
      throw err;
    } else {
      console.log(boardCode);
      let dropSql = "DROP TABLE board" + boardCode + ";";
      db.query(dropSql, (err) => {
        if (err) {
          throw err;
        } else {
          console.log("Drop Table board" + boardCode + " Completed.");
        }
      });
      res.send({ status: 201, message: "게시판 삭제 완료" });
    }
  });
});

// 게시글 삭제
app.delete("/delete/:boardCode/:idx", (req, res) => {
  const { boardCode, idx } = req.params;

  db.query(
    "SELECT image FROM board" + boardCode + " WHERE idx = ?;",
    [idx],
    (err, img) => {
      if (err) {
        throw err;
      } else {
        let sql = "DELETE FROM board" + boardCode + " WHERE idx = ?;";
        db.query(sql, [idx], (err) => {
          if (err) {
            throw err;
          } else {
            fs.unlink("./uploads/" + img[0].image, (err) => {
              if (err) throw err;
            });
            res.send({ status: 201, message: "게시글 삭제 완료" });
          }
        });
      }
    }
  );
});
//리뷰 작성

// 다중게시판

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
