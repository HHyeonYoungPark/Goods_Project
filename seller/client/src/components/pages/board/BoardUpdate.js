import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

function BoardUpdate() {
  const { BoardCode } = useParams();
  const [boardIdx, setBoardIdx] = useState("");
  const [boardCode, setBoardCode] = useState("");
  const [boardCategory, setBoardCategory] = useState("");
  const [boardName, setBoardName] = useState("");
  const [boardBuilder, setBoardBuilder] = useState("");
  const [boardReadAllow, setBoardReadAllow] = useState("");
  const [boardWriteAllow, setBoardWriteAllow] = useState("");
  const [boardCommentAllow, setBoardCommentAllow] = useState("");
  const [boardModifyAllow, setBoardModifyAllow] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const getBoardView = async () => {
      await axios
        .get("http://localhost:4001/boardUpdate?boardCode=" + BoardCode)
        .then((res) => {
          console.log(res.data);
          setBoardIdx(res.data[0].boardIdx);
          setBoardCode(res.data[0].boardCode);
          setBoardCategory(res.data[0].boardCategory);
          setBoardName(res.data[0].boardName);
          setBoardBuilder(res.data[0].boardBuilder);
          setBoardReadAllow(res.data[0].boardReadAllow);
          setBoardWriteAllow(res.data[0].boardWriteAllow);
          setBoardCommentAllow(res.data[0].boardCommentAllow);
          setBoardModifyAllow(res.data[0].boardModifyAllow);
        });
    };
    getBoardView();
  }, []);

  async function frmHandler(e) {
    e.preventDefault();
    const data = {
      boardIdx,
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
      .put("http://localhost:4001/boardUpdate?boardCode=" + BoardCode, data)
      .then((response) => {
        if (response.data.status === 201) {
          window.alert(response.data.message);
          navigate("/adminPage/boardManager");
        }
      });
  }

  return (
    <div>
      <form method="post" className="frm" onSubmit={frmHandler}>
        <table>
          <tbody>
            <input type="hidden" value={boardIdx} />
            <tr>
              <td>게시판 코드</td>
              <td colSpan={3}>
                <input
                  type="text"
                  id="boardCode"
                  className="boardCode"
                  name="boardCode"
                  value={boardCode}
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
                  value={boardReadAllow}
                  onChange={(e) => setBoardReadAllow(e.target.value)}
                >
                  <option value="All">All</option>
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
                  value={boardWriteAllow}
                  onChange={(e) => setBoardWriteAllow(e.target.value)}
                >
                  <option value="All">All</option>
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
                  value={boardCommentAllow}
                  onChange={(e) => setBoardCommentAllow(e.target.value)}
                >
                  <option value="All">All</option>
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
                  value={boardModifyAllow}
                  onChange={(e) => setBoardModifyAllow(e.target.value)}
                >
                  <option value="All">All</option>
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

export default BoardUpdate;
