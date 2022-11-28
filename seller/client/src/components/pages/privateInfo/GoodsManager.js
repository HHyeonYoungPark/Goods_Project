import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Paging from "../../function/Paging";
import "../../css/pages/GoodsManager.css";

function GoodsManager() {
  const [items, setItems] = useState([]);
  const [rows, setRows] = useState(0);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(0);
  const [offset, setOffset] = useState(10);
  const [select, setSelect] = useState("");
  const [searchWords, setSearchWords] = useState("");
  const [keyword, setKeyword] = useState("");
  const [msg, setMsg] = useState("");
  
  const navigate = useNavigate();

  async function goodsManager() {
    await axios.get("http://localhost:4001/goodsManager?page=" +
    page +
    "&offset=" +
    offset +
    "&select=" +
    select +
    "&searchQuery=" +
    keyword).then((response) => {
      setItems(response.data.items);
      setPage(response.data.page);
      setPages(response.data.totalPageNum);
      setRows(response.data.totalRows);
      console.log(response);
    });
  }

  useEffect(() => {
    goodsManager();
  }, [page, keyword]);

  async function deleteItem(idx) {
    await axios
      .delete("http://localhost:4001/delete/" + idx)
      .then((response) => {
        if (response.data.status === 201) {
          window.alert(response.data.message);
          goodsManager();
        } else {
          window.alert("상품삭제 에러");
        }
      });
  }

  const goodsSearch = (e) => {
    e.preventDefault();
    setKeyword(searchWords);
    setPage(1);
    setSearchWords("");
  };

  const changePage = (page) => {
    setPage(page);
    if (page === pages) {
      setMsg("No More Data");
    } else {
      setMsg("");
    }
  };

  return (
    <div className="goodsManager-container">
      <div className="table-List">
        <h1>상품 관리</h1>
        <div className="table-List-top">
          <div className="top-left">
            <Link to="/AdminPage/addItem">
              <button type="submit" class="addBtn">
                상품 등록
              </button>
            </Link>
          </div>
          <div className="top-right">
            <div className="search-wrap">
              <form method="get" id="frm" onSubmit={goodsSearch}>
                <div className="search">
                  <select
                    id="sel"
                    className="sel"
                    name="selSearch2"
                    onchange={(e) => setSelect(e.target.value)}
                  >
                    <option value="" selected disabled>선택하세요</option>
                    <option value="itemname">상품명</option>
                    <option value="category">카테고리</option>
                    <option value="price">가격</option>
                    <option value="regdate">등록일</option>
                  </select>
                  <input
                    type="text"
                    id="search"
                    className="search"
                    name="search"
                    onChange={(e) => setSearchWords(e.target.value)}
                    required
                  />
                  <input type="submit" value="검색" className="searchBtn" />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="tbl-wrap">
          <table>
            <tr>
              <td>번호</td>
              <td>이미지</td>
              <td>상품명</td>
              <td>가격</td>
              <td>등록일</td>
              <td>비고</td>
            </tr>
            {items.map((item, key) => {
              return (
                <tr key={key}>
                  <td>{item.idx}</td>
                  <td style={{ height: "80px" }}>
                    <Link to={`/detail/${item.idx}`}>
                      <img
                        src={`http://localhost:4001/${item.attach}`}
                        alt={item.attach}
                        className="itemImage"
                      />
                    </Link>
                  </td>
                  <td>
                    <Link to={`/detail/${item.idx}`}>{item.itemname}</Link>
                  </td>
                  <td>
                    {parseInt(item.price)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    원
                  </td>
                  <td>{item.regdate}</td>
                  <td>
                    <button className="upDelBtn">
                      <Link to={"/adminPage/updateItem/" + item.idx}>수정</Link>
                    </button>
                    <button
                      className="upDelBtn"
                      onClick={() => deleteItem(item.idx)}
                    >
                      삭제
                    </button>
                  </td>
                </tr>
              );
            })}
          </table>
          
          <p className="danger">{msg}</p>
          <div className="paging">
            <Paging
              page={page}
              offset={offset}
              rows={rows}
              setPage={changePage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GoodsManager;
