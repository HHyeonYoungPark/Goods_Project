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
          <p>
            (51154) 경상남도 창원시 의창구 중앙대로 300(사림동) 경남도청
            관광진흥과 [전화] 055-211-7760,
          </p>
          <p>가야문화유산과 [전화] 055-211-4581,</p>
          <p>건축주택과 [전화] 055-211-4311</p>
          <p style={{ color: "#a7a2a4" }}>
            Copyright(c) 2018 The province of gyeongsangnam-do. All rights
            reserved.
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
