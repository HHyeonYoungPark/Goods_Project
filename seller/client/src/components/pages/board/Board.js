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
                      선택하세요
                    </option>
                    <option value="idx">번호</option>
                    <option value="title">제목</option>
                    <option value="writer">작성자</option>
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
              <button>게시글 작성</button>
            </Link>
          </div>
        </div>
        <div className="tblWrap">
          <table className="brdListTb">
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
              <th>조회수</th>
              <th>작성일</th>
              <th>비고</th>
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
                      수정
                    </Link>
                    /
                    <button
                      className="upDelBtn"
                      onClick={() => deleteList(list.idx)}
                    >
                      삭제
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
