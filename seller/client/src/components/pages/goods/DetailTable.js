import React from "react";

function DetailTable() {
  return (
   
    
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
            010-7655-5695 상담시간 : 13:00 ~ 17:00 (통화가 어려울 경우 톡톡으로
            메시지 남겨주세요.) 구매 후 7일 이내 교환 또는 반품이 가능합니다.
            제품 수령 후 포장제 및 상품의 가치가 훼손된 경우 반품 또는 교환이
            불가합니다. 주문 제작 상품의 경우 단순 변심에 의한 반품, 교환이
            불가합니다.
          </td>
        </tr>
      </table>
    
  );
}
export default DetailTable;
