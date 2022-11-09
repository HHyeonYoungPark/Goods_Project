import React from "react";
import "../css/layout/Navbar.css";

function Navbar() {
  return (
    <div className="container">
      <div className="semi-con">
        <div className="L-nav">
          <div>굿즈제작</div>
          <div>상품등록</div>
          <div>판매현황</div>
        </div>
        <div className="R-nav">
          <div>고객센터</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
