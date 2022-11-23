import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "../../css/pages/AddItem.css";

function AddReview() {
  const [itemname, setItemName] = useState("");
  const [title, setTitle] = useState("");
  const [attach, setAttach] = useState("");
  const [attach2, setAttach2] = useState("");
  const [attach3, setAttach3] = useState("");
  const [contents, setContents] = useState("");

  const navigate = useNavigate();

  async function frmHandler(e) {
    e.preventDefault();
    let formData = new FormData();

    formData.append("itemname", itemname);
    formData.append("title", title);
    formData.append("attach", attach);
    formData.append("attach2", attach2);
    formData.append("attach3", attach3);
    formData.append("contents", contents);

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
                    name="itemName"
                    onChange={(e) => {
                      setItemName(e.target.value);
                    }}
                  />
                </td>
              </tr>
              <tr>
                <th>제목</th>
                <td>
                  <input
                    type="text"
                    name="title"
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                  />
                </td>
              </tr>
              <tr>
                <th>이미지</th>
                <td>
                  메인이미지:
                  <input
                    className="itemImage"
                    type="file"
                    name="attach"
                    multiple
                    onChange={(e) => {
                      setAttach(e.target.files[0]);
                    }}
                  />
                  {/* <br></br>서브이미지1:
                  <input
                    className="itemImage"
                    type="file"
                    name="attach2"
                    multiple
                    onChange={(e) => {
                      setAttach2(e.target.files[0]);
                    }}
                  />
                  <br></br>서브이미지2:
                  <input
                    className="itemImage"
                    type="file"
                    name="attach3"
                    multiple
                    onChange={(e) => {
                      setAttach3(e.target.files[0]);
                    }}
                  /> */}
                </td>
              </tr>
              <tr>
                <th>리뷰</th>
                <td>
                  <textarea
                    name="contents"
                    className="reviewContents"
                    onChange={(e) => {
                      setContents(e.target.value);
                    }}
                  ></textarea>
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

export default AddReview;
