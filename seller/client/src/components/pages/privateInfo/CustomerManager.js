import { faMagnifyingGlass, faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../css/pages/CustomerManager.css";
import Paging from "../../function/Paging";

function CustomerManager() {
  const [customer, setCustomer] = useState([]);
  const [rows, setRows] = useState(0);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(0);
  const [offset, setOffset] = useState(10);
  const [select, setSelect] = useState("");
  const [searchWords, setSearchWords] = useState("");
  const [keyword, setKeyword] = useState("");
  const [msg, setMsg] = useState("");
  
  async function customerManager() {
    await axios.get("http://localhost:4001/customerManager?page=" +
    page +
    "&offset=" +
    offset +
    "&select=" +
    select +
    "&searchQuery=" +
    keyword).then((response) => {
      setCustomer(response.data.users);
      setPage(response.data.page);
      setPages(response.data.totalPageNum);
      setRows(response.data.totalRows);
      console.log(response);
    });
  }

  useEffect(() => {
    customerManager();
  }, [page, keyword]);

  async function deleteCustomer(idx) {
    await axios
      .delete("http://localhost:4001/deleteCustomer/" + idx)
      .then((response) => {
        if (response.data.status === 201) {
          window.alert(response.data.message);
          customerManager();
        } else {
          window.alert("구매자 삭제 에러");
        }
      });
  }

  const customerSearch = (e) => {
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
    <div className="customerManagerContainer">
      <div className="customerList">
        <h1>구매자 회원 관리</h1>
        <div className="customerListTop">
          <div className="topLeft">
            <div className="searchWrap">
              <form method="post" id="frm" onSubmit={customerSearch}>
                <div class="customerSearch">
                  <select
                    id="customer"
                    className="customer"
                    name="customerSearch"
                    onchange={(e) => setSelect(e.target.value)}
                  >
                    <option value="" selected disabled>선택하세요</option>
                    <option value="id">아이디</option>
                    <option value="email">이메일</option>
                    <option value="name">이름</option>
                  </select>
                  <input
                    type="text"
                    name="search"
                    id="search"
                    className="search"
                    placeholder="Input Search Word"
                    onChange={(e) => setSearchWords(e.target.value)}
                    required
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
          <div className="topRight">
            <Link to="/AdminPage/SellerManager">
              <button>판매자 회원관리</button>
            </Link>
          </div>
        </div>
        <div className="tblWrap">
          <table className="customerListTb">
            <tr>
              <th>No</th>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Address</th>
              <th>Regdate</th>
              <th>Mod / Del</th>
            </tr>
            {
              customer.map((cus, key) => {
                return(
                  <tr key={key}>
                    <td>{cus.idx}</td>
                    <td>{cus.id}</td>
                    <td>{cus.name}</td>
                    <td>{cus.email}</td>
                    <td>{cus.mobile}</td>
                    <td>{cus.address1}</td>
                    <td>{cus.regdate}</td>
                    <td>
                      <Link to="#">
                        <button>
                          <FontAwesomeIcon
                            className="customerModi"
                            icon={faPenToSquare}
                          />
                        </button>
                      </Link>
                      <button
                        onClick={() => deleteCustomer(cus.idx)}
                      >
                        <FontAwesomeIcon className="cusDel" icon={faTrash} />
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

export default CustomerManager;
