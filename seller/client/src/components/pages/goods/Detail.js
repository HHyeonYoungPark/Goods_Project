import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/pages/Detail.css';
import image from '../../images/phone.jpg';

function Detail() {
  return (
    <div className='detail-con'>
      <div className='right-pay-sticky'>
        <h3>비슷한 상품</h3>
        <div className='similar-item'>
          <ul>
            <li>투명젤리 케이스</li>
            <li>투명젤리 케이스</li>
            <li>투명젤리 케이스</li>
            <li>투명젤리 케이스</li>
            <li>투명젤리 케이스</li>
            <li>투명젤리 케이스</li>
            <li>투명젤리 케이스</li>
            <li>투명젤리 케이스</li>
            <li>투명젤리 케이스</li>
            <li>투명젤리 케이스</li>
            <li>투명젤리 케이스</li>
            <li>투명젤리 케이스</li>
            <li>투명젤리 케이스</li>
            <li>투명젤리 케이스</li>
            <li>투명젤리 케이스</li>
            <li>투명젤리 케이스</li>
            <li>투명젤리 케이스</li>
            <li>투명젤리 케이스</li>
            <li>투명젤리 케이스</li>
            <li>투명젤리 케이스</li>
            <li>투명젤리 케이스</li>
            <li>투명젤리 케이스</li>
            <li>투명젤리 케이스</li>
            <li>투명젤리 케이스</li>
          </ul>
        </div>
        <div className='cartorpay'>
          <div className='howmayprice'>
            <p> 총 0개 </p>
            <h2>0원</h2>
          </div>
          <div>
            <p>적용가능한 쿠폰 없음</p> <button>쿠폰 변경</button>
          </div>
          <div>
            <p>무료배송</p>
          </div>
          <div>
            <button>장바구니</button>
            <button>구매하기</button>
          </div>
        </div>
      </div>
      <div className='detail-top-con'>
        <div className='detailimg-con'>
          <img src={image} alt='' />
        </div>
        <div className='detail-title-con'>
          <div>
            리뷰 별 나오는 부분<button>리뷰보기</button>
          </div>
          <h4>무료 당일 배송 3+1 구성</h4>
          <h2>
            달고나폰 1+3 투명 젤리 케이스 아이폰14 갤럭시 S22 z플립4 폴드4
            애플워치 갤럭시워치 호환 스트랩
          </h2>
          <h1>
            3890원~{' '}
            <span>
              <small>3900원</small>
            </span>
          </h1>

          <h4>무료배송</h4>
          <p>15까지 주문 시 오늘발송</p>
          <p>
            내일 11/18일 도착예정<span>?</span>
          </p>
          <p>CJ 대한통운</p>
          <h4>혜택</h4>
          <p>SK pay point 최대 194P 적립 ( 쇼킹 194P )</p>
          <p>2개 이상 구매시 개당 500원 할인</p>
          <p>11번가 신한카드 첫 결제할인 + 최대 2% 적립</p>
          <p>[광고] 무료포인트적립쿠폰 : 1장 [쿠폰받기]</p>
        </div>
      </div>
      <div className='detail-bottom-wrap'>
        <navigator className='detail-nav-wrap'>
          <div>상품정보</div>
          <div>리뷰</div>
          <div>Q&A</div>
          <div>판매자정보</div>
        </navigator>
        <table>
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
            <td>판매자에게 문의</td>
            <td> </td>
            <td></td>
          </tr>
          <tr>
            <td>A/S안내</td>
            <td>
              010-7655-5695 상담시간 : 13:00 ~ 17:00 (통화가 어려울 경우
              톡톡으로 메시지 남겨주세요.) 구매 후 7일 이내 교환 또는 반품이
              가능합니다. 제품 수령 후 포장제 및 상품의 가치가 훼손된 경우 반품
              또는 교환이 불가합니다. 주문 제작 상품의 경우 단순 변심에 의한
              반품, 교환이 불가합니다.
            </td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Detail;
