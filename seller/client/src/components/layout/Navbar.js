import React from 'react';
import { useNavigate,Link } from 'react-router-dom';
import '../css/layout/Navbar.css';

function Navbar() {
  return (
    <div className='Nav-container'>
      <div className='nav-wrap'>
        <div className='Lnav-wrap'>
          <div className='make'>
          <Link to ='/'>상품제작</Link> 
          </div>
          <div>
          <Link to ='/'>상품등록</Link> 
          </div>
          <div>
          <Link to ='/'>주문현황</Link> 
          </div>
          <div>
          <Link to ='/'>공지사항</Link> 
          </div>
          <div>
          <Link to ='/'>둘러보기</Link> 
          </div>
        </div>
        <div className='Rnav-wrap'>
          <Link to ='/help'>문의하기</Link> 
        </div>
      </div>
    </div>
  );
}

export default Navbar;
