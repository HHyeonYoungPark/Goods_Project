import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "../css/layout/Navbar.css";
import React from "react";
import "../css/layout/Navbar.css";

function Navbar() {
  return (
    <div className="Nav-container">
      <div className="nav-wrap">
        <div className="Lnav-wrap">
          <div className="make">
            <Link to="/makeItem">상품제작</Link>
          </div>
          <div>
            <Link to="/addItem">상품등록</Link>
          </div>
          <div>
            <Link to="/order">주문현황</Link>
          </div>
          <div>
            <Link to="/notice">공지사항</Link>
          </div>
          <div>
            <Link to="/">둘러보기</Link>
          </div>
        </div>
        <div className="Rnav-wrap">
          <Link to="/help">문의하기</Link>
        </div>
      </div>
    </div>
  );
  }

export default Navbar;
