import React from "react";
import "../css/pages/Notice.css";

function NoticeManager() {
  return (
    <div class="noticeManager-container">
      <div class="table-List">
        <h1>공지사항 관리</h1>
        <div class="table-List-top">
          <div class="top-left">
            <a href="/board/addPost">
              <button type="submit" class="addBtn">
                <i class="fa-solid fa-pen-to-square"></i>글쓰기
              </button>
            </a>
          </div>
          <div class="top-right">
            <div class="search-wrap">
              <form action="/board/postSearch" method="get" id="frm">
                <div class="search">
                  <select
                    id="sel"
                    class="sel"
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
                  <input type="submit" value="검색" class="searchBtn" />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="tbl-wrap">
          <table>
            <tr>
              <td>번호</td>
              <td>제목</td>
              <td>작성자</td>
              <td>등록일</td>
              <td>비고</td>
            </tr>

            <tr>
              <td></td>
              <td class="title">
                <a href=""></a>
              </td>
              <td></td>
              <td></td>
              <td>
                <a href="">
                  <button type="submit" className="upDelBtn">
                    <i class="fa-solid fa-pen-to-square"></i>수정
                  </button>
                </a>
                <a
                  href=""
                  onclick="return confirm('게시글을 삭제하시겠습니까?');"
                >
                  <button type="submit" className="upDelBtn">
                    <i class="fa-solid fa-trash-can"></i>삭제
                  </button>
                </a>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default NoticeManager;
