import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link, useParams } from 'react-router-dom';

const View = () => {
  const [view, setView] = useState([]);

  const { boardCode } = useParams();
  const { idx } = useParams();
  // console.log(boardName);
  // console.log(idx);
  
  const getView = async () => {
    await axios.get("http://localhost:4001/view?boardCode="+boardCode+"&idx="+idx)
      .then((res) =>{
        setView(res.data[0]);
      });
  }

  useEffect(() => {
    getView();
  }, []);

  return (
    <div>
      <input type="hidden" value={view.idx}/>
      <table>
        <tr>
          <th>Title</th>
          <td><input type="text" name="title" value={view.title} /></td>
        </tr>
        <tr>
          <th>Writer</th>
          <td><input type="text" name="writer" value={view.writer} /></td>
        </tr>
        <tr>
          <th>Password</th>
          <td><input type="password" name="passwd" value={view.passwd} /></td>
        </tr>
        <tr>
          <th>Content</th>
          <td><textarea rows="20" cols="100" name="contents" value={view.contents}></textarea></td>
        </tr>
        <tr>
          <th>Image</th>
          <td>
            {
              view.image === null && <input type="text" name="img" value="첨부 파일 없음"></input>
            }
            {
              view.image !== null && <img src={`http://localhost:4001/${view.image}`} ></img>
            }
          </td>
        </tr>
      </table>
      <button className="list-btn">
        <Link to={"/AdminPage/board/"+boardCode}>돌아가기</Link>
      </button>
   </div>
  )
}

export default View