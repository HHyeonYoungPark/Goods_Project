import React from 'react';

function Navbar() {
  return (
    <div className='nav-wrap'>
      <div className='Lnav-wrap'>
        <div>상품제작</div>
        <div>상품등록</div>
        <div>판매현황</div>
      </div>
      <div className='Rnav-wrap'>문의하기</div>
    </div>
  );
}

export default Navbar;
