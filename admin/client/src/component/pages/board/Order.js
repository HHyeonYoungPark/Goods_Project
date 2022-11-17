import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../css/pages/Order.css";
import { ko } from "date-fns/esm/locale";
import Form from "react-bootstrap/Form";

function Order() {
  // const [startDate, setStartDate] = useState(new Date());
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const dateStyle = {
    width: "250px",
    margin: "10px 0 0 40px ",
    resize: "none",
  };
  return (
    <div className="order-con">
      <h1>전체주문관리</h1>
      <hr />
      <h3>전체주문 검색</h3>
      <table>
        <tr>
          <td>주문검색</td>
          <td>
            <select name="O-search" id="">
              <option value="O-search">주문번호</option>
              <option value="O-search">고객명</option>
              <option value="O-search">상품명</option>
              <option value="O-search">주문일자</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>주문상태</td>
          <td>
            <input type="radio" name="O-status" id="first1" />
            <span>주문접수</span>
            <input type="radio" name="O-status" id="" />
            <span>결제확인중</span>
            <input type="radio" name="O-status" id="" />
            <span>결제확인</span>
            <input type="radio" name="O-status" id="" />
            <span>상품준비중</span>
            <input type="radio" name="O-status" id="" />
            <span>배송준비중</span>
            <input type="radio" name="O-status" id="" />
            <span>배송중</span>
            <input type="radio" name="O-status" id="" />
            <span>배송완료</span>
            <input type="radio" name="O-status" id="" />
            <span>거래완료</span>
            <input type="radio" name="O-status" id="" />
            <span>반송중</span>
            <input type="radio" name="O-status" id="" />
            <span>주문취소중</span>
          </td>
        </tr>
        <tr>
          <td>처리일자</td>
          <td>
            <select name="O-date" id="">
              <option>배송시작일</option>
              <option>배송완료일</option>
              <option>주문일</option>
              <option>반송일</option>
            </select>
            <DatePicker
              selectsRange={true}
              startDate={startDate}
              endDate={endDate}
              locale={ko}
              placeholderText="검색할 기간을 선택하세요"
              customInput={
                <Form.Control as="textarea" rows={1} style={dateStyle} />
              }
              onChange={(update) => {
                setDateRange(update);
              }}
              withPortal
            />
          </td>
          {/* 1일 1주일 1달 버튼 넣어보자... */}
        </tr>
        <tr>
          <td>결제방법</td>
          <td>
            <input type="radio" name="O-pay" id="first2" />
            <span>신용카드</span>
            <input type="radio" name="O-pay" id="" />
            <span>가상계좌</span>
            <input type="radio" name="O-pay" id="" />
            <span>무통장입금</span>
            <input type="radio" name="O-pay" id="" />
            <span>살시간계좌</span>
            <input type="radio" name="O-pay" id="" />
            <span>휴대폰</span>
          </td>
        </tr>
      </table>
      <div>
        <button className="O-search">검색</button>
        <button className="O-reset">초기화</button>
      </div>
    </div>
  );
}

export default Order;
