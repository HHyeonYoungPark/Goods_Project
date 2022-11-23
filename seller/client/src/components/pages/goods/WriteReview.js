import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "../../css/pages/GoodsManager.css";

function WriteReview({ userId }) {
  const [writer, setWriter] = useState(userId);
  const [itemname, setItemname] = useState("");
  const [title, setTitle] = useState("");
  const [attach, setAttach] = useState("");
  const [attach2, setAttach2] = useState("");
  const [attach3, setAttach3] = useState("");
  const [contents, setContents] = useState("");
  const [rating, setRating] = useState("");

  const { idx } = useParams();

  const [reviews, setReviews] = useState([]);
  const navigate = useNavigate();

  async function frmHandler(e) {
    e.preventDefault();
    let formData = new FormData();

    formData.append("writer", writer);
    formData.append("itemname", itemname);
    formData.append("title", title);
    formData.append("attach", attach);
    formData.append("attach2", attach2);
    formData.append("attach3", attach3);
    formData.append("contents", contents);
    formData.append("contents", rating);

    await axios
      .post(`http://localhost:4001/detail/${idx}/addReview`, formData)
      .then((response) => {
        if (response.data.status === 201) {
          window.alert(response.data.message);
        } else {
          window.alert("상품등록 실패!");
        }
      });
  }

  async function reviewManager() {
    await axios
      .get(`http://localhost:4001/detail/${idx}/detailReview`)
      .then((reviews) => {
        setReviews(reviews.data);
      });
  }

  useEffect(() => {
    reviewManager();
  }, [reviews]);

  return (
    <div className="reviewWrite">
      <form method="post" encType="multipart/form-data" onSubmit={frmHandler}>
        <div className="addReview">
          <table>
            <tr>
              <th>작성자</th>
              <td>
                <input
                  type="text"
                  name="writer"
                  value={writer}
                  onChange={(e) => {
                    setWriter(e.target.value);
                  }}
                />
              </td>
            </tr>
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
                대표이미지:
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
            <tr>
              <th>추천</th>
              <td>
                <div
                  className="ratingBox"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    paddingLeft: "20px",
                  }}
                >
                  <div style={{ marginRight: "10px" }}>
                    1<br />
                    <input
                      id="1"
                      type="radio"
                      name="rating"
                      value="1"
                      onChange={(e) => {
                        setRating(e.target.value);
                      }}
                    />
                  </div>
                  <div style={{ marginRight: "10px" }}>
                    2<br />
                    <input
                      id="2"
                      type="radio"
                      name="rating"
                      value="2"
                      onChange={(e) => {
                        setRating(e.target.value);
                      }}
                    />
                  </div>
                  <div style={{ marginRight: "10px" }}>
                    3<br />
                    <input
                      id="3"
                      type="radio"
                      name="rating"
                      value="3"
                      onChange={(e) => {
                        setRating(e.target.value);
                      }}
                    />
                  </div>
                  <div style={{ marginRight: "10px" }}>
                    4<br />
                    <input
                      id="4"
                      type="radio"
                      name="rating"
                      value="4"
                      onChange={(e) => {
                        setRating(e.target.value);
                      }}
                    />
                  </div>
                  <div style={{ marginRight: "10px" }}>
                    5<br />
                    <input
                      id="5"
                      type="radio"
                      name="rating"
                      value="5"
                      onChange={(e) => {
                        setRating(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </td>
            </tr>
          </table>
        </div>
        <div className="submit-btn">
          <input type="submit" value="리뷰 등록" />
        </div>
      </form>
    </div>
  );
}

export default WriteReview;
