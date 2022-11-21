import axios from "axios";
import React, { useState } from "react";
import "../../css/pages/Board.css";

function BoardModify(b) {
  const [board, setBoard] = useState(b);
  console.log(board.b);
  const [boardCode, setBoardCode] = useState(board.b.boarCode);
  const [boardCategory, setBoardCategory] = useState(board.b.boardCategory);
  const [boardName, setBoardName] = useState(board.b.boardName);
  const [boardBuilder, setBoardBuilder] = useState(board.b.boardBuilder);
  const [boardReadAllow, setBoardReadAllow] = useState(board.b.boardReadAllow);
  const [boardWriteAllow, setBoardWriteAllow] = useState(
    board.b.boardWriteAllow
  );
  const [boardCommentAllow, setBoardCommentAllow] = useState(
    board.b.boardCommentAllow
  );
  const [boardModifyAllow, setBoardModifyAllow] = useState(
    board.b.boardModifyAllow
  );

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
      .post(
        "http://localhost:4001/boardUpdate?=boardName=" + board.b.boardName,
        data
      )
      .then((response) => {
        if (response.data.status === 201) {
          window.alert(response.data.message);
        }
      });
  }

  return (
    <div>
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
                  value={boardName}
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
                  value={boardCategory}
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
                  value={boardName}
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
                  value={boardBuilder}
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
                  defaultValue={boardReadAllow}
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
              <td>쓰기 권한</td>
              <td>
                <select
                  id="boardWriteAllow"
                  className="boardWriteAllow"
                  name="boardWriteAllow"
                  defaultValue={boardWriteAllow}
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
              <td>댓글 권한</td>
              <td>
                <select
                  id="boardCommentAllow"
                  className="boardCommentAllow"
                  name="boardCommentAllow"
                  defaultValue={boardCommentAllow}
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
              <td>수정 권한</td>
              <td>
                <select
                  id="boardModifyAllow"
                  className="boardModifyAllow"
                  name="boardModifyAllow"
                  defaultValue={boardModifyAllow}
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
        <input type="submit" value="Update" />
      </form>
    </div>
  );
}

export default BoardModify;
