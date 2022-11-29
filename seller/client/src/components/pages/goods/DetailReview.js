import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "../../css/pages/GoodsManager.css";
import "../../css/pages/Review.css";
import WriteReview from "./WriteReview";

function DetailReview({ userId }) {
  const [writer, setWriter] = useState(userId);
  const [itemname, setItemname] = useState("");
  const [title, setTitle] = useState("");
  const [attach, setAttach] = useState("");
  const [attach2, setAttach2] = useState("");
  const [attach3, setAttach3] = useState("");
  const [contents, setContents] = useState("");
  const [rating, setRating] = useState("");
  const [openReview, setOpenReview] = useState(false);

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

  // async function deleteReview(idx) {
  //   await axios
  //     .delete("http://localhost:4001/deleteReview/" + idx)
  //     .then((response) => {
  //       if (response.data.status === 201) {
  //         window.alert(response.data.message);
  //         reviewManager();
  //       } else {
  //         window.alert("상품삭제 에러");
  //       }
  //     });
  // }

  return (
    <div className="reviewManager-container">
      <div className="reviewContainer">
        <div className="reviewTitle">
          <h2>상품 리뷰</h2>
          <button
            onClick={() => {
              setOpenReview(!openReview);
            }}
          >
            리뷰 작성
          </button>
        </div>
        {openReview === true ? <WriteReview userId={userId} /> : null}
        <div className="reviewList">
          <div className="search-wrap"></div>
          <div className="tbl-wrap">
            <table className="reviewTb">
              <tr className="reviewTr">
                <td>이미지</td>
                <td>리뷰</td>
                <td>작성자</td>
                <td>등록일</td>
                <td>평점</td>
              </tr>
              {reviews.map((review, key) => {
                return (
                  <>
                    <tr key={key} style={{ borderBottom: "none" }}>
                      <td>
                        <img
                          style={{ height: "80px" }}
                          src={`http://localhost:4001/${review.attach}`}
                          alt={review.attach}
                          className="reviewImage"
                        />
                      </td>
                      <td>{review.Contents}</td>
                      <td>{review.Writer}</td>
                      <td>{review.regdate}</td>
                      <td>{review.Rating}</td>
                    </tr>
                  </>
                );
              })}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailReview;
