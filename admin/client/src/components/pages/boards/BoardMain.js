import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../../css/board.css";

function BoardMain() {
  const [boardlist, setBoardlist] = useState([]);

  const getBoardlist = async () => {
    await axios.get("http://localhost:4001/boardlist").then((res) => {
      setBoardlist(res.data);
    });
  };

  useEffect(() => {
    getBoardlist();
  }, []);

  return (
    <div className="boardMainContainer">
      <h1>BoardMain</h1>
      <div className="buildBoard">
        <h2>Create Board</h2>
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
                ></input>
              </td>

              <td>카테고리</td>
              <td colSpan={3}>
                <input
                  type="text"
                  id="boardCategory"
                  className="boardCategory"
                  name="boardCategory"
                ></input>
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
                ></input>
              </td>
              <td>게시판 생성자</td>
              <td colSpan={3}>
                <input
                  type="text"
                  id="boardBuilder"
                  className="boardBuilder"
                  name="boardBuilder"
                ></input>
              </td>
            </tr>
            <tr>
              <td>읽기 권한</td>
              <td>
                <select
                  id="boardReadAllow"
                  className="boardReadAllow"
                  name="boardReadAllow"
                  onchange="boardReadAllow()"
                >
                  <option value="0">All</option>
                  <option value="1">logined</option>
                  <option value="2">seller or admin</option>
                  <option value="3">admin only</option>
                </select>
              </td>
              <td>쓰기 권한</td>
              <td>
                <select
                  id="boardWriteAllow"
                  className="boardWriteAllow"
                  name="boardWriteAllow"
                  onchange="boardWriteAllow()"
                >
                  <option value="0">All</option>
                  <option value="1">logined</option>
                  <option value="2">seller or admin</option>
                  <option value="3">admin only</option>
                </select>
              </td>
              <td>댓글 권한</td>
              <td>
                <select
                  id="boardCommentAllow"
                  className="boardCommentAllow"
                  name="boardCommentAllow"
                  onchange="boardCommentAllow()"
                >
                  <option value="0">All</option>
                  <option value="1">logined</option>
                  <option value="2">seller or admin</option>
                  <option value="3">admin only</option>
                </select>
              </td>
              <td>수정 권한</td>
              <td>
                <select
                  id="boardModifyAllow"
                  className="boardModifyAllow"
                  name="boardModifyAllow"
                  onchange="boardModifyAllow()"
                >
                  <option value="0">All</option>
                  <option value="1">logined</option>
                  <option value="2">seller or admin</option>
                  <option value="3">admin only</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="buildBoardBtn">
          <button>생성</button>
          <button>취소</button>
        </div>
      </div>
      <h2>Board List</h2>
      <div className="boardSearch">
        <select
          id="boardSearch"
          className="boardSearch"
          name="boardSearch"
          onchange="boardSearch()"
        >
          <option value="name">제목</option>
          <option value="code">코드</option>
          <option value="category">카테고리</option>
        </select>
        <input
          type="text"
          id="search"
          className="search"
          name="search"
          required
        />
        <input type="submit" value="검색" className="searchBtn" />
      </div>
      <table>
        <tr>
          <td>코드</td>
          <td>카테고리</td>
          <td>이름</td>
          <td>읽기 권한</td>
          <td>쓰기 권한</td>
          <td>댓글 권한</td>
          <td>수정 권한</td>
          <td>생성자</td>
          <td>생성일</td>
          <td>수정일</td>
          <td>비고</td>
        </tr>

        {boardlist.map((b, key) => {
          return (
            <tr key={key}>
              <td>{b.boardCode}</td>
              <td>{b.boardCategory}</td>
              <td>
                <Link to={"/board/" + b.boardName}>{b.boardName}</Link>
              </td>
              <td>{b.readAllow}</td>
              <td>{b.writeAllow}</td>
              <td>{b.commentAllow}</td>
              <td>{b.modifyAllow}</td>
              <td>{b.boardBuilder}</td>
              <td>{b.createDate}</td>
              <td>{b.modifyDate}</td>
              <td>수정/삭제</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default BoardMain;
