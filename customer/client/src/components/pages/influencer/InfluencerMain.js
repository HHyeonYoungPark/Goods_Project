import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../../css/pages/influencer/InfluencerMain.css";

function InfluencerMain() {
  return (
    <div>
      <h1>InfluencerMain</h1>
      <div className="ifrncMainHeader">
        <ul className="platformList">
          <li>
            <Link to="influencerLists" className="influencerList">
              YOUTUBE
            </Link>
          </li>
          <li>
            <Link to="influencerLists" className="influencerList">
              TWITCH
            </Link>
          </li>
          <li>
            <Link to="influencerLists" className="influencerList">
              AFREECA
            </Link>
          </li>
          <li>
            <Link to="influencerLists" className="influencerList">
              INSTAGRAM
            </Link>
          </li>
          <li>
            <Link to="influencerLists" className="influencerList">
              TIKTOK
            </Link>
          </li>
        </ul>
      </div>
      <section>
        <Outlet />
      </section>
    </div>
  );
}

export default InfluencerMain;
