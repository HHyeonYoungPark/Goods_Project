import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

function UpdateItem({ upItem }) {
  const [itemname, setItemname] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [attach, setAttach] = useState("");
  const [contents, setContents] = useState("");
  const [madein, setMadein] = useState("");

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
                    value={upItem.itemname}
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
                    value={upItem.category}
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
                    value={upItem.price}
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
                    value={upItem.stock}
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
                    value={upItem.attach}
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
                    value={upItem.contents}
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
                    value={upItem.madein}
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
            <input type="submit" value="상품 수정" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateItem;
