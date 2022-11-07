import React from "react";
import { Link } from "react-router-dom";
import wetinyMain1 from "../images/wetinyMain.jpg";
import wetinyMain2 from "../images/wetiny_banner4.jpg";
import wetinyMain3 from "../images/wetiny_banner5.jpg";
import wetinyMain4 from "../images/wetiny_banner6.jpg";
import "../css/pages/Main.css";

function Main() {
    return (
        <div>
            <div className="container">
                <Link to="/" className="tomain">
                    <img src={wetinyMain1} alt={wetinyMain1} />
                </Link>
                <Link to="/" className="tomain">
                    <img src={wetinyMain4} alt={wetinyMain4} />
                </Link>
                <Link to="/" className="tomain">
                    <img src={wetinyMain3} alt={wetinyMain3} />
                </Link>
                <Link to="/" className="tomain">
                    <img src={wetinyMain2} alt={wetinyMain2} />
                </Link>
            </div>
        </div>
    );
}

export default Main;
