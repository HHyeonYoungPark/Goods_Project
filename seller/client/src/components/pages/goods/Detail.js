import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/pages/Notice.css';
import image from '../../images/phone.jpg';

function Detail() {
  return (
    <div>
      <div>
        <img src={image} alt='' />
        <div>
          <h4>무료 당일 배송 3+1 구성</h4>
          <h2>
            달고나폰 1+3 투명 젤리 케이스 아이폰14 갤럭시 S22 z플립4 폴드4
            애플워치 갤럭시워치 호환 스트랩
          </h2>
          <h1>3890원~</h1>
          <span>
            <small>3900원</small>
          </span>
          <h4>무료배송</h4>
          <p>15까지 주문 시 오늘발송</p> 
          <p>내일 11/18일 도착예정</p><span>?</span>
          <p>CJ 대한통운</p>
        </div>
      </div>
    </div>
  );
}

export default Detail;
