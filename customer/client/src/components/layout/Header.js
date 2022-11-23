import React from "react";
import { Link } from "react-router-dom";
import "../css/layout/Header.css";
import wetinyBizLogo from "../images/WETINYBIZ_LOGO.jpg";

function Header({userId}) {
  
  return (
    <div>
      <div className="HeaderContainer">
        <div className="NavMenuLeft">
          <Link to="/seller" className="toSellerMain">
            <img
              style={{ width: "180px" }}
              src={wetinyBizLogo}
              alt={wetinyBizLogo}
            />
          </Link>
        </div>
        <div className="HeaderMenuRight">
          <ul>
            <li>
              <Link to="/customerHelp" className="customerHelp">
                customerHelp
              </Link>
            </li>
            {!userId &&
              <>
                <li>
                  <Link to="/regist" className="registCustomer">
                    회원가입
                  </Link>
                </li>
                <li>
                  <Link to="/login" className="loginCustomer">
                    로그인
                  </Link>
                </li>
              </>
            }
            {userId &&
              <>
                {/* <li className="loginDropDown">
                  {userId}님
                  <div className="loginDropDownMenu">
                    <Link to="/profile" >Profile</Link>  
                    <Link to="/cart" >Cart</Link>
                    <Link to="/wishList" >WishList</Link>
                  </div>
                </li> */}
                <li>
                  <Link to="/profile" >{userId}님</Link>
                </li>
                <li>
                  <Link to="/logout">로그아웃</Link>
                </li>
              </>
            }
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
