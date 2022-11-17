import React from "react";
import { Link } from "react-router-dom";

function GoodsManager() {
  return (
    <div className="goodsManager-container">
      <div className="table-List">
        <h1>상품 관리</h1>
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
              <form action="/board/postSearch" method="get" id="frm">
                <div className="search">
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
            <tr>
              <td>번호</td>
              <td>제목</td>
              <td>작성자</td>
              <td>등록일</td>
              <td>비고</td>
            </tr>

            <tr>
              <td></td>
              <td className="title">
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

export default GoodsManager;
