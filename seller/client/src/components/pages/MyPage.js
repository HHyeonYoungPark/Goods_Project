import React from "react";

function MyPage() {
  return (
    <div className="mypage-container">
      <div className="mypage-wrap">
        <div className="mypage-sideNav">
          <div className="sideNav-profile">
            <img src="" alt="" />
            <h4>판매자이름</h4>
            <span>셀러 님</span>
          </div>
          <div className="sideNav-history">
            <h4>나의 판매 내역</h4>
            <ul>
              <li>판매상품 관리</li>
              <li>판매/배송조회</li>
              <li>취소/반품/교환 현황</li>
              <li>환불/입금내역</li>
            </ul>
          </div>
          <div className="sideNav-Q&A">
            <h4>나의 쇼핑 지식</h4>
            <ul>
              <li>판매자 Q&A</li>
              <li>상품리뷰 관리</li>
              <li>메일 상담내역</li>
              <li>채팅 상담내역</li>
            </ul>
          </div>
          <div className="sideNav-userInfo">
            <h4>나의 회원정보</h4>
            <ul>
              <li>회원정보 변경/탈퇴</li>
              <li>회원 전환</li>
              <li>로그인 관리</li>
              <li>개인정보 이용내역</li>
            </ul>
          </div>
        </div>
        <div className="mypage-content"></div>
      </div>
    </div>
  );
}

export default MyPage;
