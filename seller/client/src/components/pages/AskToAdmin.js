import '../css/pages/AskToAdmin.css';
import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function Ask() {
  //입력받은 값
  const [askCategory, setAskCg] = useState('');
  const [askTitle, setAskTitle] = useState('');
  const [askWriter, setAskWriter] = useState('');
  const [askImage, setAskImage] = useState('');
  const [askContents, setAskContents] = useState('');

  const [isCategory, setIsAskCg] = useState(false);
  const [isTitle, setIsAskTitle] = useState(false);
  const [isWriter, setIsAskWriter] = useState(false);
  const [isAskImage, setIsAskImage] = useState(false);
  const [isContent, setIsAskContents] = useState(false);

  const navigate = useNavigate();

  async function frmHandler(e) {
    e.preventDefault();

    if (isCategory && isTitle && isWriter && isAskImage && isContent == true) {
      let formData = new FormData();
      formData.append('askCategory', askCategory);
      formData.append('askTitle', askTitle);
      formData.append('askWriter', askWriter);
      formData.append('askImage', askImage);
      formData.append('askContents', askContents);

      await axios
        .post('http://localhost:4001/ask', formData)
        .then((response) => {
          if (response.data.status === 201) {
            window.alert(response.data.message);
            localStorage.setItem('askCategory', response.data.askCategory);
            localStorage.setItem('askTitle', response.data.askTitle);
            localStorage.setItem('askWriter', response.data.askWriter);
            localStorage.setItem('askImage', response.data.askImage);
            localStorage.setItem('askContents', response.askContents);

            navigate('help');
          } else {
            window.alert('에러발생 : 관리자에게 문의하세요');
            navigate('/');
          }
        });
    } else {
      alert('입력하신 정보를 다시 확인해주세요.');
    }
  }
  function onChangeAskCg(e) {
    const askCgCurrent = e.target.value;
    setAskCg(askCgCurrent);

    if (askCgCurrent == null) {
      setIsAskCg(false);
    } else {
      setIsAskCg(true);
    }
  }

  function onChangeAskTitle(e) {
    const askTitleCurrent = e.target.value;
    setAskTitle(askTitleCurrent);

    if (askTitleCurrent == null) {
      setIsAskTitle(false);
    } else {
      setIsAskTitle(true);
    }
  }
  function onChangeAskWriter(e) {
    const askWriterCurrent = e.target.value;
    setAskWriter(askWriterCurrent);

    if (askWriterCurrent == null) {
      setIsAskWriter(false);
    } else {
      setIsAskWriter(true);
    }
  }
  function onChangeAskImage(e) {
    const askImageCurrent = e.target.files[0];
    setAskImage(askImageCurrent);

    if (askImageCurrent == null) {
      setIsAskImage(false);
    } else {
      setIsAskImage(true);
    }
  }
  function onChangeAskContents(e) {
    const askContentsCurrent = e.target.value;
    setAskContents(askContentsCurrent);

    if (askContentsCurrent == null) {
      setIsAskContents(false);
    } else {
      setIsAskContents(true);
    }
  }
  return (
    <div className='ask-con'>
      <form method='post' encType='multipart/form-data' onSubmit={frmHandler}>
        <div className='ask-wrap'>
          <div>카테고리</div>
          <select name='askCategory' id='ask-opt' onChange={onChangeAskCg}>
            <option value=''>어떤 문의인가요?</option>
            <option value='1'>주문관련문의</option>
            <option value='2'>결제관련문의</option>
            <option value='3'>배송관련문의</option>
            <option value='4'>환불관련문의</option>
            <option value='5'>계정관련문의</option>
          </select>
          <div>제목 </div>
          <input type='text' name='askTitle' onChange={onChangeAskTitle} />
          <div>작성자</div>
          <input type='text' name='askWriter' onChange={onChangeAskWriter} />
          <div>이미지 첨부</div>
          <input
            className='askimage'
            type='file'
            name='askImage'
            onChange={onChangeAskImage}
          />
          <div>본문</div>
          <textarea
            name='askContents'
            id=''
            cols='100'
            rows='25'
            onChange={onChangeAskContents}
          ></textarea>
          <div>
            <button type='submit'>작성완료</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Ask;
