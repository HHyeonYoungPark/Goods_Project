import React from 'react';
import '../css/layout/Navbar.css';

function Navbar() {
  return (
    <div className='Nav-container'>
      <div className='nav-wrap'>
        <div className='Lnav-wrap'>
          <div>
            <button> 상품제작</button>
          </div>
          <div>
            <button> 상품등록</button>
          </div>
          <div>
            <button> 판매현황</button>
          </div>
        </div>
        <div className='Rnav-wrap'>
          <button>문의하기</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
