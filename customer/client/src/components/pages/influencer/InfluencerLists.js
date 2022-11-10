import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../../css/pages/influencer/InfluencerLists.css";

function InfluencerLists() {
  const [genre, setGenre] = useState("");

  return (
    <div>
      <h1>Genre</h1>
      <div className="ifrncListHeader">
        <ul className="platformList">
          <li>
            <button onClick={() => setGenre("game")} className="BtnGame">
              Game
            </button>
          </li>
          <li>
            <button onClick={() => setGenre("music")} className="BtnMusic">
              Music
            </button>
          </li>
          <li>
            <button onClick={() => setGenre("sports")} className="BtnSports">
              Sports
            </button>
          </li>
          <li>
            <button onClick={() => setGenre("food")} className="BtnFood">
              Food
            </button>
          </li>
          <li>
            <button
              onClick={() => setGenre("business")}
              className="BtnBusiness"
            >
              Business
            </button>
          </li>
        </ul>
      </div>
      <h1>{genre}</h1>
    </div>
  );
}

export default InfluencerLists;
