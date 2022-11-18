import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

function UpdateItem() {
  const [item, setItem] = useState("");
  const { idx } = useParams();

  const [itemname, setItemname] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [attach, setAttach] = useState("");
  const [contents, setContents] = useState("");
  const [madein, setMadein] = useState("");

  const navigate = useNavigate();

  async function getItem() {
    await axios.get("http://localhost:4001/updateItem/" + idx).then((res) => {
      setItem(res.data[0]);
      setItemname(res.data[0].itemname);
      setCategory(res.data[0].category);
      setPrice(res.data[0].price);
      setStock(res.data[0].stock);
      setAttach(res.data[0].attach);
      setContents(res.data[0].contents);
      setMadein(res.data[0].madein);
    });
  }
  useEffect(() => {
    getItem();
  }, []);

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
      .put("http://localhost:4001/updateItem/" + idx, formData)
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
          <h1>상품 수정</h1>
        </div>
        <form method="post" encType="multipart/form-data" onSubmit={frmHandler}>
          <input type="hidden" value={item.idx} />
          <div className="addItem">
            <h3>상품 기본정보 수정</h3>
            <table>
              <tr>
                <th>상품명</th>
                <td>
                  <input
                    type="text"
                    name="itemname"
                    value={itemname}
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
                    value={category}
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
                    value={price}
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
                    value={stock}
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
                    // value={`http://localhost:4001/${item.attach}`}
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
                    value={contents}
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
                    value={madein}
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
