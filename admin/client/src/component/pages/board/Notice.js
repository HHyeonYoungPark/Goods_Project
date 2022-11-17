import React from "react";
import { Link } from "react-router-dom";
import "../../css/pages/Notice.css";

function Notice() {
  return (
    <div className="notice-container">
      <div className="table-wrap">
        <div className="table-List">
          <h1>공지사항</h1>
          <div className="table-List-top">
            <div className="top-left">
              <Link to="/writeNotice">
                <button type="submit" class="addBtn">
                  <i class="fa-solid fa-pen-to-square"></i>글쓰기
                </button>
              </Link>
            </div>
            <div className="top-right">
              <div className="search-wrap">
                <form method="get" id="frm">
                  <div class="search">
                    <select
                      id="sel"
                      className="sel"
                      name="selSearch2"
                      onchange="selSearch2()"
                    >
                      <option value="">선택하세요</option>
                      <option value="title">제목</option>
                      <option value="username">작성자</option>
                      <option value="content">내용</option>
                      <option value="regdate">등록일</option>
                    </select>
                    <input
                      type="text"
                      id="search"
                      class="search"
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
              <tr>
                <td>번호</td>
                <td>제목</td>
                <td>작성자</td>
                <td>조회</td>
                <td>등록일</td>
              </tr>
              <tr>
                <td>7</td>
                <td className="title">
                  <a href="">지금 이게 뭐하는거임...? </a>
                </td>
                <td>박현영</td>
                <td>1</td>
                <td>2022-11-12</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notice;
