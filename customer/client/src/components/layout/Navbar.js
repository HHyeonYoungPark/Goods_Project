import React, { useState } from "react";
import { Link } from "react-router-dom";
import wetinyLogo from "../images/WETINY_LOGO.jpg";

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
            <img style={{ width: "250px" }} src={wetinyLogo} alt={wetinyLogo} />
          </Link>
        </div>
        <div className="NavMenuMid">
          <ul>
            <li className="influencerDropDown">
              <Link to="/influencerMain" className="influencerMain">
                INFLUENCERS
              </Link>
              <div className="influencerDropDownMenu">
                <Link to="/influencer/youtube" className="influencerYoutube">
                  YOUTUBE
                </Link>
                <Link to="/influencer/twitch" className="influencerTwitch">
                  TWITCH
                </Link>
                <Link to="/influencer/afreeca" className="influencerAfreeca">
                  AFREECA
                </Link>
                <Link to="/influencer/tiktok" className="influencerTiktok">
                  TIKTOK
                </Link>
                <Link
                  to="/influencer/instagram"
                  className="influencerInstagram"
                >
                  INSTAGRAM
                </Link>
              </div>
            </li>
            <li className="goodsDropDown">
              <Link to="/goodsMain" className="goods">
                GOODS
              </Link>
              <div className="goodsDropDownMenu">
                <Link to="/goods/fashion" className="goodsFashion">
                  FASHION
                </Link>
                <Link to="/goods/electronics" className="goodsElectronics">
                  ELECTRONICS
                </Link>
                <Link to="/goods/living" className="goodsLiving">
                  LIVING
                </Link>
                <Link to="/goods/etc." className="goodsEtc.">
                  ETC.
                </Link>
              </div>
            </li>
            <li>
              <Link to="/newnhot" className="newnhot">
                NEW & HOT
              </Link>
            </li>
            <li>
              <Link to="/limitednspecial" className="limitednspecial">
                LIMITED & SPECIAL
              </Link>
            </li>
            <li>
              <Link to="/clearance" className="clearance">
                CLEARANCE
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
