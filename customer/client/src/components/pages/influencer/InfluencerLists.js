import React, { useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import "../../css/pages/influencer/InfluencerLists.css";

function InfluencerLists() {
  const [genre, setGenre] = useState("");

  return (
    <div>
      <h1>Genre</h1>
      <div className="ifrncListHeader">
        <ul className="platformList">
          <li>
            {/* <button onClick={() => setGenre("game")} className="BtnGame">
              Game
            </button> */}
            <Link to="goodsLists" className="goodsList">
              Game
            </Link>
          </li>
          <li>
            {/* <button onClick={() => setGenre("music")} className="BtnMusic">
              Music
            </button> */}
            <Link to="goodsLists" className="goodsList">
              Music
            </Link>
          </li>
          <li>
            {/* <button onClick={() => setGenre("sports")} className="BtnSports">
              Sports
            </button> */}
            <Link to="goodsLists" className="goodsList">
              Sports
            </Link>
          </li>
          <li>
            {/* <button onClick={() => setGenre("food")} className="BtnFood">
              Food
            </button> */}
            <Link to="goodsLists" className="goodsList">
              Food
            </Link>
          </li>
          <li>
            {/* <button
              onClick={() => setGenre("business")}
              className="BtnBusiness"
            >
              Business
            </button> */}
            <Link to="goodsLists" className="goodsList">
              Business
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

export default InfluencerLists;
