import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link,useParams } from "react-router-dom";
import Paging from "../../function/Paging";

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

  const { boardCode } = useParams();
  // console.log(boardName);
  const getLists = async () => {
    await axios.get("http://localhost:4001/board?boardCode="+boardCode+"&page="+
        page +
        "&offset=" +
        offset +
        "&select=" +
        select +
        "&searchQuery=" +
        keyword)
      .then((res) =>{
        setLists(res.data.lists);
        setPage(res.data.page);
        setPages(res.data.totalPageNum);
        setRows(res.data.totalRows);
      });
  }

  useEffect(() => {
    getLists();
  }, [page, keyword]);

  async function deleteList(idx) {
    await axios.delete("http://localhost:4001/delete/"+ boardCode +"/"+ idx).then((res) => {
      if(res.data.status === 201) {
        window.alert(res.data.message);
        getLists();
      }else{
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
    <div>
      <Link to={"/adminPage/board/"+boardCode+"/write"}>게시글 작성</Link>
      <div className="search-wrap">
        <form method="post" id="frm" onSubmit={listSearch}>
          <div className="listSearch">
            <select
              id="listSearch"
              className="listSearch"
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
            <button type="submit" className="searchBtn">
              검색
            </button>
          </div>
        </form>
      </div>
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>조회수</th>
            <th>작성일</th>
            <th>비고</th>
          </tr>
        </thead>
        <tbody>
          {
            lists.map((list, key) => {
              return(
                <tr key={key}>
                  <td>{list.idx}</td>
                  <td><Link to={"/adminPage/board/"+boardCode+"/"+list.idx}>{list.title}</Link></td>
                  <td>{list.writer}</td>
                  <td>{list.count}</td>
                  <td>{list.regdate}</td>
                  <td>
                    <Link to={"/adminPage/board/"+boardCode+"/update/"+list.idx}>수정</Link>
                    /
                    <button className="upDelBtn" onClick={() => deleteList(list.idx)}>삭제</button>
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
      <button className="list-btn">
        <Link to="/AdminPage/boardManager">돌아가기</Link>
      </button>
      <p className="danger">{msg}</p>
      <div className="paging">
        <Paging page={page} offset={offset} rows={rows} setPage={changePage} />
      </div>
    </div>
  )
}

export default Board