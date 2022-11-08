import React, { useState } from "react";
import { Link } from "react-router-dom";
import wetinyWordLogo from "../images/wetiny_wordlogo.png";
import "../css/layout/Navbar.css";

function Navbar() {
  const [search, setSearch] = useState("");
  const onChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <div className="NavbarContainer">
        <div className="NavMenuLeft">
          <Link to="/" className="tomain">
            <img src={wetinyWordLogo} alt={wetinyWordLogo} />
          </Link>
        </div>
        <div className="NavMenuMid">
          <ul>
            <li>
              <Link to="/influencer" className="influencer">
                influencer
              </Link>
            </li>
            <li>
              <Link to="/goods" className="goods">
                goods
              </Link>
            </li>
          </ul>
        </div>

        <div className="NavMenuRight">
          <ul>
            <li>
              <input type="text" value={search} onChange={onChange} />
            </li>
            <li>
              <Link to="/wishList" className="wishList">
                wishList
              </Link>
            </li>
            <li>
              <Link to="/cart" className="cart">
                cart
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
