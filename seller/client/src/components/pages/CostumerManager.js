import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/pages/UserManager.css";

function CostumerManager() {
  const navigate = useNavigate();
  function onClick() {
    navigate(-1);
  }

  return (
    <div className="userManager-container">
      <div class="table-List">
        <h1>고객 회원관리</h1>
        <div class="table-List-top">
          <div class="top-left">
            <Link onClick={onClick}>판매자 회원관리</Link>
          </div>
          <div class="top-right">
            <div class="search-wrap">
              <form method="get" action="/member/userSearch" id="frm">
                <div class="search">
                  <select
                    id="selSearch"
                    class="sel"
                    name="selSearch"
                    onchange="selSearch()"
                  >
                    <option value="">선택하세요</option>
                    <option value="username">이름</option>
                    <option value="email">이메일</option>
                    <option value="regdate">가입일</option>
                  </select>
                  <input
                    type="text"
                    name="search"
                    id="search"
                    class="search"
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
              <td>아이디</td>
              <td>이름</td>
              <td>이메일</td>
              <td>등급</td>
              <td>가입일</td>
              <td>비고</td>
            </tr>
            <tr>
              <td></td>
              <td>
                <a href="/member/userView/<%= result[i].idx %>"></a>
              </td>
              <td>
                <a href="/member/userView/<%= result[i].idx %>"></a>
              </td>
              <td></td>
              <td>
                <select
                  class="gradeSel"
                  onchange=" grade(this.value, '<%= result[i].idx %>');"
                >
                  <option value="최고관리자">최고관리자</option>
                  <option value="매니저">매니저</option>
                  <option value="일반">일반</option>
                </select>
              </td>
              <td></td>
              <td>
                <a href="/member/upUser/<%= result[i].idx %>">
                  <button type="submit" class="upDelBtn">
                    <i class="fa-solid fa-pen-to-square"></i>수정
                  </button>
                </a>
                <a
                  href="/member/delUser/<%= result[i].idx %>"
                  onclick="return confirm('회원을 삭제하시겠습니까?');"
                >
                  <button type="submit" class="upDelBtn">
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

export default CostumerManager;
