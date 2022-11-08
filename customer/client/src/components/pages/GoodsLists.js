import axios from "axios";
import React, { useEffect, useState } from "react";

const GoodsLists = () => {
  const [goodslists, setGoodslists] = useState([]);

  async function getGoodsLists() {
    await axios.get("http://localhost:3000/goodsLists").then((response) => {
      setGoodslists(response.data.goodslists);
    });
  }

  useEffect(() => {
    getGoodsLists();
  }, []);

  console.log(goodslists);

  return (
    <div>
      {goodslists.length > 0
        ? goodslists.map((goodslist, key) => {
            return (
              <div key={key}>
                <img src={goodslist.image} alt={goodslist.image} />
                <p>{goodslist.itemname}</p>
                <p>{goodslist.price}</p>
              </div>
            );
          })
        : "No Data"}
    </div>
  );
};

export default GoodsLists;
