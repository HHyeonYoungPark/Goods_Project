import React from "react";
import Paging from "../../function/Paging";
import "../../css/pages/TableGallary.css";
import { useNavigate, Link, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function TableGallary() {
  const [items, setItems] = useState([]);
  const [rows, setRows] = useState(0);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(0);
  const [offset, setOffset] = useState(12);
  const [select, setSelect] = useState("");
  const [searchWords, setSearchWords] = useState("");
  const [keyword, setKeyword] = useState("");
  const [msg, setMsg] = useState("");

  async function getAllItem() {
    await axios
      .get(
        "http://localhost:4001/goodsManager?page=" +
          page +
          "&offset=" +
          offset +
          "&select=" +
          select +
          "&searchQuery=" +
          keyword
      )
      .then((response) => {
        setItems(response.data.items);
        setPage(response.data.page);
        setPages(response.data.totalPageNum);
        setRows(response.data.totalRows);
        console.log(response);
      });
  }
  useEffect(() => {
    getAllItem();
  }, [page]);

  const changePage = (page) => {
    setPage(page);
    if (page === pages) {
      setMsg("No More Data");
    } else {
      setMsg("");
    }
  };

  return (
    <div>
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
      <div className="TableGal-paging">
        <Paging page={page} offset={offset} rows={rows} setPage={changePage} />
      </div>
    </div>
  );
}

export default TableGallary;
