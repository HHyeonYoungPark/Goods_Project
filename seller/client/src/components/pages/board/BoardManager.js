import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Modal from "react-modal";

import BoardModify from "./BoardModify";
import Paging from "../../function/Paging";

import "../../css/pages/AdminPage.css";

function BoardManager({ userId }) {
  //게시판 추가
  const [boardCode, setBoardCode] = useState("");
  const [boardCategory, setBoardCategory] = useState("");
  const [boardName, setBoardName] = useState("");
  const [boardBuilder, setBoardBuilder] = useState(userId);
  //초기값이 비어있을경우 selected 값이 서버로 넘어가지 않아 강제로 초기값 세팅
  const [boardReadAllow, setBoardReadAllow] = useState("All");
  const [boardWriteAllow, setBoardWriteAllow] = useState("All");
  const [boardCommentAllow, setBoardCommentAllow] = useState("All");
  const [boardModifyAllow, setBoardModifyAllow] = useState("All");

  //게시판 목록 불러오기
  const [boardlist, setBoardlist] = useState([]);
  const [rows, setRows] = useState(0);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(0);
  const [offset, setOffset] = useState(10);
  const [select, setSelect] = useState("");
  const [searchWords, setSearchWords] = useState("");
  const [keyword, setKeyword] = useState("");
  const [msg, setMsg] = useState("");

  // 모달 스타일
  // const styleModal = {
  //   overlay: {
  //     position: "fixed",
  //     top: 0,
  //     left: 0,
  //     right: 0,
  //     bottom: 0,
  //     backgroundColor: "rgba(255, 255, 255, 0.8)",
  //     zIndex: 10,
  //   },
  //   content: {
  //     display: "flex",
  //     justifyContent: "center",
  //     background: "#ffffe7",
  //     overflow: "auto",
  //     top: "30vh",
  //     left: "25vw",
  //     right: "25vw",
  //     bottom: "30vh",
  //     WebkitOverflowScrolling: "touch",
  //     borderRadius: "14px",
  //     outline: "none",
  //     zIndex: 10,
  //   },
  // };

  // const [modalIsOpen, setModalIsOpen] = useState(false);

  // const navigate = useNavigate();

  const getBoardlist = async () => {
    await axios
      .get(
        "http://localhost:4001/boardlist?page=" +
          page +
          "&offset=" +
          offset +
          "&select=" +
          select +
          "&searchQuery=" +
          keyword
      )
      .then((res) => {
        setBoardlist(res.data.lists);
        setPage(res.data.page);
        setPages(res.data.totalPageNum);
        setRows(res.data.totalRows);
      });
  };

  useEffect(() => {
    getBoardlist();
  }, [boardCode, page, keyword]);

  async function frmHandler(e) {
    e.preventDefault();
    const data = {
      boardCode,
      boardCategory,
      boardName,
      boardBuilder,
      boardReadAllow,
      boardWriteAllow,
      boardCommentAllow,
      boardModifyAllow,
    };
    await axios
      .post("http://localhost:4001/boardAdd", data)
      .then((response) => {
        if (response.data.status === 201) {
          window.alert(response.data.message);
          window.location.reload();
        }
      });
  }

  async function deleteBoard(boardCode) {
    await axios
      .delete("http://localhost:4001/board/delete/" + boardCode)
      .then((res) => {
        if (res.data.status === 201) {
          window.alert(res.data.message);
          getBoardlist();
        } else {
          window.alert("Delete Failed");
        }
      });
  }

  const boardSearch = (e) => {
    e.preventDefault();
    setKeyword(searchWords);
    setPage(1);
    setSearchWords("");
  };

  const changePage = (page) => {
    setPage(page);
    if (page === pages) {
      setMsg("No More Data");
    } else {
      setMsg("");
    }
  };

  return (
    <div className="boardManager-container">
      <div className="buildBoard">
        <h2>Create Board</h2>
        <form method="post" className="frm" onSubmit={frmHandler}>
          <div className="buildBoardTb">
            <table className="boardBuilder">
              <tbody>
                <tr>
                  <td>Code</td>
                  <td colSpan={3}>
                    <input
                      type="text"
                      id="boardCode"
                      className="boardCode"
                      name="boardCode"
                      placeholder="Input Board Code"
                      required
                      onChange={(e) => setBoardCode(e.target.value)}
                    />
                  </td>

                  <td>Category</td>
                  <td colSpan={3}>
                    <input
                      type="text"
                      id="boardCategory"
                      className="boardCategory"
                      name="boardCategory"
                      placeholder="Input Board Category"
                      required
                      onChange={(e) => setBoardCategory(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Name</td>
                  <td colSpan={3}>
                    <input
                      type="text"
                      id="boardName"
                      className="boardName"
                      name="boardName"
                      placeholder="Input Board Name"
                      required
                      onChange={(e) => setBoardName(e.target.value)}
                    />
                  </td>
                  <td>Creater</td>
                  <td colSpan={3}>
                    <input
                      type="text"
                      id="boardBuilder"
                      className="boardBuilder"
                      name="boardBuilder"
                      placeholder={userId}
                      readOnly
                      required
                      onChange={(e) => setBoardBuilder(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Read</td>
                  <td>
                    <select
                      id="boardReadAllow"
                      className="boardReadAllow"
                      name="boardReadAllow"
                      onChange={(e) => setBoardReadAllow(e.target.value)}
                    >
                      <option value="All" selected>
                        All
                      </option>
                      <option value="logined">logined</option>
                      <option value="seller or admin">seller or admin</option>
                      <option value="admin only">admin only</option>
                    </select>
                  </td>
                  <td>Writer</td>
                  <td>
                    <select
                      id="boardWriteAllow"
                      className="boardWriteAllow"
                      name="boardWriteAllow"
                      onChange={(e) => setBoardWriteAllow(e.target.value)}
                    >
                      <option value="All" selected>
                        All
                      </option>
                      <option value="logined">logined</option>
                      <option value="seller or admin">seller or admin</option>
                      <option value="admin only">admin only</option>
                    </select>
                  </td>
                  <td>Comment</td>
                  <td>
                    <select
                      id="boardCommentAllow"
                      className="boardCommentAllow"
                      name="boardCommentAllow"
                      onChange={(e) => setBoardCommentAllow(e.target.value)}
                    >
                      <option value="All" selected>
                        All
                      </option>
                      <option value="logined">logined</option>
                      <option value="seller or admin">seller or admin</option>
                      <option value="admin only">admin only</option>
                    </select>
                  </td>
                  <td>Modify</td>
                  <td>
                    <select
                      id="boardModifyAllow"
                      className="boardModifyAllow"
                      name="boardModifyAllow"
                      onChange={(e) => setBoardModifyAllow(e.target.value)}
                    >
                      <option value="All" selected>
                        All
                      </option>
                      <option value="logined">logined</option>
                      <option value="seller or admin">seller or admin</option>
                      <option value="admin only">admin only</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="buildBoardBtn">
            <button className="createBoard" type="submit">
              Create
            </button>
            <button className="cancelBoard" type="reset">
              Cancel
            </button>
          </div>
        </form>
      </div>
      <h2>Board List</h2>
      <div className="tableList">
        <div className="tableListtop">
          <div className="topRight">
            <div className="searchWrap">
              <form method="post" id="frm" onSubmit={boardSearch}>
                <div className="boardSearch">
                  <select
                    id="board"
                    className="board"
                    name="boardSearch"
                    onchange={(e) => setSelect(e.target.value)}
                  >
                    <option value="" selected disabled>
                      선택하세요
                    </option>
                    <option value="code">코드</option>
                    <option value="name">제목</option>
                    <option value="category">카테고리</option>
                  </select>
                  <input
                    type="text"
                    id="search"
                    className="search"
                    name="search"
                    onChange={(e) => setSearchWords(e.target.value)}
                    value={searchWords}
                  />
                  <button type="submit" className="searchBtn">
                    검색
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="tblWrap">
          <table>
            <tr>
              <th>코드</th>
              <th>카테고리</th>
              <th>이름</th>
              <th>읽기 권한</th>
              <th>쓰기 권한</th>
              <th>댓글 권한</th>
              <th>수정 권한</th>
              <th>생성자</th>
              <th>생성일</th>
              <th>수정일</th>
              <th>비고</th>
            </tr>

            {boardlist.map((b, key) => {
              return (
                <tr key={key}>
                  <td>{b.boardCode}</td>
                  <td>{b.boardCategory}</td>
                  <td>
                    <Link to={"/adminPage/board/" + b.boardCode}>
                      {b.boardName}
                    </Link>
                  </td>
                  <td>{b.boardReadAllow}</td>
                  <td>{b.boardWriteAllow}</td>
                  <td>{b.boardCommentAllow}</td>
                  <td>{b.boardModifyAllow}</td>
                  <td>{b.boardBuilder}</td>
                  <td>{b.createDate}</td>
                  <td>{b.modifyDate}</td>
                  <td>
                    <Link to={"/adminPage/boardUpdate/" + b.boardCode}>
                      수정
                    </Link>
                    {/* <button onClick={() => setModalIsOpen(true)}>수정</button>
                    <Modal
                      isOpen={modalIsOpen}
                      style={styleModal}
                      onRequestClose={() => setModalIsOpen(false)}
                    >
                      <div className="modalModify">
                        <h2>게시판 수정</h2>
                        <BoardModify className="tableModify" b={b} />
                        <button
                          className="modifyDone"
                          onClick={() => setModalIsOpen(false)}
                        >
                          수정 완료
                        </button>
                      </div>
                    </Modal> */}
                    <button
                      className="upDelBtn"
                      onClick={() => deleteBoard(b.boardCode)}
                    >
                      삭제
                    </button>
                  </td>
                </tr>
              );
            })}
          </table>

          <p className="danger">{msg}</p>
          <div className="paging">
            <Paging
              page={page}
              offset={offset}
              rows={rows}
              setPage={changePage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoardManager;
