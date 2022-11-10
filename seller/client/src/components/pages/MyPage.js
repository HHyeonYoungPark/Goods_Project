import React from "react";
import "../css/pages/MyPage.css";
import { Link, Outlet } from "react-router-dom";
import myImg from "../images/notFound.png";

function MyPage({ userId }) {
  return (
    <div className="mypage-container">
      <div className="mypage-wrap">
        <div className="mypage-sideNav">
          <div className="sideNav-profile">
            <h2>마이페이지</h2>
            <img src={myImg} alt={myImg} />
            <div>
              <Link to="/mypage">
                <b>{userId}</b>
              </Link>
              셀러 님
            </div>
          </div>
          <div className="sideNav">
            <h4>나의 판매 내역</h4>
            <ul>
              <li>
                <Link to="sellHistory">판매상품 관리</Link>
              </li>
              <li>
                <Link to="">판매/배송조회</Link>
              </li>
              <li>
                <Link to="">취소/반품/교환 현황</Link>
              </li>
              <li>
                <Link to="">환불/입금내역</Link>
              </li>
            </ul>
          </div>
          <div className="sideNav">
            <h4>나의 쇼핑 지식</h4>
            <ul>
              <li>
                <Link to="myAsk">문의 내역</Link>
              </li>
              <li>
                <Link to="">상품리뷰 관리</Link>
              </li>
              <li>
                <Link to="">메일 상담내역</Link>
              </li>
              <li>
                <Link to="">채팅 상담내역</Link>
              </li>
            </ul>
          </div>
          <div className="sideNav">
            <h4>나의 회원정보</h4>
            <ul>
              <li>
                <Link to="userInfo">회원정보 변경/탈퇴</Link>
              </li>
              <li>
                <Link to="">회원 전환</Link>
              </li>
              <li>
                <Link to="">로그인 관리</Link>
              </li>
              <li>
                <Link to="">개인정보 이용내역</Link>
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

export default MyPage;
