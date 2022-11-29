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
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import {faThumbsUp} from "@fortawesome/free-solid-svg-icons";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import {faList} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <div className="Nav-container">
      <div className="nav-wrap">
        <div className="Lnav-wrap">
          <div className="make">
            <Link to="/tableGallary">
              <span>전체상품</span>
              <FontAwesomeIcon icon={faList} />
            </Link>
          </div>
          <div>
            <Link to="/">
              <span>신상품</span>
              <FontAwesomeIcon icon={faStar} />
            </Link>
          </div>
          <div>
            <Link to="/">
              <span>베스트</span>
              <FontAwesomeIcon icon={faThumbsUp} />
            </Link>
          </div>
          <div>
            <Link to="/cart">
              <span>장바구니</span> <FontAwesomeIcon icon={faCartShopping} />
            </Link>
          </div>
          <div>
            <Link to="/notice">
              <span>공지사항</span>
              <FontAwesomeIcon icon={faBullhorn} />
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
