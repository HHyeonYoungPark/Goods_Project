import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import InfiniteScroll from "react-infinite-scroll-component";
import "../../css/pages/goods/GoodsList.css"

const GoodsLists = () => {
  const [goodslists, setGoodslists] = useState([]);
  const [startNum, setStartNum] = useState(0);
  const [offsetNum, setOffsetNum] = useState(20);
  const [hasMore, setHasMore] = useState(true);
  const [tmpNum, setTmpNum] = useState(0);

  async function getGoodsLists() {
    await axios
      .get(
        "http://localhost:4001/customer/goodslists?startNum=" +
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
    <div className="GoodsLists-container">
      
        <InfiniteScroll
          dataLength={goodslists.length}
          next={fetchData}
          hasMore={hasMore}
          endMessage={<h3>No More Data</h3>}
          loader={<h1>Loading...</h1>}
        >
          
          {goodslists.length > 0
            ? goodslists.map((goodslist, key) => {
                return (
                  <div className="GoodsLists" key={key}>
                    {/* <img src="http://via.placeholder.com/350x350.png" />
                    <img src={goodslist.image} alt={goodslist.image} />
                    <p>{goodslist.itemname}</p>
                    <p>{goodslist.price}</p> */}
                    <Link to={`/goodsDetail/${goodslist.idx}`}>
                      <img
                        style={{ width: "100%" }}
                        src={`http://localhost:4001/${goodslist.attach}`}
                        alt={goodslist.attach}
                      />
                    </Link>
                    <h4>
                      <Link to={`/goodsDetail/${goodslist.idx}`}>{goodslist.itemname}</Link>
                    </h4>
                    <p className="price">{goodslist.price}</p>
                  </div>
                );
              })
            : "No Data"}

        </InfiniteScroll>
    </div>
  );
};

export default GoodsLists;
