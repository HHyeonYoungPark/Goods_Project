import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../css/pages/WriteNotice.css";

function WriteNotice({ userId }) {
  return (
    <div className="WriteNotice-container">
      <div className="addPost-wrap">
        <div className="header">
          <h1>공지사항 작성</h1>
          <form method="post" action="/writeNotice" autocomplete="off">
            <div className="addPost">
              <div className="title">
                <label>제목</label>
                <input type="text" name="noticeTitle" />
              </div>
              <div className="writer">
                <label>작성자</label>
                <input
                  type="text"
                  name="noticeWriter"
                  value={userId}
                  readOnly
                />
              </div>
              <div className="files">
                <label>사진첨부</label>
                <input type="file" name="noticeFile" />
              </div>
              <div className="ta">
                <textarea
                  name="noticeContent"
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
                <button type="submit" className="notice-btn" on>
                  작성
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
