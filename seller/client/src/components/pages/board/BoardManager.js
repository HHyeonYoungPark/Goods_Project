import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Modal from "react-modal";

import BoardModify from "./BoardModify";
import Paging from "../../function/Paging";

function BoardManager() {
  //게시판 추가
  const [boardCode, setBoardCode] = useState("");
  const [boardCategory, setBoardCategory] = useState("");
  const [boardName, setBoardName] = useState("");
  const [boardBuilder, setBoardBuilder] = useState("");  
  const [boardReadAllow, setBoardReadAllow] = useState("");
  const [boardWriteAllow, setBoardWriteAllow] = useState("");
  const [boardCommentAllow, setBoardCommentAllow] = useState("");
  const [boardModifyAllow, setBoardModifyAllow] = useState("");

  //게시판 목록 불러오기
  const [boardlist, setBoardlist] = useState([]);
  const [rows, setRows] = useState(0);
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState(0);
  const [offset, setOffset] = useState(10);
  const [select, setSelect] = useState("");
  const [searchWords, setSearchWords] = useState("");
  const [keyword, setKeyword] = useState("");
  const [msg, setMsg] = useState("");

  // 모달 스타일
  const styleModal = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      zIndex: 10,
    },
    content: {
      display: "flex",
      justifyContent: "center",
      background: "#ffffe7",
      overflow: "auto",
      top: "30vh",
      left: "25vw",
      right: "25vw",
      bottom: "30vh",
      WebkitOverflowScrolling: "touch",
      borderRadius: "14px",
      outline: "none",
      zIndex: 10,
    },
  };
  
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const navigate = useNavigate();
  
  const getBoardlist = async () => {
    await axios.get("http://localhost:4001/boardlist?page="+page+"&offset="+offset+"&select="+select+"&searchQuery="+keyword).then((res) => {
      setBoardlist(res.data.lists);
      setPage(res.data.page);
      setPages(res.data.totalPageNum);
      setRows(res.data.totalRows);
    });
  };

  useEffect(() => {
    getBoardlist();
  }, [page, keyword]);

  async function frmHandler(e) {
    e.preventDefault();
    const data = {boardCode, boardCategory, boardName, boardBuilder, boardReadAllow, boardWriteAllow, boardCommentAllow, boardModifyAllow}
    await axios.post("http://localhost:4001/boardAdd", data)
      .then((response) => {
        if(response.data.status === 201){
          window.alert(response.data.message);
          getBoardlist();
        }
      })
  }

  async function deleteBoard(boardIdx) {
    await axios.delete("http://localhost:4001/board/delete/" + boardIdx).then((res) => {
      if(res.data.status === 201) {
        window.alert(res.data.message);
        getBoardlist();
      }else{
        window.alert("Delete Failed");
      }
    });
  }

  const boardSearch = (e) => {
    e.preventDefault();
    setKeyword(searchWords);
    setPage(0);
    setSearchWords("");
  }

  const changePage = (page) => {
    setPage(page);
    if(page === (pages - 1)){
      setMsg("No More Data");
    }else{
      setMsg("");
    }
  }

  return (
    <div className="boardManager-container">
        <h1>BoardMain</h1>
        <div className="buildBoard">
          <h2>Create Board</h2>
          <form method="post" className="frm" onSubmit={frmHandler}>
            <table>
              <tbody>
                <tr>
                  <td>게시판 코드</td>
                  <td colSpan={3}>
                    <input
                      type="text"
                      id="boardCode"
                      className="boardCode"
                      name="boardCode"
                      onChange={(e) => setBoardCode(e.target.value)}
                    />
                  </td>

                  <td>카테고리</td>
                  <td colSpan={3}>
                    <input
                      type="text"
                      id="boardCategory"
                      className="boardCategory"
                      name="boardCategory"
                      onChange={(e) => setBoardCategory(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>게시판 제목</td>
                  <td colSpan={3}>
                    <input
                      type="text"
                      id="boardName"
                      className="boardName"
                      name="boardName"
                      onChange={(e) => setBoardName(e.target.value)}
                    />
                  </td>
                  <td>게시판 생성자</td>
                  <td colSpan={3}>
                    <input
                      type="text"
                      id="boardBuilder"
                      className="boardBuilder"
                      name="boardBuilder"
                      onChange={(e) => setBoardBuilder(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>읽기 권한</td>
                  <td>
                    <select
                      id="boardReadAllow"
                      className="boardReadAllow"
                      name="boardReadAllow"
                      onChange={(e) => setBoardReadAllow(e.target.value)}
                    >
                      <option value="1" selected >All</option>
                      <option value="2">logined</option>
                      <option value="3">seller or admin</option>
                      <option value="4">admin only</option>
                    </select>
                  </td>
                  <td>쓰기 권한</td>
                  <td>
                    <select
                      id="boardWriteAllow"
                      className="boardWriteAllow"
                      name="boardWriteAllow"
                      onChange={(e) => setBoardWriteAllow(e.target.value)}
                    >
                      <option value="1" selected >All</option>
                      <option value="2">logined</option>
                      <option value="3">seller or admin</option>
                      <option value="4">admin only</option>
                    </select>
                  </td>
                  <td>댓글 권한</td>
                  <td>
                    <select
                      id="boardCommentAllow"
                      className="boardCommentAllow"
                      name="boardCommentAllow"
                      onChange={(e) => setBoardCommentAllow(e.target.value)}
                    >
                      <option value="1" selected >All</option>
                      <option value="2">logined</option>
                      <option value="3">seller or admin</option>
                      <option value="4">admin only</option>
                    </select>
                  </td>
                  <td>수정 권한</td>
                  <td>
                    <select
                      id="boardModifyAllow"
                      className="boardModifyAllow"
                      name="boardModifyAllow"
                      onChange={(e) => setBoardModifyAllow(e.target.value)}
                    >
                      <option value="1" selected >All</option>
                      <option value="2">logined</option>
                      <option value="3">seller or admin</option>
                      <option value="4">admin only</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="buildBoardBtn">
              <button type="submit">생성</button>
              <button>취소</button>
            </div>
          </form>
        </div>
      
      <div className="table-List">
        <div className="table-List-top">
          <div className="top-right">
            <div className="search-wrap">
              <form method="post" id="frm" onSubmit={boardSearch}>
                <div className="boardSearch">
                  <select
                    id="board"
                    className="board"
                    name="boardSearch"
                    onchange={(e) => setSelect(e.target.value)}
                  >
                    <option value="" selected disabled>선택하세요</option>
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
                  <button type="submit" className="searchBtn">검색</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="tbl-wrap">
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
                    <Link to={"/adminPage/board/" + b.boardName}>{b.boardName}</Link>
                  </td>
                  <td>{b.boardReadAllow}</td>
                  <td>{b.boardWriteAllow}</td>
                  <td>{b.boardCommentAllow}</td>
                  <td>{b.boardModifyAllow}</td>
                  <td>{b.boardBuilder}</td>
                  <td>{b.createDate}</td>
                  <td>{b.modifyDate}</td>
                  <td>
                    <button onClick={() => setModalIsOpen(true)}>수정</button>
                    <Modal
                      isOpen={modalIsOpen}
                      style={styleModal}
                      onRequestClose={() => setModalIsOpen(false)}
                    >
                      <div className="modalModify">
                        <h2>게시판 수정</h2>
                        <BoardModify className="tableModify" b={b}/>
                        <button className="modifyDone" onClick={() => setModalIsOpen(false)}>
                          수정 완료
                        </button>
                      </div>
                    </Modal>
                    <button className="upDelBtn" onClick={() => deleteBoard(b.boardIdx)}>삭제</button>
                  </td>
                </tr>
              );
            })}
          </table>

          <p className="daner">{msg}</p>
          <div className="paging">
            <Paging page={page} offset={offset} rows={rows} setPage={setPage} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoardManager;
