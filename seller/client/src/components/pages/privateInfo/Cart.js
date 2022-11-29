import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons';
import { faSquareMinus } from '@fortawesome/free-regular-svg-icons';
import { useEffect } from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import "../../css/pages/Cart.css"
import { Link } from "react-router-dom";
import { set } from "date-fns";

function Cart({userId}) {
  const [cart, setCart] = useState([]);
  const [userInfo, setUserInfo] = useState([]);
  // const [cartLists, setCartLists] = useState([]);
  const [price, setPrice] = useState(0);
    
  async function getCart() {
    // console.log(userId);
    await axios.get("http://localhost:4001/cart/"+userId).then((response) => {
      // console.log(response.data);
      // console.log(response.data.user[0]);
      // console.log(response.data.result);
      setUserInfo(response.data.user[0]);
      setCart(response.data.result);
    });
  }
  useEffect(() => {
    getCart();
  }, []);

  const [checkedItems, setCheckedItems] = useState([]);
  
  // 체크박스 전체 선택
  const handleAllCheck = (checked) => {
    if(checked) {
      // 전체 선택 클릭 시 데이터의 모든 아이템(idx)를 담은 배열로 checkItems 상태 업데이트
      const checkedItemsArray = [];
      const priceArray = [];
      cart.forEach((c) => {
        checkedItemsArray.push(c.idx);
        priceArray.push(c.itemPrice);
      });
      const sum = priceArray.reduce((total, cur) => {
        return total + cur;
      },0);
      setPrice(sum);
      setCheckedItems(checkedItemsArray);
    }
    else {
      // 전체 선택 해제 시 checkItems 를 빈 배열로 상태 업데이트
      setCheckedItems([]);
      setPrice(0);
    }
  }

  // 체크박스 단일 선택
  const handleCheck = (checked, idx, Price) => {
    if (checked) {
      // 단일 선택 시 체크된 아이템을 배열에 추가
      setCheckedItems([...checkedItems, idx]);
      setPrice(price + Price);
    } else {
      // 단일 선택 해제 시 체크된 아이템을 제외한 배열 (필터)
      setCheckedItems(checkedItems.filter((ch) => ch !== idx));
      setPrice(price - Price);
    }
  };

  const point = price * 0.01;
  const basicPoint = Math.round(point.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
  const shipfee = 3000;
  const basicPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const total = price + shipfee;
  const basicTotalPrice = total
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  // 장바구니 상품 개별 삭제
  /*
  const useConfirm = (message = "", onConfirm, onCancel) => {
    if (!onConfirm || typeof onConfirm !== "function") { 
      return; // 매개변수 onConfirm가 없거나 onConfirm이 함수가 아나라면 return 실행
    }
    if (onCancel && typeof onCancel !== "function") {
      return;
    }
    const confirmAction = () => { // confirm창의 응답에 따른 이벤트 실행 함수
      if (window.confirm(message)) { // 확인을 눌렀다면
        // await axios.post("http://localhost:4001/delItem/"+idx).then((res) =>{
        //   if(res.data.status === 201) {
            onConfirm();
        //   }
        // })
      } else { // 취소를 눌렀다면
        onCancel();
      }
    };
    return confirmAction; 
  };
  
  const deleteConfirm = () => window.alert("삭제했습니다.")
  const cancelConfirm = () => window.alert("취소했습니다.")
  const delItem = useConfirm("상품을 장바구니에서 삭제하시겠습니까?", deleteConfirm, cancelConfirm);
  */
  async function delItem(idx) {
    window.alert("상품을 장바구니에서 삭제하시겠습니까?")
    await axios.delete("http://localhost:4001/delItem/"+idx).then((res) =>{
      if(res.data.status === 201) {
        window.alert(res.data.message);
        window.location.reload();
      }
    })
  }

  async function delItemAll() {
    window.alert("장바구니를 비우시겠습니까?")
    await axios.delete("http://localhost:4001/delItemAll/"+userId).then((res) =>{
      if(res.data.status === 201) {
        window.alert(res.data.message);
        window.location.reload();
      }
    })
  }

  return (
    <div className="cartContent-wrap">
      <div className="cartContent-left">
        <div className="cart-title">
          <h2>장바구니</h2>
        </div>
        <div className="cartItem-info">
          <table>
            <thead>
              <tr>
                <td>
                  <input type="checkbox" name="selectAll" 
                    onChange={(e) => handleAllCheck(e.target.checked)}
                    checked={checkedItems.length === 0 ? false : checkedItems.length === cart.length ? true : false}
                  />전체선택
                  <button type="button" onClick={delItemAll}>선택삭제</button>
                </td>
                <td colSpan="4">상품개수 : {checkedItems.length} 개</td>
              </tr>
            </thead>
            <tbody>
              {
                cart.length === 0 
                ?
                <tr>
                  <td colSpan="6">
                    장바구니가 비었습니다.
                  </td>
                </tr>
                  :
                cart.map((item, key) =>
                //  <CartItem item={item} key={key}/>
                  {
                    // const Price = parseInt(item.price);
                    // const Counter = parseInt(item.itemCounter);
                    // const basicPrice = (Price*Counter).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                    // setPrice(...price + basicPrice);
                    
                    return(
                      <tr key={key}>
                        <td>
                          <input type="checkbox"
                            onChange={(e) => handleCheck(e.target.checked, item.idx, item.itemPrice)}
                            checked={checkedItems.includes(item.idx) ? true : false}
                          />
                        </td>
                        <td>
                          <img
                            src={"http://localhost:4001/"+item.attach}
                            style={{ width: "120px", height: "120px" }}
                          />
                        </td>
                        <td>
                          <span>{item.itemname}</span>
                        </td>
                        <td>
                          <p><b>{item.itemPrice * item.itemCounter}</b></p>
                          {/* <input type="hidden" value={item.itemPrice * item.itemCounter} onChange={(e) => handleTotalPrice(e.target.value)}/> */}
                        </td>
                        <td>
                          <button
                          // onClick={
                          //   () => {
                          //     item.itemCounter === item.stock ? item.stock : item.itemCounter + 1
                          //   }
                          // }
                          >
                            <FontAwesomeIcon
                              icon={faSquareMinus}
                              style={{ fontSize: "20px" }}
                            />
                          </button>
                          <span className="spanmany">{item.itemCounter}</span>
                          <button
                            // onClick={
                            //   () => {
                            //     item.itemCounter >= 1 ? item.itemCounter - 1 : 0;
                            //   }
                            // }
                          >
                            <FontAwesomeIcon
                              icon={faSquarePlus}
                              style={{ fontSize: "20px" }}
                            />
                          </button>
                        </td>
                        <td>
                          <button onClick={() => delItem(item.idx)}>
                            <FontAwesomeIcon
                              icon={faXmark}
                              style={{ fontSize: "20px" }}
                            />
                          </button>
                          <p>무료배송</p>
                          <Link to={"/pay/" + item.idx}>
                            <button type="button">바로구매</button>
                          </Link>
                        </td>
                      </tr>
                    )
                  }
                )
              }
              
              <tr>
                <td colSpan="6">
                  상품금액 {basicPrice}원 - 할인금액 + 배송비 {shipfee.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} = 0원
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className='cartContent-right'>
        <div className="cart-pay-title">
          <h2>결제 예정 내역</h2>
        </div>
        <div className="user-address">
          <h3>배송지</h3>
          <span>{userInfo.address}</span>
        </div>
        <div className='cart-to-pay'>
          <div className='point'>
            <h3>적립혜택</h3>
            <span>
              적립예정 <b>{basicPoint}</b>P
            </span>
          </div>
          <div className='payment'>
            <h3>결제 예정금액</h3>
            <div className='product-price'>
              <h4>상품 금액</h4>
              <span>{price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</span>
            </div>
            <div className='ship-fee'>
              <h4>배송비</h4>
              <span>{shipfee.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</span>
            </div>
            <div className='discount'>
              <h4>할인 금액</h4>
              <span className="discount-price">0원</span>
            </div>
            <div className='total-price'>
              <h4>합계</h4>
              <span className="total">
                <b>{basicTotalPrice}</b>원
              </span>
            </div>
          </div>
          <div className="cart-btn-wrap">
            <Link to={"/pays"} state={{basicPoint, basicPrice, basicTotalPrice}}>
              <button className='cart-pay-btn'>
                주문하기
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart;
