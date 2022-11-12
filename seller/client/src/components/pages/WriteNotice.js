import React from "react";
import { Link } from "react-router-dom";
import "../css/pages/WriteNotice.css";

function WriteNotice({ userId }) {
  console.log(userId);
  return (
    <div className="WriteNotice-container">
      <div className="addPost-wrap">
        <div className="header">
          <h1>공지사항 작성</h1>
          <form method="post" action="/board/addPost" autocomplete="off">
            <div className="addPost">
              <div className="title">
                <label>제목</label>
                <input type="text" name="title" placeholder="제목" />
              </div>
              <div className="writer">
                <label>작성자</label>
                <input type="text" name="username" value={userId} readOnly />
              </div>
              <div className="files">
                <label>사진첨부</label>
                <input type="file" name="noticeFile" />
              </div>
              <div className="ta">
                <textarea
                  name="content"
                  type="text"
                  id="content"
                  cols="130"
                  rows="30"
                ></textarea>
              </div>
              <div className="btn-wrap">
                <button className="notice-btn">
                  <Link to="/notice">목록</Link>
                </button>
                <button type="submit" className="notice-btn">
                  <i class="fa-solid fa-pen-to-square"></i>작성
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default WriteNotice;
