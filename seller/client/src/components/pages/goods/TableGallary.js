import React from "react";
import "../../css/pages/TableGallary.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function TableGallary() {
  const [items, setItems] = useState([]);

  async function getAllItem() {
    await axios.get("http://localhost:4001/main").then((response) => {
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
          <div className="TableGallary">
            <Link to="#">
              <img
                style={{ width: "100%" }}
                src={item.attach}
                alt={item.attach}
              />
            </Link>
            <h4>
              <Link to="#">{item.itemname}</Link>
            </h4>
            <p className="price">
              <Link to="#">{item.price}</Link>
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default TableGallary;
