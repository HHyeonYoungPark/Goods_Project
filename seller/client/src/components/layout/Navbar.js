import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "../css/layout/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";
import { faCalculator } from "@fortawesome/free-solid-svg-icons";
import { faBullhorn } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <div className="Nav-container">
      <div className="nav-wrap">
        <div className="Lnav-wrap">
          <div className="make">
            <Link to="/makeItem">
              <span>상품제작</span>
              <FontAwesomeIcon icon={faLightbulb} />
            </Link>
          </div>
          <div>
            <Link to="/addItem">
              <span>상품등록</span>
              <FontAwesomeIcon icon={faSquarePlus} />
            </Link>
          </div>
          <div>
            <Link to="/order">
              <span>주문현황</span>
              <FontAwesomeIcon icon={faCalculator} />
            </Link>
          </div>
          <div>
            <Link to="/notice">
              <span>공지사항</span>
              <FontAwesomeIcon icon={faBullhorn} />
            </Link>
          </div>
          <div>
            <Link to="/viewOthers">
              <span>둘러보기</span> <FontAwesomeIcon icon={faEye} />
            </Link>
          </div>
        </div>
        <div className="Rnav-wrap">
          <Link to="/help">
            <span>문의하기</span>

            <FontAwesomeIcon icon={faHeadset} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
