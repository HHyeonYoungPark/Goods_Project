import React from "react";
import { useState } from "react";
import axios from "axios";
import {
  useNavigate,
  Navigate,
  Link,
  useParams,
  Outlet,
  redirect,
} from "react-router-dom";
import "../../css/pages/Detail.css";
import Carousel from "react-bootstrap/Carousel";
import coupon2 from "../../images/coupon2.jpg";
import laptop from "../../images/laptop.jpg";
import LEDmood from "../../images/LEDmood.jpg";
import doll from "../../images/doll.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { faTags } from "@fortawesome/free-solid-svg-icons";
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";
import { faSquareMinus } from "@fortawesome/free-regular-svg-icons";
import { useEffect } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { min } from "date-fns";

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
const discount = 10000;
function Detail({ token, userId }) {
  const [item, setItem] = useState("");
  const [price, setPrice] = useState(0);
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
      setPrice(response.data[0].price);
    });
  }
  useEffect(() => {
    getDetail();
  }, []);
  console.log(item);

  async function cart() {
    token
      ? await axios.post(`http://localhost:4001/cart/${userId}/${idx}`, {counter, price}).then((response) => {
          if (response.data.status === 201) {
            window.alert(response.data.message);
          }
        })
      : navigate("/login");
  }

  function buy() {
    token ? (
      // <Navigate to="/주문완료!! 이런 페이지로 넘어가게 만들기...?" />
      <Navigate to={"/pay/" + item.idx} />
    ) : (
      navigate("/login")
    );
  }
  const [counter, setCounter] = React.useState(1);
  function plus() {
    setCounter(counter + 1);
  }

  function minus() {
    setCounter(counter - 1);
    if (counter <= 1) {
      alert("최소 주문수량은 1개입니다.");
      setCounter(1);
    }
  }

  const images = [
    {
      original: `http://localhost:4001/${item.attach}`,
      thumbnail: `http://localhost:4001/${item.attach}`,
    },
    {
      original: `http://localhost:4001/${item.attach2}`,
      thumbnail: `http://localhost:4001/${item.attach2}`,
    },
    {
      original: `http://localhost:4001/${item.attach3}`,
      thumbnail: `http://localhost:4001/${item.attach3}`,
    },
  ];
  const numPrice = parseInt(item.price);

  const numPrice2 = numPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const totalPrice = numPrice * counter;
  const totalPrice2 = totalPrice
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const discount = numPrice + 10000;
  const discount2 = discount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const point = numPrice * 0.08;
  const point2 = point.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return (
    <div className="detail-con">
      <div className="top-nav-con">
        <div>패션</div>
        <FontAwesomeIcon icon={faChevronRight} style={topnavstyle} />
        <div>{item.category}</div>
        <FontAwesomeIcon icon={faChevronRight} style={topnavstyle} />
        <div>{item.itemname}</div>
      </div>
      <div className="right-pay-sticky">
        <h3>추천 상품</h3>
        <div className="similar-item">
          {/* <ul>
            <li>투명젤리 케이스</li>
            <li>투명젤리 케이스</li>
            <li>투명젤리 케이스</li>
          </ul> */}
          <div className="recomen-product">
            <div className="recomen-product-img">
              <img src={doll} alt={doll} />
            </div>
            <div className="recomen-product-name">
              <b style={{ float: "right" }}>[색상옵션] 스마일인형</b>
              <p style={{ float: "right" }}>4,900원</p>
            </div>
          </div>
          <div className="recomen-product">
            <div className="recomen-product-img">
              <img src={LEDmood} alt={LEDmood} />
            </div>
            <div className="recomen-product-name">
              <b style={{ float: "right" }}>LED 블루투스 스피커</b>
              <p style={{ float: "right" }}>84,000원</p>
            </div>
          </div>
          <div className="recomen-product2">
            <div className="recomen-product-img">
              <img src={laptop} alt={laptop} />
            </div>
            <div className="recomen-product-name">
              <b style={{ float: "right" }}>케블라 노트북 파우치</b>
              <p style={{ float: "right" }}>27,900원</p>
            </div>
          </div>
        </div>
        <div className="cartorpay">
          <div className="howmayprice">
            <div className="detail-howmany">
              <button onClick={minus}>
                <FontAwesomeIcon
                  icon={faSquareMinus}
                  style={{ fontSize: "30px" }}
                />
              </button>
              <span className="spanmany">{counter}</span>
              <input type="hidden" name="counter" value={counter} />
              <button onClick={plus}>
                <FontAwesomeIcon
                  icon={faSquarePlus}
                  style={{ fontSize: "30px" }}
                />
              </button>
            </div>
            <h2 className="detail-price">{totalPrice2}원</h2>
            <input type="hidden" name="price" value={price} onChange={(e) => setPrice(e.target.value)} />
          </div>
          <div className="coupon-wrap">
            <p className="detail-coupon">ㄴ적용 가능한 쿠폰 없음</p>
            <button className="coupon-btn">쿠폰 변경</button>
          </div>
          <div className="ship-fee">
            <p>
              ㄴ배송비<b> 3,000원</b>
            </p>
          </div>
          <div className="payBtn-wrap">
            <button className="detail-cart" onClick={cart}>
              장바구니
            </button>
            <Link to={"/pay/" + item.idx} onClick={buy}>
              <button type="buuton" className="detail-pay" onClick={buy}>
                구매하기
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="detail-top-con">
        <ImageGallery items={images} />

        <div className="detail-title-con">
          <h4 className="detail1">무료 당일 배송 3+1 구성</h4>
          <h2 className="detail2">{item.itemname}</h2>
          <h1 className="detail4">
            {numPrice2}원
            <span>
              <small className="detail5">{discount2}</small>
            </span>
          </h1>
          <hr className="detail-hr" />
          <h4 className="detail6">
            <FontAwesomeIcon icon={faTruck} style={truck} />
            3,000원
          </h4>
          <p className="detail7">15:00 이전 주문 시 당일 발송</p>
          <p className="detail8">
            <b style={{ color: "#5568d7" }}>12/2(금)</b> 이내 도착 예정
          </p>
          <p className="detail9">CJ 대한통운</p>
          <hr className="detail-hr" />
          <h4 className="detail10">
            <FontAwesomeIcon icon={faTags} style={tags} />
            혜택
          </h4>
          <p className="detail11">
            SK pay point 최대 <b style={{ color: "#5568d7" }}>{point2}P</b> 적립
          </p>
          <p className="detail12">
            2개 이상 구매시 개당 <b style={{ color: "#5568d7" }}>500원</b> 할인
          </p>
          <p className="detail13">
            11번가 신한카드 첫 결제할인 + 최대
            <b style={{ color: "#5568d7" }}>2%</b> 적립
          </p>
          <p className="detail13">
            최대
            <b style={{ color: "#5568d7" }}> 12개월</b> 카드무이자 할부
          </p>
          <p className="detail14">[광고] 무료포인트적립쿠폰 : 1장 [쿠폰받기]</p>
          <p className="detail14">L.POINT 사용하기</p>
          <hr className="detail-hr" />
          <div className="coupon-banner">
            <img src={coupon2} alt={coupon2} />
          </div>

          {/* <div>
            <h4 className="detail15">최신리뷰보기</h4>
            <div className="new-review">최신리뷰가 나오는곳</div>
            <button className="more-review">
              리뷰 더보기
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div> */}
        </div>
      </div>
      <div className="detail-bottom-wrap">
        <navigator className="detail-nav-wrap">
          <Link to="detailTable">
            <div>
              <p>상품정보</p>
            </div>
          </Link>
          <Link to="detailReview">
            <div>
              <p>리뷰보기</p>
            </div>
          </Link>
          <div>
            <p>Q&A</p>
          </div>
          <div>
            <p>판매정보</p>
          </div>
        </navigator>
      </div>
      <div className="detail-bottom-wrap">
        <Outlet />
      </div>
    </div>
  );
}

export default Detail;
