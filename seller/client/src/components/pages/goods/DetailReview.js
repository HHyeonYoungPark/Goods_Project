import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "../../css/pages/GoodsManager.css";
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
        <h1>상품 리뷰</h1>
        <button
          onClick={() => {
            setOpenReview(!openReview);
          }}
        >
          리뷰 작성
        </button>
        {openReview === true ? <WriteReview /> : null}
        <div className="reviewList">
          <div className="search-wrap"></div>
          <div className="tbl-wrap">
            <table>
              <tr>
                <td>작성자</td>
                <td>상품명</td>
                <td>이미지</td>
                <td>제목</td>
                <td>등록일</td>
                <td>평점</td>
              </tr>
              {reviews.map((review, key) => {
                return (
                  <>
                    <tr key={key} style={{ borderBottom: "none" }}>
                      <td>{review.Writer}</td>
                      <td>{review.ItemName}</td>
                      <td>
                        <img
                          style={{ height: "80px" }}
                          src={`http://localhost:4001/${review.attach}`}
                          alt={review.attach}
                          className="reviewImage"
                        />
                      </td>
                      <td>{review.title}</td>
                      <td>{review.regdate}</td>
                      {/* <td>
                        <button className="upModiBtn">
                        <Link to={"/adminPage/updateReview/" + review.idx}>
                          수정
                        </Link>
                      </button>
                      <button
                        className="upDelBtn"
                        onClick={() => deleteReview(review.idx)}
                      >
                        삭제
                      </button>
                      </td> */}
                      <td>{review.Rating}</td>
                    </tr>
                    <tr key={key} style={{ borderTop: "none" }}>
                      <td colSpan={6}>{review.Contents}</td>
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
