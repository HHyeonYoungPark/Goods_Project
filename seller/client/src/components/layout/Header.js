import React from 'react';
import logo from '../images/logo.png';
import { useNavigate,Link } from 'react-router-dom';
import '../css/layout/Header.css';
function Header() {
  return (
    <div className='header-con'>
      <div className='image'>
        <img src={logo} alt='logo' />
      </div>
      <div className='R-head'>
      <Link to ='/login'>로그인</Link>
      <Link to ='/regist'>회원가입</Link>
      </div>
    </div>
  );
}

export default Header;
