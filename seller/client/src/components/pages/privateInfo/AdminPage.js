import React from "react";
import "../../css/pages/AdminPage.css";
import { Link, Outlet } from "react-router-dom";
import WTBZLogo from "../../images/WETINYBIZ_LOGO.jpg";

function AdminPage({ userId }) {
  return (
    <div className="adminContainer">
      <div className="mypage-wrap">
        <div className="mypage-sideNav">
          <img className="wtbzLogo" src={WTBZLogo} alt={WTBZLogo} />
          <div className="sideNav-profile">
            <h2>관리자 페이지</h2>
            <div>
              <Link to="/myPage">
                <b>{userId}</b>
              </Link>
              님<br />
              <Link to="/logout">로그아웃</Link>
            </div>
          </div>
          <div className="sideNav">
            <h4>쇼핑몰 관리</h4>
            <ul>
              <li>
                <Link to="goodsManager">상품 관리</Link>
              </li>
              <li>
                <Link to="order">주문 관리</Link>
              </li>
              <li>
                <Link to="">이벤트 관리</Link>
              </li>
              <li>
                <Link to="">배너 관리</Link>
              </li>
            </ul>
          </div>
          <div className="sideNav">
            <h4>회원 관리</h4>
            <ul>
              <li>
                <Link to="userManager">회원정보 관리</Link>
              </li>
              <li>
                <Link to="">메일 발송</Link>
              </li>
              <li>
                <Link to="">접속자 집계</Link>
              </li>
              <li>
                <Link to="">포인트 관리</Link>
              </li>
            </ul>
          </div>
          <div className="sideNav">
            <h4>게시판 관리</h4>
            <ul>
              <li>
                <Link to="boardManager">게시판 관리</Link>
              </li>
              <li>
                <Link to="noticeManager">공지사항 관리</Link>
              </li>
              <li>
                <Link to="askManager">Q&A 관리</Link>
              </li>
              <li>
                <Link to="">인기검색어 관리</Link>
              </li>
              <li>
                <Link to="">내용 관리</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mypage-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
