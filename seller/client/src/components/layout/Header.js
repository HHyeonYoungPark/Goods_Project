import React from "react";
import logo from "../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, Link } from "react-router-dom";
import "../css/layout/Header.css";
function Header({ token, userId }) {
  return (
    <div className="header-con">
      <div className="image">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="search-bar">
        <input type="text" className="search-bar__input" />
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>
      <div className="R-head">
        {!token && (
          <>
            <Link to="/login">
              <span>로그인</span>
              <FontAwesomeIcon icon={faArrowRightToBracket} />
            </Link>
            <Link to="/regist">
              <span>회원가입</span>
              <FontAwesomeIcon icon={faUserPlus} />
            </Link>
          </>
        )}
        {token && (
          <>
            <Link to="/myPage">{userId}님</Link>
            <Link to="/logout">로그아웃</Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
