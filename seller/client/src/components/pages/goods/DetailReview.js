import React from "react";
import "../../css/pages/DetailReview.css";
function DetailReview() {
  return (
    <div>
      <div>
        상품명: <input type="text" name="reviewItem" />
      </div>
      <div>
        <textarea
          name="reviewta"
          id=""
          cols="100"
          rows="8"
          placeholder="고객님의 솔직한 리뷰를 적어주세요!"
        ></textarea>
      </div>
      <div className="recombtn-wrap">
        <div>
          제품을 추천하시나요? <input type="radio" name="recom" />
          추천
          <input type="radio" name="recom" />
          비추천
        </div>
        <div>
          <button className="reviewDone">작성완료</button>
        </div>
      </div>
      <div className="reviewTable">
         작성한 리뷰나오는곳 다중게시판?????
      </div>
    </div>
  );
}

export default DetailReview;
