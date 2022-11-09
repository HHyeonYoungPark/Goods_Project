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
            <li className="influencerDropDown">
              <Link to="/influencer" className="influencer">
                INFLUENCERS
              </Link>
              <div className="influencerDropDownMenu">
                <Link to="/influencerYoutube" className="influencerYoutube">
                  YOUTUBE
                </Link>
                <Link to="/influencerTwitch" className="influencerTwitch">
                  TWITCH
                </Link>
                <Link to="/influencerAfreeca" className="influencerAfreeca">
                  AFREECA
                </Link>
                <Link to="/influencerTiktok" className="influencerTiktok">
                  TIKTOK
                </Link>
                <Link to="/influencerInstagram" className="influencerInstagram">
                  INSTAGRAM
                </Link>
              </div>
            </li>
            <li className="goodsDropDown">
              <Link to="/goodsList" className="goods">
                GOODS
              </Link>
              <div className="goodsDropDownMenu">
                <Link to="/goodsFashion" className="registCustomer">
                  FASHION
                </Link>
                <Link to="/goodsElectronics" className="goodsElectronics">
                  ELECTRONICS
                </Link>
                <Link to="/goodsLiving" className="goodsLiving">
                  LIVING
                </Link>
                <Link to="/goodsEtc." className="goodsEtc.">
                  ETC.
                </Link>
              </div>
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
