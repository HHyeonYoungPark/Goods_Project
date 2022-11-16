import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Board = () => {
  const [lists, setLists] = useState([]);

  const { boardName } = useParams();
  console.log(boardName);
  const getLists = async () => {
    await axios
      .get("http://localhost:4001/board?boardName=" + boardName)
      .then((res) => {
        setLists(res.data);
      });
  };

  useEffect(() => {
    getLists();
  }, []);

  return (
    <div>
      <Link to={"/write"}>게시글 작성</Link>
      <table>
        <thead>
          <tr>
            <td>번호</td>
            <td>제목</td>
            <td>작성자</td>
            <td>조회수</td>
            <td>작성일</td>
            <td>비고</td>
          </tr>
        </thead>
        <tbody>
          {lists.map((list, key) => {
            return (
              <tr key={key}>
                <td>{list.idx}</td>
                <td>
                  <Link
                    to={
                      "/board?boardName=" + boardName + "&list?idx=" + list.idx
                    }
                  >
                    {list.title}
                  </Link>
                </td>
                <td>{list.writer}</td>
                <td>{list.count}</td>
                <td>{list.regdate}</td>
                <td>수정/삭제</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Board;
