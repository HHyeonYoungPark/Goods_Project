import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "../../css/pages/GoodsManager.css";
import "../../css/pages/Review.css";

function WriteReview({ userId }) {
  const [writer, setWriter] = useState(userId);
  // const [itemname, setItemname] = useState("");
  // const [title, setTitle] = useState("");
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
    // formData.append("itemname", itemname);
    // formData.append("title", title);
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

  function addReview() {
    navigate(-1);
  }

  useEffect(() => {
    reviewManager();
  }, [reviews]);

  console.log(userId);

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
                  value={userId}
                  onChange={(e) => {
                    setWriter(e.target.value);
                  }}
                />
              </td>
            </tr>
            {/* <tr>
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
            </tr> */}
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
                <div className="ratingPoint">
                  <input
                    id="1"
                    type="radio"
                    name="rating"
                    value="1"
                    onChange={(e) => {
                      setRating(e.target.value);
                    }}
                  />
                  <span>1</span>
                  <input
                    id="2"
                    type="radio"
                    name="rating"
                    value="2"
                    onChange={(e) => {
                      setRating(e.target.value);
                    }}
                  />
                  <span>2</span>
                  <input
                    id="3"
                    type="radio"
                    name="rating"
                    value="3"
                    onChange={(e) => {
                      setRating(e.target.value);
                    }}
                  />
                  <span>3</span>
                  <input
                    id="4"
                    type="radio"
                    name="rating"
                    value="4"
                    onChange={(e) => {
                      setRating(e.target.value);
                    }}
                  />
                  <span>4</span>
                  <input
                    id="5"
                    type="radio"
                    name="rating"
                    value="5"
                    onChange={(e) => {
                      setRating(e.target.value);
                    }}
                  />
                  <span>5</span>
                </div>
              </td>
            </tr>
          </table>
        </div>
        <div className="reviewAdd-btn">
          <input
            type="submit"
            value="리뷰 등록"
            onClick={() => {
              addReview();
            }}
          />
        </div>
      </form>
    </div>
  );
}

export default WriteReview;
