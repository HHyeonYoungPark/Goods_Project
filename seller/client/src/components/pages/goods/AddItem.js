import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "../../css/pages/AddItem.css";

function AddItem() {
  const [itemname, setItemname] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [attach, setAttach] = useState("");
  const [contents, setContents] = useState("");
  const [madein, setMadein] = useState("");

  const navigate = useNavigate();

  async function frmHandler(e) {
    e.preventDefault();
    let formData = new FormData();

    formData.append("itemname", itemname);
    formData.append("category", category);
    formData.append("price", price);
    formData.append("stock", stock);
    formData.append("attach", attach);
    formData.append("contents", contents);
    formData.append("madein", madein);

    await axios
      .post("http://localhost:4001/addItem", formData)
      .then((response) => {
        if (response.data.status === 201) {
          window.alert(response.data.message);
          navigate("/AdminPage/goodsManager");
        } else {
          window.alert("상품등록 실패!");
          navigate("/AdminPage/goodsManager");
        }
      });
  }

  return (
    <div className="addItem-comtainer">
      <div className="addItem-wrap">
        <div className="addItem-title">
          <h1>상품등록</h1>
        </div>
        <form method="post" encType="multipart/form-data" onSubmit={frmHandler}>
          <div className="addItem">
            <h3>상품 기본정보 입력</h3>
            <table>
              <tr>
                <th>상품명</th>
                <td>
                  <input
                    type="text"
                    name="itemname"
                    onChange={(e) => {
                      setItemname(e.target.value);
                    }}
                  />
                </td>
              </tr>
              <tr>
                <th>상품 분류</th>
                <td>
                  <select
                    name="category"
                    onChange={(e) => {
                      setCategory(e.target.value);
                    }}
                  >
                    <option value="">선택하세요</option>
                    <option value="패션">패션</option>
                    <option value="전자기기">전자기기</option>
                    <option value="악세서리">악세서리</option>
                    <option value="문구">문구</option>
                    <option value="생활">생활</option>
                  </select>
                </td>
              </tr>
              <tr>
                <th>가격</th>
                <td>
                  <input
                    type="text"
                    name="price"
                    placeholder="'원' 제외"
                    onChange={(e) => {
                      setPrice(e.target.value);
                    }}
                  />
                </td>
              </tr>
              <tr>
                <th>재고</th>
                <td>
                  <input
                    type="text"
                    name="stock"
                    placeholder="'개' 제외"
                    onChange={(e) => {
                      setStock(e.target.value);
                    }}
                  />
                </td>
              </tr>
              <tr>
                <th>이미지</th>
                <td>
                  <input
                    className="itemImage"
                    type="file"
                    name="attach"
                    multiple
                    onChange={(e) => {
                      setAttach(e.target.files[0]);
                    }}
                  />
                </td>
              </tr>
              <tr>
                <th>상품 상세설명</th>
                <td>
                  <textarea
                    name="contents"
                    className="item-contents"
                    onChange={(e) => {
                      setContents(e.target.value);
                    }}
                  ></textarea>
                </td>
              </tr>
              <tr>
                <th>원산지</th>
                <td>
                  <input
                    type="text"
                    name="madein"
                    onChange={(e) => {
                      setMadein(e.target.value);
                    }}
                  />
                </td>
              </tr>
            </table>
          </div>
          <div className="submit-btn">
            <button className="list-btn">
              <Link to="/AdminPage/goodsManager">돌아가기</Link>
            </button>
            <input type="submit" value="상품등록" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddItem;
