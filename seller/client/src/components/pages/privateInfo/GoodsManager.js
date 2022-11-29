import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Paging from '../../function/Paging';
import '../../css/pages/GoodsManager.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,
  faPenToSquare,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';

function GoodsManager() {
  const [items, setItems] = useState([]);
  const [rows, setRows] = useState(0);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(0);
  const [offset, setOffset] = useState(9);
  const [select, setSelect] = useState('');
  const [searchWords, setSearchWords] = useState('');
  const [keyword, setKeyword] = useState('');
  const [msg, setMsg] = useState('');

  const navigate = useNavigate();

  async function goodsManager() {
    await axios
      .get(
        'http://localhost:4001/goodsManager?page=' +
          page +
          '&offset=' +
          offset +
          '&select=' +
          select +
          '&searchQuery=' +
          keyword
      )
      .then((response) => {
        setItems(response.data.items);
        setPage(response.data.page);
        setPages(response.data.totalPageNum);
        setRows(response.data.totalRows);
        console.log(response);
      });
  }

  useEffect(() => {
    goodsManager();
  }, [page, keyword]);

  async function deleteItem(idx) {
    await axios
      .delete('http://localhost:4001/delete/' + idx)
      .then((response) => {
        if (response.data.status === 201) {
          window.alert(response.data.message);
          goodsManager();
        } else {
          window.alert('상품삭제 에러');
        }
      });
  }

  const goodsSearch = (e) => {
    e.preventDefault();
    setKeyword(searchWords);
    setPage(1);
    setSearchWords('');
  };

  const changePage = (page) => {
    setPage(page);
    if (page === pages) {
      setMsg('No More Data');
    } else {
      setMsg('');
    }
  };

  return (
    <div className='goodsManager-container'>
      <h2>Product List</h2>
      <div className='tableList'>
        <div className='tableListTop'>
          <div className='topLeft'>
            <div className='searchWrap'>
              <form method='post' id='frm' onSubmit={goodsSearch}>
                <div className='goodsSearch'>
                  <select
                    id='goods'
                    className='goods'
                    name='goodsSearch'
                    onchange={(e) => setSelect(e.target.value)}
                  >
                    <option value='' selected disabled>
                      선택하세요
                    </option>
                    <option value='itemname'>상품명</option>
                    <option value='category'>카테고리</option>
                    <option value='price'>가격</option>
                    <option value='regdate'>등록일</option>
                  </select>
                  <input
                    type='text'
                    id='search'
                    className='search'
                    name='search'
                    placeholder='Input Search Word'
                    onChange={(e) => setSearchWords(e.target.value)}
                  />
                  <button type='submit'>
                    <FontAwesomeIcon
                      className='searchBtn'
                      icon={faMagnifyingGlass}
                    />
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className='topRight'>
            <Link to='/AdminPage/addItem'>
              <button type='submit' className='addgoodsBtn'>
                Add Item
              </button>
            </Link>
          </div>
        </div>
        <div className='tblWrap'>
          <table className='goodsList'>
            <tr>
              <th>No</th>
              <th>Image</th>
              <th>ItemName</th>
              <th>Price</th>
              <th>Regdate</th>
              <th>Mod / Del</th>
            </tr>
            {items.map((item, key) => {
              return (
                <tr key={key}>
                  <td>{item.idx}</td>
                  <td style={{ height: '50px' }}>
                    <Link
                      to={`/detail/${item.idx} / ${item.categoryCode1} /${item.categoryCode2}`}
                    >
                      <img
                        src={`http://localhost:4001/${item.attach}`}
                        alt={item.attach}
                        className='itemImage'
                      />
                    </Link>
                  </td>
                  <td className='itemNameLink'>
                    <Link
                      to={`/detail/${item.idx} / ${item.categoryCode1} /${item.categoryCode2}`}
                    >
                      {item.itemname}
                    </Link>
                  </td>
                  <td>
                    {parseInt(item.price)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    원
                  </td>
                  <td>{item.regdate}</td>
                  <td>
                    <Link to={'/adminPage/updateItem/' + item.idx}>
                      <button>
                        <FontAwesomeIcon
                          className='itemModi'
                          icon={faPenToSquare}
                        />
                      </button>
                    </Link>
                    <button onClick={() => deleteItem(item.idx)}>
                      <FontAwesomeIcon className='itemDel' icon={faTrash} />
                    </button>
                  </td>
                </tr>
              );
            })}
          </table>

          <p className='danger'>{msg}</p>
          <div className='paging'>
            <Paging
              page={page}
              offset={offset}
              rows={rows}
              setPage={changePage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GoodsManager;
