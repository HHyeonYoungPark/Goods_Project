import '../css/pages/AskToAdmin.css';
import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';

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

const fileStyle = {
  padding: "9px",
  height: "9px",
  border: "2px solid gray"
}

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
      <h2>판매자 고객센터</h2>
      <small>
        정훈희님 지식공유 플랫폼 OKKY에서 최고의 개발자들과 함께 궁금증을
        해결하세요.
      </small>
      <form method='post' encType='multipart/form-data' onSubmit={frmHandler}>
        <div className='ask-wrap'>
          <p> 카테고리</p>
          <select name='askCategory' id='ask-opt' onChange={onChangeAskCg}>
            <option value=''>어떤 문의인가요?</option>
            <option value='1'>주문관련문의</option>
            <option value='2'>결제관련문의</option>
            <option value='3'>배송관련문의</option>
            <option value='4'>환불관련문의</option>
            <option value='5'>계정관련문의</option>
          </select>
          <p>제목 </p>
          <input
            type='text'
            name='askTitle'
            placeholder='제목을 입력해주세요.'
            onChange={onChangeAskTitle} 
          />
          <p>작성자</p>
          <input
            type='text'
            name='askWriter'
            placeholder='작성자명을 입력해주세요.'
            onChange={onChangeAskWriter}
          />
          <p>이미지 첨부</p>
            <Form.Group controlId='formFileMultiple' className='mb-3'>
              <Form.Control
                type='file'
                name='askImage'
                onChange={onChangeAskImage}
                multiple
                size='lg'
                style={fileStyle}
              />
            </Form.Group>
          <p>본문</p>
          <textarea
            name='askContents'
            id=''
            cols='111'
            rows='15'
            style={{resize:"none"}}
            onChange={onChangeAskContents}
          ></textarea>
          <div>
            <button type='submit' className='ask-btn'>
              작성완료
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Ask;
