import axios from "axios";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const GoodsLists = () => {
  const [goodslists, setGoodslists] = useState([]);
  const [startNum, setStartNum] = useState(0);
  const [offsetNum, setOffsetNum] = useState(20);
  const [hasMore, setHasMore] = useState(true);
  const [tmpNum, setTmpNum] = useState(0);

  async function getGoodsLists() {
    await axios
      .get(
        "http://localhost:4001/customer/goodslist?startNum=" +
          startNum +
          "&offsetNum=" +
          offsetNum
      )

      .then((response) => {
        setGoodslists(response.data.goodslists);
        setTmpNum(response.data.startNum);
        setOffsetNum(response.data.offsetNum);
        setHasMore(response.data.moreData);
      });
  }

  useEffect(() => {
    getGoodsLists();
  }, [startNum]);

  const fetchData = () => {
    setStartNum(tmpNum);
  };

  return (
    <div>
      {goodslists.length > 0
        ? goodslists.map((goodslist, key) => {
            return (
              <div key={key}>
                <img src="http://via.placeholder.com/350x350.png" />
                {/* <img src={goodslist.image} alt={goodslist.image} /> */}
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
