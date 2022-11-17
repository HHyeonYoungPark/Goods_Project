import React from "react";
import "../../css/board.css";

function BoardModify() {
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
    </div>
  );
}

export default BoardModify;
