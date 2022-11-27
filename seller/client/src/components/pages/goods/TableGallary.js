import React from "react";
import "../../css/pages/TableGallary.css";
import { useNavigate, Link, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function TableGallary() {
  const [items, setItems] = useState([]);

  async function getAllItem() {
    await axios.get("http://localhost:4001/goodsManager").then((response) => {
      setItems(response.data);
    });
  }

  useEffect(() => {
    getAllItem();
  }, []);

  return (
    <div className="TableGallary-container">
      {items.map((item, key) => {
        return (
          <div className="TableGallary" key={key}>
            <Link to={`/detail/${item.idx}`}>
              <img
                style={{ width: "100%" }}
                src={`http://localhost:4001/${item.attach}`}
                alt={item.attach}
              />
            </Link>
            <h4>
              <Link to={`/detail/${item.idx}`}>{item.itemname}</Link>
            </h4>
            <p className="price">
              <Link to="#">
                {parseInt(item.price)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                원
              </Link>
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default TableGallary;
