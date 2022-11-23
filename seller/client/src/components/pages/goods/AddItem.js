import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import '../../css/pages/AddItem.css';
import $ from 'jquery';

function AddItem() {
  const [itemname, setItemname] = useState('');
  const [category, setCategory] = useState('');
  const [categoryCode, setCategoryCode] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [attach, setAttach] = useState('');
  const [attach2, setAttach2] = useState('');
  const [attach3, setAttach3] = useState('');
  const [contents, setContents] = useState('');
  const [madein, setMadein] = useState('');

  const navigate = useNavigate();

  async function frmHandler(e) {
    e.preventDefault();
    let formData = new FormData();

    formData.append('itemname', itemname);
    formData.append('category', category);
    formData.append('categoryCode', categoryCode);
    formData.append('price', price);
    formData.append('stock', stock);
    formData.append('attach', attach);
    formData.append('attach2', attach2);
    formData.append('attach3', attach3);
    formData.append('contents', contents);
    formData.append('madein', madein);

    await axios
      .post('http://localhost:4001/addItem', formData)
      .then((response) => {
        if (response.data.status === 201) {
          window.alert(response.data.message);
          navigate('/AdminPage/goodsManager');
        } else {
          window.alert('상품등록 실패!');
          navigate('/AdminPage/goodsManager');
        }
      });
  }

  function cate1() {
    let a = '<option>카테고릳ㅈㄷㅈㄷㅈ를 선택하세요.</option>';
    $.ajax({
      url: 'http://localhost:4001/getCate1',
      method: 'post',
      contentType: 'application/json',

      success: function (result) {
        for (let i = 0; i < result.length; i++) {
          a +=
            '<option value=' +
            result[i].category1 +
            '>' +
            result[i].category1 +
            '</option>';
        }
        console.log(result);

        $('#cate1').html(a);
        console.log(a);
      },
    });
  }
  useEffect(() => {
    cate1();
  }, []);

  function cate2(cate1) {
    alert(cate1);
    let a = '<option> 세부 카테고리를 지정해주세요.</option>';
    $.ajax({
      url: 'http://localhost:4001/getCate2',
      method: 'post',
      contentType: 'application/json',
      data: JSON.stringify({
        cate1,
      }),
      success: function (result) {
        console.log(result);
        for (let i = 0; i < result.length; i++) {
          a +=
            '<option value =' +
            result[i].category2 +
            '>' +
            result[i].category2 +
            '</option>';
        }
        $('#cate2').html(a);
      },
    });
  }

  return (
    <div className='addItem-comtainer'>
      <div className='addItem-wrap'>
        <div className='addItem-title'>
          <h1>상품등록</h1>
        </div>
        <form method='post' encType='multipart/form-data' onSubmit={frmHandler}>
          <div className='addItem'>
            <h3>상품 기본정보 입력</h3>
            <table>
              <tr>
                <th>상품명</th>
                <td>
                  <input
                    type='text'
                    name='itemname'
                    onChange={(e) => {
                      setItemname(e.target.value);
                    }}
                  />
                </td>
              </tr>
              <tr>
                <th>상품 분류</th>
                <td>
                  <select
                    name='cate1'
                    id='cate1'
                    onChange={(e) => {
                      setCategory(e.target[e.target.selectedIndex].text);
                      setCategoryCode(e.target.value);
                      cate2(e.target.value);
                    }}
                  >
                    <option value=''>카테고리를 선택하세요</option>
                    <option value=''></option>
                    <option value=''></option>
                    <option value=''></option>
                    <option value=''></option>
                    <option value=''></option>
                  </select>
                  <select
                    name='cate2'
                    id='cate2'
                    onChange={(e) => {
                      setCategory(e.target[e.target.selectedIndex].text);
                      setCategoryCode(e.target.value);
                    }}
                  >
                    <option value=''>세부 카테고리를 선택하세요</option>
                  </select>
                </td>
                <input type='hidden' name='categoryCode' value={categoryCode} />
              </tr>
              <tr>
                <th>가격</th>
                <td>
                  <input
                    type='text'
                    name='price'
                    placeholder="'원' 제외"
                    onChange={(e) => {
                      setPrice(e.target.value);
                    }}
                  />
                </td>
              </tr>
              <tr>
                <th>재고</th>
                <td>
                  <input
                    type='text'
                    name='stock'
                    placeholder="'개' 제외"
                    onChange={(e) => {
                      setStock(e.target.value);
                    }}
                  />
                </td>
              </tr>
              <tr>
                <th>이미지</th>
                <td>
                  메인이미지:
                  <input
                    className='itemImage'
                    type='file'
                    name='attach'
                    multiple
                    onChange={(e) => {
                      setAttach(e.target.files[0]);
                    }}
                  />
                  <br></br>서브이미지1:
                  <input
                    className='itemImage'
                    type='file'
                    name='attach2'
                    multiple
                    onChange={(e) => {
                      setAttach2(e.target.files[0]);
                    }}
                  />
                  <br></br>서브이미지2:
                  <input
                    className='itemImage'
                    type='file'
                    name='attach3'
                    multiple
                    onChange={(e) => {
                      setAttach3(e.target.files[0]);
                    }}
                  />
                </td>
              </tr>
              <tr>
                <th>상품 상세설명</th>
                <td>
                  <textarea
                    name='contents'
                    className='item-contents'
                    onChange={(e) => {
                      setContents(e.target.value);
                    }}
                  ></textarea>
                </td>
              </tr>
              <tr>
                <th>원산지</th>
                <td>
                  <input
                    type='text'
                    name='madein'
                    onChange={(e) => {
                      setMadein(e.target.value);
                    }}
                  />
                </td>
              </tr>
            </table>
          </div>
          <div className='submit-btn'>
            <button className='list-btn'>
              <Link to='/AdminPage/goodsManager'>돌아가기</Link>
            </button>
            <input type='submit' value='상품등록' />
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddItem;
