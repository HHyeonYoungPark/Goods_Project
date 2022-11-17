import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../css/pages/UserManager.css";

function CostumerManager() {
  const navigate = useNavigate();
  function onClick() {
    navigate(-1);
  }

  return (
    <div className="userManager-container">
      <div className="table-List">
        <h1>고객 회원관리</h1>
        <div className="table-List-top">
          <div className="top-left"></div>
          <div className="top-right">
            <div className="search-wrap">
              <form method="get" action="/member/userSearch" id="frm">
                <div class="search">
                  <select
                    id="selSearch"
                    className="sel"
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
                    className="search"
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
                  className="gradeSel"
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
                  <button type="submit" className="upDelBtn">
                    <i class="fa-solid fa-pen-to-square"></i>수정
                  </button>
                </a>
                <a
                  href="/member/delUser/<%= result[i].idx %>"
                  onclick="return confirm('회원을 삭제하시겠습니까?');"
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

export default CostumerManager;
