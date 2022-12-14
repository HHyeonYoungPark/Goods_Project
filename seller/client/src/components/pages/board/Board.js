import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import Paging from "../../function/Paging";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import "../../css/pages/BoardSon.css";

const Board = () => {
  const [lists, setLists] = useState([]);
  const [rows, setRows] = useState(0);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(0);
  const [offset, setOffset] = useState(10);
  const [select, setSelect] = useState("");
  const [searchWords, setSearchWords] = useState("");
  const [keyword, setKeyword] = useState("");
  const [msg, setMsg] = useState("");

  const location = useLocation();

  const boardName = location.state.boardName || location.state;

  console.log(location);

  const { boardCode } = useParams();
  // console.log(boardName);
  const getLists = async () => {
    await axios
      .get(
        "http://localhost:4001/board?boardCode=" +
          boardCode +
          "&page=" +
          page +
          "&offset=" +
          offset +
          "&select=" +
          select +
          "&searchQuery=" +
          keyword
      )
      .then((res) => {
        setLists(res.data.lists);
        setPage(res.data.page);
        setPages(res.data.totalPageNum);
        setRows(res.data.totalRows);
      });
  };

  useEffect(() => {
    getLists();
  }, [boardName, boardCode, page, keyword]);

  async function deleteList(idx) {
    await axios
      .delete("http://localhost:4001/delete/" + boardCode + "/" + idx)
      .then((res) => {
        if (res.data.status === 201) {
          window.alert(res.data.message);
          getLists();
        } else {
          window.alert("Delete Failed");
        }
      });
  }

  const listSearch = (e) => {
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
    <div className="brdSonContainer">
      <h2>{boardName}</h2>
      <div className="brdSonList">
        <div className="brdSonBox">
          <div className="topLeft">
            <div className="searchWrap">
              <form method="post" id="frm" onSubmit={listSearch}>
                <div className="listSearch">
                  <select
                    id="listSearch"
                    className="list"
                    name="listSearch"
                    onChange={(e) => setSelect(e.target.value)}
                  >
                    <option value="" selected disabled>
                      ???????????????
                    </option>
                    <option value="idx">??????</option>
                    <option value="title">??????</option>
                    <option value="writer">?????????</option>
                  </select>
                  <input
                    type="text"
                    id="search"
                    className="search"
                    name="search"
                    onChange={(e) => setSearchWords(e.target.value)}
                    value={searchWords}
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
          <div className="BoardTopRight">
            <Link
              to={"/adminPage/board/" + boardCode + "/write"}
              state={{ boardName: boardName }}
            >
              {" "}
              <button>????????? ??????</button>
            </Link>
          </div>
        </div>
        <div className="tblWrap">
          <table className="brdListTb">
            <tr>
              <th>??????</th>
              <th>??????</th>
              <th>?????????</th>
              <th>?????????</th>
              <th>?????????</th>
              <th>??????</th>
            </tr>

            {lists.map((list, key) => {
              return (
                <tr key={key}>
                  <td>{list.idx}</td>
                  <td>
                    <Link
                      to={"/adminPage/board/" + boardCode + "/" + list.idx}
                      state={{ boardName: boardName }}
                    >
                      {list.title}
                    </Link>
                  </td>
                  <td>{list.writer}</td>
                  <td>{list.view}</td>
                  <td>{list.regdate}</td>
                  <td>
                    <Link
                      to={
                        "/adminPage/board/" + boardCode + "/update/" + list.idx
                      }
                      state={{ boardName: boardName }}
                    >
                      <button>
                        <FontAwesomeIcon
                          className="boardModi"
                          icon={faPenToSquare}
                        />
                      </button>
                    </Link>
                    <button
                      className="upDelBtn"
                      onClick={() => deleteList(list.idx)}
                    >
                      <FontAwesomeIcon className="boardDel" icon={faTrash} />
                    </button>
                  </td>
                </tr>
              );
            })}
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
};

export default Board;
