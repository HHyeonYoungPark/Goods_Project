import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Review() {
  const [customer, setCustomer] = useState("");
  const [goods, setGoods] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [star, setStar] = useState("");
  const [attach, setAttach] = useState("");
  
  const navigate = useNavigate();

  async function frmHandler(e) {
    e.preventDefault();

    let formDataReview = new FormData();
    formDataReview.append("customer", customer);
    formDataReview.append("goods", goods);
    formDataReview.append("title", title);
    formDataReview.append("content", content);
    formDataReview.append("star", star);
    formDataReview.append("attach", attach);

    await axios.post("http://localhost:4001/customer/writeReview", formDataReview)
      .then((response) => {
        if (response.data.status === 201) {
          window.alert(response.data.message);
          navigate("/");
        } else {
          window.alert("에러발생 : 관리자에게 문의하세요");
          navigate("/");
        }
      });
  }
  
  return (
    <div>
      <h1>리뷰 작성</h1>
      <form method="post" encType="multipart/form-data" onSubmit={frmHandler}>
        <input type="hidden" name="customer"/>
        <input type="text" name="item" readOnly/>
        <input type="text" name="title" onChange={(e) => setTitle(e.target.value)}/>
        <textarea name="content" cols="50" rows="20" onChange={(e) => setContent(e.target.value)}></textarea>
        <select name="star" id="star" onChange={(e) => setStar(e.target.value)}>
          <option value="1">1점</option>
          <option value="2">2점</option>
          <option value="3">3점</option>
          <option value="4">4점</option>
          <option value="5">5점</option>
        </select>
        <input type="file" name="attach" multiple onChange={(e) => setAttach(e.target.files[0])}/>
        <input type="submit" value="리뷰 작성" />
      </form>
    </div>
  );
}

export default Review;
