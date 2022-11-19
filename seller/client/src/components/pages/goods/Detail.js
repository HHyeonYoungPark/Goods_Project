import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate, Navigate, Link, useParams } from "react-router-dom";
import "../../css/pages/Detail.css";
import image from "../../images/phone.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { faTags } from "@fortawesome/free-solid-svg-icons";
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";
import { faSquareMinus } from "@fortawesome/free-regular-svg-icons";
import { useEffect } from "react";
const topnavstyle = {
  margin: "0 0 0 15px",
  color: "#27336F",
};
const truck = {
  margin: "0 10px 0 0",
  color: "yellowgreen",
};
const tags = {
  margin: "0 10px 0 0",
  color: "red",
};
// const plusminus = {
//   font-size: ''
// };
function plus(e) {}

function Detail({ token, userId }) {
  const [item, setItem] = useState("");
  const { idx } = useParams();
  const navigate = useNavigate();
  // useEffect(function () {
  //   axios
  //     .get(`http://localhost:4001/detail/${idx}`)
  //     .then(function (response) {
  //       setItem(response.data);
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });
  // }, []);

  async function getDetail() {
    await axios.get(`http://localhost:4001/detail/${idx}`).then((response) => {
      setItem(response.data[0]);
    });
  }
  useEffect(() => {
    getDetail();
  }, []);
  console.log(item);

  function cart() {
    token
      ? window.alert("해당 상품이 장바구니에 추가되었습니다.")
      : navigate("/login");
  }

  function buy() {
    token
      ? // <Navigate to="/주문완료!! 이런 페이지로 넘어가게 만들기...?" />
        window.alert("결제or 주문완료페이지로 넘김")
      : navigate("/login");
  }

  return (
    <div className="detail-con">
      <div className="top-nav-con">
        <div>악세사리</div>
        <FontAwesomeIcon icon={faChevronRight} style={topnavstyle} />
        <div>{item.category}</div>
        <FontAwesomeIcon icon={faChevronRight} style={topnavstyle} />
        <div>{item.itemname}</div>
      </div>
      <div className="right-pay-sticky">
        <h3>비슷한 상품</h3>
        <div className="similar-item">
          <ul>
            <li>투명젤리 케이스</li>
            <li>투명젤리 케이스</li>
            <li>투명젤리 케이스</li>
            <li>투명젤리 케이스</li>
            <li>투명젤리 케이스</li>
          </ul>
        </div>
        <div className="cartorpay">
          <div className="howmayprice">
            <div className="detail-howmany">
              <button>
                <FontAwesomeIcon
                  icon={faSquareMinus}
                  style={{ fontSize: "30px" }}
                />
              </button>
              <span className="spanmany">1</span>
              <button onClick={plus}>
                <FontAwesomeIcon
                  icon={faSquarePlus}
                  style={{ fontSize: "30px" }}
                />
              </button>
            </div>
            <div></div>
            <h2 className="detail-price">{item.price}원</h2>
          </div>
          <div className="coupon-wrap">
            <p className="detail-coupon">적용가능한 쿠폰 없음</p>
            <button className="coupon-btn">쿠폰 변경</button>
          </div>
          <div>
            <p>무료배송</p>
            <button className="freedel-btn">?</button>
          </div>
          <div>
            <button className="detail-cart" onClick={cart}>
              장바구니
            </button>
            <button className="detail-pay" onClick={buy}>
              구매하기
            </button>
          </div>
        </div>
      </div>
      <div className="detail-top-con">
        <div className="detailimg-con">
          <img src={`http://localhost:4001/${item.attach}`} alt="" />
        </div>
        <div className="detail-title-con">
          <div>
            리뷰 별 나오는 부분<button>리뷰보기</button>
          </div>
          <h4 className="detail1">무료 당일 배송 3+1 구성</h4>
          <h2 className="detail2">{item.itemname}</h2>
          <h1 className="detail4">
            {item.price}원
            <span>
              <small className="detail5">3,900원</small>
            </span>
          </h1>
          <hr className="detail-hr" />
          <h4 className="detail6">
            <FontAwesomeIcon icon={faTruck} style={truck} />
            무료배송
          </h4>
          <p className="detail7">15까지 주문 시 오늘발송</p>
          <p className="detail8">
            내일 11/18일 도착예정<span>?</span>
          </p>
          <p className="detail9">CJ 대한통운</p>
          <hr className="detail-hr" />
          <h4 className="detail10">
            <FontAwesomeIcon icon={faTags} style={tags} />
            혜택
          </h4>
          <p className="detail11">SK pay point 최대 194P 적립 ( 쇼킹 194P )</p>
          <p className="detail12">2개 이상 구매시 개당 500원 할인</p>
          <p className="detail13">11번가 신한카드 첫 결제할인 + 최대 2% 적립</p>
          <p className="detail14">[광고] 무료포인트적립쿠폰 : 1장 [쿠폰받기]</p>
          <hr className="detail-hr" />
          <div>
            <h4 className="detail15">최신리뷰보기</h4>
            <div className="new-review">최신리뷰가 나오는곳</div>
            <button className="more-review">
              리뷰 더보기
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
      </div>
      <div className="detail-bottom-wrap">
        <navigator className="detail-nav-wrap">
          <div>상품정보</div>
          <div>리뷰</div>
          <div>Q&A</div>
          <div>판매자정보</div>
        </navigator>
        <table className="detail-table">
          <tr>
            <td>상품상태</td>
            <td>새상품</td>
            <td>상품번호</td>
            <td>4393509615</td>
          </tr>
          <tr>
            <td>배송방법</td>
            <td>택배</td>
            <td>배송가능지역</td>
            <td>전국</td>
          </tr>
          <tr>
            <td>영수증발행</td>
            <td>온라인 현금영수증 발급 </td>
            <td>원산지</td>
            <td>국내</td>
          </tr>
          <tr>
            <td>제조일자/유효기간 </td>
            <td colSpan={3}>판매자에게 문의</td>
          </tr>
          <tr>
            <td>A/S안내</td>
            <td colSpan={3}>
              010-7655-5695 상담시간 : 13:00 ~ 17:00 (통화가 어려울 경우
              톡톡으로 메시지 남겨주세요.) 구매 후 7일 이내 교환 또는 반품이
              가능합니다. 제품 수령 후 포장제 및 상품의 가치가 훼손된 경우 반품
              또는 교환이 불가합니다. 주문 제작 상품의 경우 단순 변심에 의한
              반품, 교환이 불가합니다.
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Detail;
