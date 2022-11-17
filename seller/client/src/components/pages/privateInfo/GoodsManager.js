import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "../../css/pages/GoodsManager.css";

function GoodsManager() {
  const [items, setItems] = useState([]);

  async function goodsManager() {
    await axios.get("http://localhost:4001/goodsManager").then((response) => {
      setItems(response.data);
    });
  }

  useEffect(() => {
    goodsManager();
  }, []);

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
              <form action="/board/postSearch" method="get" id="frm">
                <div className="search">
                  <select
                    id="sel"
                    className="sel"
                    name="selSearch2"
                    onchange="selSearch2()"
                  >
                    <option value="">선택하세요</option>
                    <option value="title">제목</option>
                    <option value="username">작성자</option>
                    <option value="content">내용</option>
                    <option value="regdate">등록일</option>
                  </select>
                  <input
                    type="text"
                    id="search"
                    className="search"
                    name="search"
                    autofocus
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
                <tr key={key} className="itemList">
                  <td>{item.idx}</td>
                  <td>
                    <img
                      src={item.itemImage}
                      alt={item.itemImage}
                      className="itemImage"
                    />
                  </td>
                  <td>{item.itemname}</td>
                  <td>{item.price}</td>
                  <td>{item.regdate}</td>
                  <td>
                    <Link to="">
                      <button type="submit" className="upDelBtn">
                        수정
                      </button>
                    </Link>
                    <Link
                      to=""
                      onclick="return confirm('상품을 삭제하시겠습니까?');"
                    >
                      <button type="submit" className="upDelBtn">
                        삭제
                      </button>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
}

export default GoodsManager;
