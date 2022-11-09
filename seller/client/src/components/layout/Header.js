import React from "react";
import logo from "../images/logo.png";
import { useNavigate, Link } from "react-router-dom";
import "../css/layout/Header.css";
function Header({ user }) {
  return (
    <div className="header-con">
      <div className="image">
        <img src={logo} alt="logo" />
      </div>
      <div className="R-head">
        {!user && (
          <>
            <Link to="/login">로그인</Link>
            <Link to="/regist">회원가입</Link>
          </>
        )}
        {user && (
          <>
            <Link to="/logout">로그아웃</Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
