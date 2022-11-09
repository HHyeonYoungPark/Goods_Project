import React from 'react';
import logo from '../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import { useNavigate, Link } from 'react-router-dom';
import '../css/layout/Header.css';
function Header({ user }) {
  return (
    <div className='header-con'>
      <div className='image'>
        <Link to='/'>
          <img src={logo} alt='logo' />
        </Link>
      </div>
      <div className='search-bar'>
        <input type='text' className='search-bar__input' />
        <FontAwesomeIcon icon ={faMagnifyingGlass}/>
      </div>
      <div className='R-head'>
        {!user && (
          <>
            <Link to='/login'>로그인</Link>
            <Link to='/regist'>회원가입</Link>
          </>
        )}
        {user && (
          <>
            <Link to='/logout'>로그아웃</Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
