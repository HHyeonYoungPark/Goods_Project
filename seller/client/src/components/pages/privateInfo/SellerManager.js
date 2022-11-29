import { faMagnifyingGlass, faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../css/pages/SellerManager.css";
import Paging from "../../function/Paging";

function SellerManager() {
  const [seller, setSeller] = useState([]);
  const [rows, setRows] = useState(0);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(0);
  const [offset, setOffset] = useState(10);
  const [select, setSelect] = useState("");
  const [searchWords, setSearchWords] = useState("");
  const [keyword, setKeyword] = useState("");
  const [msg, setMsg] = useState("");
  
  async function sellerManager() {
    await axios.get("http://localhost:4001/sellerManager?page=" +
    page +
    "&offset=" +
    offset +
    "&select=" +
    select +
    "&searchQuery=" +
    keyword).then((response) => {
      setSeller(response.data.users);
      setPage(response.data.page);
      setPages(response.data.totalPageNum);
      setRows(response.data.totalRows);
      console.log(response);
    });
  }

  useEffect(() => {
    sellerManager();
  }, [page, keyword]);

  async function deleteSeller(idx) {
    await axios
      .delete("http://localhost:4001/deleteSeller/" + idx)
      .then((response) => {
        if (response.data.status === 201) {
          window.alert(response.data.message);
          sellerManager();
        } else {
          window.alert("판매자 삭제 에러");
        }
      });
  }

  const sellerSearch = (e) => {
    e.preventDefault();
    setKeyword(searchWords);
    setPage(1);
    setSearchWords("");
  };

  const changePage = (page) => {
    setPage(page);
    if (page === pages) {
      setMsg("No More Data");
    } else {
      setMsg("");
    }
  };

  return (
    <div className="sellerManagerContainer">
      <h2>Seller Manager</h2>
      <div className="sellerList">
        <div className="sellerListTop">
          <div className="topLeft">
            <div className="searchWrap">
              <form method="post" id="frm" onSubmit={sellerSearch}>
                <div class="sellerSearch">
                  <select
                    id="seller"
                    className="seller"
                    name="sellerSearch"
                    onchange={(e) => setSelect(e.target.value)}
                  >
                    <option value="" selected disabled>선택하세요</option>
                    <option value="id">아이디</option>
                    <option value="email">이메일</option>
                    <option value="regdate">가입일</option>
                  </select>
                  <input
                    type="text"
                    name="search"
                    id="search"
                    className="search"
                    placeholder="Input Search Word"
                    onChange={(e) => setSearchWords(e.target.value)}
                  />
                  <button type="submit">
                    <FontAwesomeIcon
                      className="searchBtn"
                      icon={faMagnifyingGlass}
                    />
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="topRightBtn">
            <Link to="/AdminPage/CustomerManager">
              <button>Customer</button>
            </Link>
          </div>
        </div>
        <div className="tblWrap">
          <table className="sellerListTb">
            <tr>
              <th>No</th>
              <th>ID</th>
              <th>SellerName</th>
              <th>ChannelName</th>
              <th>channelPlatform</th>
              <th>Grade</th>
              <th>Regdate</th>
              <th>Mod / Del</th>
            </tr>
            {
              seller.map((sel, key) => {
                return(
                  <tr key={key}>
                    <td>{sel.idx}</td>
                    <td>{sel.id}</td>
                    <td>{sel.sellername}</td>
                    <td>{sel.channelname}</td>
                    <td>{sel.channelPlatform}</td>
                    <td>{sel.grade}</td>
                    <td>{sel.regdate}</td>
                    <td>
                      <Link to="#">
                        <button>
                          <FontAwesomeIcon
                            className="sellerModi"
                            icon={faPenToSquare}
                          />
                        </button>
                      </Link>
                      <button
                        onClick={() => deleteSeller(sel.idx)}
                      >
                        <FontAwesomeIcon className="selDel" icon={faTrash} />
                      </button>
                    </td>
                  </tr>
                )
              })
            }
          </table>
          
          <p className="danger">{msg}</p>
          <div className="paging">
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

export default SellerManager;
