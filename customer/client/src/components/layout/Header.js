import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/layout/Header.css";

function Header() {
  const [search, setSearch] = useState("");
  const onChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <div className="HeaderContainer">
        <div className="NavMenuLeft">
          <Link to="/seller" className="toSellerMain">
            WE'TINY Business
          </Link>
        </div>
        <div className="HeaderMenuRight">
          <ul>
            <li>
              <Link to="/customerHelp" className="customerHelp">
                customerHelp
              </Link>
            </li>
            <li>
              <Link to="/profile" className="profile">
                profile
              </Link>
            </li>
            <div className="loginDropDown">
              <Link to="/toggle" className="toggle">
                toggle
              </Link>
              <div className="loginDropDownMenu">
                <Link to="/registCustomer" className="registCustomer">
                  회원가입
                </Link>
                <Link to="/loginCustomer" className="loginCustomer">
                  로그인
                </Link>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
