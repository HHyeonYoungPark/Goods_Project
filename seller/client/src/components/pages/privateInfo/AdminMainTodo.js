import axios from "axios";

import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Paging from "../../function/Paging";

import "../../css/pages/BoardSon.css";

const AdminMainTodo = () => {
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
    await axios.get("http://localhost:4001/board/todoList").then((res) => {
      setLists(res.data.lists);
    });
  };

  useEffect(() => {
    getLists();
  }, []);

  return (
    <div className="brdSonContainer">
      <h3>Todo List</h3>
      <div className="tblWrap">
        <table className="brdListTb">
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
              <th>등록일</th>
              <th>조회수</th>
            </tr>
          </thead>
          <tbody>
            {lists.map((list, key) => {
              return (
                <tr key={key}>
                  <td>{list.idx}</td>
                  <td>
                    <Link to={"/adminPage/board/todoList/" + list.idx}>
                      {list.title}
                    </Link>
                  </td>
                  <td>{list.writer}</td>
                  <td>{list.regdate}</td>
                  <td>{list.view}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default AdminMainTodo;
