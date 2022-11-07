import React, { useState } from "react";
import { Link } from "react-router-dom";
import wetinyWordLogo from "../images/wetiny_wordlogo.png";

function Navbar() {
    const [search, setSearch] = useState("");
    const onChange = (e) => {
        setSearch(e.target.value);
    };

    return (
        <div>
            <div className="container">
                <div className="NavMenuLeft">
                    <Link to="/" className="tomain">
                        <img src={wetinyWordLogo} alt={wetinyWordLogo} />
                    </Link>
                    <Link to="/influencer" className="influencer">
                        influencer
                    </Link>
                    <Link to="/goods" className="goods">
                        goods
                    </Link>
                </div>
                <div className="NavMenuRight">
                    <input type="text" value={search} onChange={onChange} />
                    <Link to="/wishList" className="wishList">
                        wishList
                    </Link>
                    <Link to="/shoppingBag" className="shoppingBag">
                        shoppingBag
                    </Link>
                    <Link to="/profile" className="profile">
                        profile
                    </Link>
                    <Link to="/toggle" className="toggle">
                        toggle
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
