import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "../../css/pages/GoodsManager.css";

function GoodsManager() {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  async function goodsManager() {
    await axios.get("http://localhost:4001/goodsManager").then((response) => {
      setItems(response.data);
    });
  }

  useEffect(() => {
    goodsManager();
  }, []);

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
                <tr key={key}>
                  <td>{item.idx}</td>
                  <td style={{ height: "80px" }}>
                    <img
                      src={`http://localhost:4001/${item.attach}`}
                      alt={item.attach}
                      className="itemImage"
                    />
                  </td>
                  <td>{item.itemname}</td>
                  <td>{item.price}</td>
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
        </div>
      </div>
    </div>
  );
}

export default GoodsManager;
