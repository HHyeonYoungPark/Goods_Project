import React from "react";
import { Link } from "react-router-dom";
import footerLogo from "../images/footerLogo.png";
import "../css/layout/Footer.css";

function Footer() {
  return (
    <footer className="footer-wrap">
      <div className="footer-left">
        <h1>
          <Link to="/" className="logo">
            WE'TINY
          </Link>
        </h1>
      </div>
      <div className="footer-center">
        <div className="coryright-info">
          <Link>이용약관</Link>
          <Link>개인정보취급방침</Link>
          <Link>이메일무단수집거부</Link>
          <Link>사이트맵</Link>
        </div>
        <div className="coryright-addr">
          <p>(18356) 부산광역시 해운대구 본사 [전화] 055-222-2222,</p>
          <p>고객만족센터 [전화] 055-222-4581,</p>
          <p>비지니스문의 [전화] 055-222-4582</p>
          <p style={{ color: "#a7a2a4" }}>
            Copyright(c) 2018 The province of WE'TINY. All rights reserved.
          </p>
        </div>
      </div>
      <div className="footer-right">
        <img src={footerLogo} alt={footerLogo} />
      </div>
    </footer>
  );
}

export default Footer;
