import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function BoardManager() {
  const [boardlist, setBoardlist] = useState([]);

  const getBoardlist = async () => {
    await axios.get("http://localhost:4001/boardlist")
      .then((res) =>{
        setBoardlist(res.data);
      });
  }

  useEffect(() => {
    getBoardlist();
  }, []);


  return (
    <div className="boardManager-container">
      <div className="table-List">
        <h1>게시판 관리</h1>
        <div className="table-List-top">
          <div className="top-left">
            <Link to="/boardAdd">
              <button type="submit" class="addBtn">
                <i class="fa-solid fa-pen-to-square"></i>게시판 추가
              </button>
            </Link>
          </div>
          <div className="top-right">
            <div className="search-wrap">
              <form action="/board/boardSearch" method="get" id="frm">
                <div className="boardSearch">
                  <select
                    id="board"
                    className="board"
                    name="boardSearch"
                    onchange="boardSearch()"
                  >
                    <option value="">선택하세요</option>
                    <option value="title">제목</option>
                    <option value="type">타입</option>
                  </select>
                  <input
                    type="text"
                    id="search"
                    className="search"
                    name="search"
                    autofocus
                    required
                  />
                  <input type="submit" value="검색" className="searchBtn" />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="tbl-wrap">
          <table>
            <thead>
              <tr>
                <td>번호</td>
                <td>이름</td>
                <td>타입</td>
                <td>쓰기</td>
                <td>읽기</td>
                <td>수정</td>
                <td>삭제</td>
                <td>생성일</td>
                <td>비고</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                {
                  boardlist.map((b, key) => {
                    return(
                      <tr key={key}>
                        <td>{b.boardIdx}</td>
                        <td><Link to={"/board/"+b.boardName}>{b.boardName}</Link></td>
                        <td>{b.boardType}</td>
                        <td>{b.writeAllow}</td>
                        <td>{b.readAllow}</td>
                        <td>{b.modifyAllow}</td>
                        <td>{b.deleteAllow}</td>
                        <td>{b.createDate}</td>
                        <td>수정/삭제</td>
                      </tr>
                    )
                  })
                }
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default BoardManager;
