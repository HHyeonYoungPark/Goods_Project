import React from "react";
import "../css/pages/MyPage.css";
import { Link, Outlet } from "react-router-dom";
import myImg from "../images/notFound.png";

function AdminPage({ userId }) {
  return (
    <div className="mypage-container">
      <div className="mypage-wrap">
        <div className="mypage-sideNav">
          <div className="sideNav-profile">
            <h2>관리자 페이지</h2>
            <img src={myImg} alt={myImg} />
            <div>
              <Link to="/myPage">
                <b>{userId}</b>
              </Link>
              님
            </div>
          </div>
          <div className="sideNav">
            <h4>쇼핑몰 관리</h4>
            <ul>
              <li>
                <Link to="goodsManager">상품 관리</Link>
              </li>
              <li>
                <Link to="">주문 관리</Link>
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
                <Link to="BoardManager">게시판 관리</Link>
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
