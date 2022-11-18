import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link,useParams } from "react-router-dom";

const Board = () => {
  const [lists, setLists] = useState([]);

  const { boardName } = useParams();
  // console.log(boardName);
  const getLists = async () => {
    await axios.get("http://localhost:4001/board?boardName="+boardName)
      .then((res) =>{
        setLists(res.data);
      });
  }

  useEffect(() => {
    getLists();
  }, []);

  async function deleteList(idx) {
    await axios.delete("http://localhost:4001/delete/"+ boardName +"/"+ idx).then((res) => {
      if(res.data.status === 201) {
        window.alert(res.data.message);
        getLists();
      }else{
        window.alert("Delete Failed");
      }
    });
  }

  return (
    <div>
      <Link to={"/adminPage/board/"+boardName+"/write"}>게시글 작성</Link>
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
                  <td><Link to={"/adminPage/board/"+boardName+"/"+list.idx}>{list.title}</Link></td>
                  <td>{list.writer}</td>
                  <td>{list.count}</td>
                  <td>{list.regdate}</td>
                  <td>
                    <Link to={"/adminPage/board/"+boardName+"/update/"+list.idx}>수정</Link>
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
    </div>
  )
}

export default Board