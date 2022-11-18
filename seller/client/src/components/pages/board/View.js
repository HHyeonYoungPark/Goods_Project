import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';

const View = () => {
  const [view, setView] = useState([]);

  const { boardName } = useParams();
  const { idx } = useParams();
  console.log(boardName);
  console.log(idx);
  
  const getView = async () => {
    await axios.get("http://localhost:4001/view?boardName="+boardName+"&idx="+idx)
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
          <td><input type="text" className="title" value={view.title} /></td>
        </tr>
        <tr>
          <th>Writer</th>
          <td><input type="text" className="writer" value={view.writer} /></td>
        </tr>
        <tr>
          <th>Password</th>
          <td><input type="password" className="passwd" value={view.passwd} /></td>
        </tr>
        <tr>
          <th>Content</th>
          <td><textarea rows="20" cols="100" className="content">{view.content}</textarea></td>
        </tr>
        <tr>
          <th>Image</th>
          <td><input type="file" className="img" /></td>
        </tr>
      </table>
   </div>
  )
}

export default View