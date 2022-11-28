import React, { useState } from "react";
import { Link } from "react-router-dom";
import wetinyLogo from "../images/WETINY_LOGO.jpg";

import "../css/layout/Navbar.css";
import axios from "axios";

function Navbar() {
  const [channels, setChannels] = useState([]);
  const [genre, setGenre] = useState([]);
  const [category, setCategory] = useState([]);
  const [category2, setCategory2] = useState([]);
  const [search, setSearch] = useState("");
  const onChange = (e) => {
    setSearch(e.target.value);
  };
  
  const getNavbar = async() => {
    await axios.get("http://localhost:4001/customer/navbar").then((res) => {
      setChannels(res.data.channel);
      setGenre(res.data.channelSub);
      setCategory(res.data.category);
      setCategory2(res.data.categorySub);
    });
  }

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
                {
                  channels.map((c, key) => {
                    return(
                      <ul>
                        <Link to={"/influencer/"+c.channelPlatform} className="influencerYoutube">
                          {c.channelPlatform}
                        </Link>
                        {
                          genre.map((g, key) => {
                            return(
                              <li>
                                <Link to="goodsLists" className="goodsList">
                                  {g.channelGenre}
                                </Link>
                              </li>
                            )
                          })
                        }
                        
                      </ul>
                    )
                  })
                }
                {/* <ul>
                  <Link to="/influencer/youtube" className="influencerYoutube">
                    YOUTUBE
                  </Link>
                  <li>
                    <Link to="goodsLists" className="goodsList">
                      Game
                    </Link>
                  </li>
                  <li>
                    <Link to="goodsLists" className="goodsList">
                      Sports
                    </Link>
                  </li>
                  <li>
                    <Link to="goodsLists" className="goodsList">
                      Music
                    </Link>
                  </li>
                  <li>
                    <Link to="goodsLists" className="goodsList">
                      Travel
                    </Link>
                  </li>
                  <li>
                    <Link to="goodsLists" className="goodsList">
                      Foods
                    </Link>
                  </li>
                  <li>
                    <Link to="goodsLists" className="goodsList">
                      Others
                    </Link>
                  </li>
                </ul>
                
                <ul>
                  <Link to="/influencer/twitch" className="influencerTwitch">
                    TWITCH
                  </Link>
                  <li>
                    <Link to="goodsLists" className="goodsList">
                      Game
                    </Link>
                  </li>
                  <li>
                    <Link to="goodsLists" className="goodsList">
                      Sports
                    </Link>
                  </li>
                  <li>
                    <Link to="goodsLists" className="goodsList">
                      Music
                    </Link>
                  </li>
                  <li>
                    <Link to="goodsLists" className="goodsList">
                      Travel
                    </Link>
                  </li>
                  <li>
                    <Link to="goodsLists" className="goodsList">
                      Foods
                    </Link>
                  </li>
                  <li>
                    <Link to="goodsLists" className="goodsList">
                      Others
                    </Link>
                  </li>
                </ul>

                <ul>
                  <Link to="/influencer/afreeca" className="influencerAfreeca">
                    AFREECA
                  </Link>
                  <li>
                    <Link to="goodsLists" className="goodsList">
                      Game
                    </Link>
                  </li>
                  <li>
                    <Link to="goodsLists" className="goodsList">
                      Sports
                    </Link>
                  </li>
                  <li>
                    <Link to="goodsLists" className="goodsList">
                      Music
                    </Link>
                  </li>
                  <li>
                    <Link to="goodsLists" className="goodsList">
                      Travel
                    </Link>
                  </li>
                  <li>
                    <Link to="goodsLists" className="goodsList">
                      Foods
                    </Link>
                  </li>
                  <li>
                    <Link to="goodsLists" className="goodsList">
                      Others
                    </Link>
                  </li>
                </ul>
                
                <ul>
                  <Link to="/influencer/tiktok" className="influencerTiktok">
                    TIKTOK
                  </Link>
                  <li>
                    <Link to="goodsLists" className="goodsList">
                      Game
                    </Link>
                  </li>
                  <li>
                    <Link to="goodsLists" className="goodsList">
                      Sports
                    </Link>
                  </li>
                  <li>
                    <Link to="goodsLists" className="goodsList">
                      Music
                    </Link>
                  </li>
                  <li>
                    <Link to="goodsLists" className="goodsList">
                      Travel
                    </Link>
                  </li>
                  <li>
                    <Link to="goodsLists" className="goodsList">
                      Foods
                    </Link>
                  </li>
                  <li>
                    <Link to="goodsLists" className="goodsList">
                      Others
                    </Link>
                  </li>
                </ul>
                
                <ul>
                  <Link
                    to="/influencer/instagram"
                    className="influencerInstagram"
                  >
                    INSTAGRAM
                  </Link>
                  <li>
                    <Link to="goodsLists" className="goodsList">
                      Game
                    </Link>
                  </li>
                  <li>
                    <Link to="goodsLists" className="goodsList">
                      Sports
                    </Link>
                  </li>
                  <li>
                    <Link to="goodsLists" className="goodsList">
                      Music
                    </Link>
                  </li>
                  <li>
                    <Link to="goodsLists" className="goodsList">
                      Travel
                    </Link>
                  </li>
                  <li>
                    <Link to="goodsLists" className="goodsList">
                      Foods
                    </Link>
                  </li>
                  <li>
                    <Link to="goodsLists" className="goodsList">
                      Others
                    </Link>
                  </li>
                </ul> */}
                
              </div>
            </li>
            
            <li className="goodsDropDown">
              <Link to="/goodsMain" className="goods">
                GOODS
              </Link>
              <div className="goodsDropDownMenu">
                {
                  category.map((cate, key) => {
                    return(
                      <ul key={key}>
                        <Link to={"/goods/"+cate.category1} className={cate.category1}>
                          {cate.category1}
                        </Link>
                        {
                          category2.map((cate2, key) => {
                            return(
                              <li>
                                <Link to="goodsLists" className="goodsList">
                                  {g.channelGenre}
                                </Link>
                              </li>
                            )
                          })
                        }
                        
                      </ul>
                    )
                  })
                }
                <ul>
                  <Link to="/goods/fashion" className="goodsFashion">
                    FASHION
                  </Link>
                  <li>
                    <Link to="goodsLists" className="goodsList">
                      Top / T-shirt
                    </Link>
                  </li>
                  <li>
                    <Link to="goodsLists" className="goodsList">
                      Pants
                    </Link>
                  </li>
                  <li>
                    <Link to="goodsLists" className="goodsList">
                      Hoodie
                    </Link>
                  </li>
                  <li>
                    <Link to="goodsLists" className="goodsList">
                      Outerwear
                    </Link>
                  </li>
                  <li>
                    <Link to="goodsLists" className="goodsList">
                      Shoes
                    </Link>
                  </li>
                  <li>
                    <Link to="goodsLists" className="goodsList">
                      Bag
                    </Link>
                  </li>
                </ul>
                
                <ul>
                  <Link to="/goods/electronics" className="goodsElectronics">
                    ELECTRONICS
                  </Link>
                  <li>
                    <Link to="goodsLists" className="goodsList">
                      Keyboard
                    </Link>
                  </li>
                  <li>
                    <Link to="goodsLists" className="goodsList">
                      Monitor
                    </Link>
                  </li>
                  <li>
                    <Link to="goodsLists" className="goodsList">
                      Mouse
                    </Link>
                  </li>
                  <li>
                    <Link to="goodsLists" className="goodsList">
                      Speaker
                    </Link>
                  </li>
                  <li>
                    <Link to="goodsLists" className="goodsList">
                      Earphone
                    </Link>
                  </li>
                </ul>
                
                <ul>
                  <Link to="/goods/living" className="goodsLiving">
                    LIVING
                  </Link>
                  <li>
                    <Link to="goodsLists" className="goodsList">
                      Table / Chair
                    </Link>
                  </li>
                  <li>
                    <Link to="goodsLists" className="goodsList">
                      Sofa
                    </Link>
                  </li>
                  <li>
                    <Link to="goodsLists" className="goodsList">
                      Desk / Bookshelf
                    </Link>
                  </li>
                  <li>
                    <Link to="goodsLists" className="goodsList">
                      Bed
                    </Link>
                  </li>
                  <li>
                    <Link to="goodsLists" className="goodsList">
                      Lamp
                    </Link>
                  </li>
                </ul>
                
                <ul>
                  <Link to="/goods/stationery" className="goodsLiving">
                    STATIONERY
                  </Link>
                  <li>
                    <Link to="goodsLists" className="goodsList">
                      Note
                    </Link>
                  </li>
                  <li>
                    <Link to="goodsLists" className="goodsList">
                      Pen
                    </Link>
                  </li>
                  <li>
                    <Link to="goodsLists" className="goodsList">
                      Diary
                    </Link>
                  </li>
                  <li>
                    <Link to="goodsLists" className="goodsList">
                      Sticker
                    </Link>
                  </li>
                  <li>
                    <Link to="goodsLists" className="goodsList">
                      Stamp
                    </Link>
                  </li>
                  <li>
                    <Link to="goodsLists" className="goodsList">
                      Others
                    </Link>
                  </li>
                </ul>

                <ul>
                  <Link to="/goods/Accessory" className="goodsAccessory">
                    ACCESSORY
                  </Link>
                  <li>
                    <Link to="goodsLists" className="goodsList">
                      Ring
                    </Link>
                  </li>
                  <li>
                    <Link to="goodsLists" className="goodsList">
                      Necklace
                    </Link>
                  </li>
                  <li>
                    <Link to="goodsLists" className="goodsList">
                      PhoneCase
                    </Link>
                  </li>
                  <li>
                    <Link to="goodsLists" className="goodsList">
                      Keyring
                    </Link>
                  </li>
                  <li>
                    <Link to="goodsLists" className="goodsList">
                      Others
                    </Link>
                  </li>
                </ul>
                
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

