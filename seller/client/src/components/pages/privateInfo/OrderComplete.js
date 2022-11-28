import React from "react";
import "../../css/pages/OrderComplete.css";
import receipt from "../../images/receipt.png";

function OrderComplete() {
  return (
    <div className="orderComplete-container">
      <div className="complete-title">
        <h1>주문완료!</h1>
      </div>
      <div className="complete-image">
        <img src={receipt} alt={receipt} />
      </div>
      <div className="complete-message">
        <p style={{ marginBottom: "10px" }}>주문이 완료되었습니다!</p>
        <p>자세한 사항은 나의 주문내역에서 확인해보세요.</p>
      </div>
      <div className="complete-btn">
        <button>
          <b>나의 주문내역</b>
        </button>
      </div>
    </div>
  );
}

export default OrderComplete;
