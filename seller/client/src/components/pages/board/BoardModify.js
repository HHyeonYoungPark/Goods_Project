import React, { useState } from "react";
import "../../css/pages/Board.css";

function BoardModify({b}) {

  const [boardCode, setBoardCode] = useState("");
  const [boardCategory, setBoardCategory] = useState("");
  const [boardName, setBoardName] = useState("");
  const [boardBuilder, setBoardBuilder] = useState("");  
  const [boardReadAllow, setBoardReadAllow] = useState("");
  const [boardWriteAllow, setBoardWriteAllow] = useState("");
  const [boardCommentAllow, setBoardCommentAllow] = useState("");
  const [boardModifyAllow, setBoardModifyAllow] = useState("");

  return (
    <div>
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
                value={b.boardCode}
                onChange={(e) => setBoardCode(e.target.value)}
              ></input>
            </td>

            <td>카테고리</td>
            <td colSpan={3}>
              <input
                type="text"
                id="boardCategory"
                className="boardCategory"
                name="boardCategory"
                value={b.boardCategory}
                onChange={(e) => setBoardCategory(e.target.value)}
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
                value={b.boardName}
                onChange={(e) => setBoardName(e.target.value)}
              ></input>
            </td>
            <td>게시판 생성자</td>
            <td colSpan={3}>
              <input
                type="text"
                id="boardBuilder"
                className="boardBuilder"
                name="boardBuilder"
                value={b.boardBuilder}
                onChange={(e) => setBoardBuilder(e.target.value)}
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
                value={b.boardReadAllow}
                onChange={(e) => setBoardReadAllow(e.target.value)}
              >
                <option value="1">All</option>
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
                value={b.boardWriteAllow}
                onChange={(e) => setBoardWriteAllow(e.target.value)}
              >
                <option value="1">All</option>
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
                value={b.boardCommentAllow}
                onChange={(e) => setBoardCommentAllow(e.target.value)}
              >
                <option value="1">All</option>
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
                value={b.boardModifyAllow}
                onChange={(e) => setBoardModifyAllow(e.target.value)}
              >
                <option value="1">All</option>
                <option value="2">logined</option>
                <option value="3">seller or admin</option>
                <option value="4">admin only</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default BoardModify;
