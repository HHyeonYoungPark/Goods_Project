import React, { useState } from 'react';
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Write = () => {
  const [title, setTitle] = useState("");
  const [writer, setWriter] = useState("");
  const [passwd, setPasswd] = useState("");
  const [contents, setContents] = useState("");
  const [img, setImg] = useState("");

  const { boardName } = useParams();
  
  const navigate = useNavigate();

  async function frmHandler(e) {
    e.preventDefault();
    let formData = new FormData();
    formData.append("title", title);
    formData.append("writer", writer);
    formData.append("passwd", passwd);
    formData.append("contents", contents);
    formData.append("img", img);

    await axios.post("http://localhost:4001/write?boardName="+boardName, formData)
      .then((response) => {
        if(response.data.status === 201){
          window.alert(response.data.message);
          navigate("/adminPage/board/"+boardName);
        }
      })
  }

  return (
    <div>
      <form method="post" className="frm" onSubmit={frmHandler}>
        <input type="hidden" value={boardName}/>
        <table>
          <tr>
            <th>Title</th>
            <td><input type="text" name="title" onChange={(e) => setTitle(e.target.value)}/></td>
          </tr>
          <tr>
            <th>Writer</th>
            <td><input type="text" name="writer" onChange={(e) => setWriter(e.target.value)}/></td>
          </tr>
          <tr>
            <th>Password</th>
            <td><input type="password" name="passwd" onChange={(e) => setPasswd(e.target.value)}/></td>
          </tr>
          <tr>
            <th>Contents</th>
            <td><textarea rows="20" cols="100" name="contents" onChange={(e) => setContents(e.target.value)}></textarea></td>
          </tr>
          <tr>
            <th>Image</th>
            <td><input type="file" name="img" onChange={(e) => setImg(e.target.files[0])}/></td>
          </tr>
          <tr>
            <td colSpan="2"><input type="submit" value="Write" /></td>
          </tr>
        </table>
      </form>
    </div>
  )
}

export default Write