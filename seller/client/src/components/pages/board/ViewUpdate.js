import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link, useNavigate, useParams } from 'react-router-dom';

const View = () => {
  const [view, setView] = useState([]);

  const { boardName } = useParams();
  const { idx } = useParams();
  
  const [title, setTitle] = useState("");
  const [writer, setWriter] = useState("");
  const [passwd, setPasswd] = useState("");
  const [contents, setContents] = useState("");
  const [img, setImg] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    const getView = async () => {
      await axios.get("http://localhost:4001/view?boardName="+boardName+"&idx="+idx)
        .then((res) =>{
          setView(res.data[0]);
        });
    }
    getView();
  }, []);

  async function frmHandler(e) {
    e.preventDefault();
    let formData = new FormData();
    formData.append("title", title);
    formData.append("writer", writer);
    formData.append("passwd", passwd);
    formData.append("contents", contents);
    formData.append("img", img);

    await axios.put("http://localhost:4001/update?boardName="+boardName+"&?idx="+idx, formData)
      .then((response) => {
        if(response.data.status === 201){
          window.alert(response.data.message);
          navigate("/adminPage/board/"+boardName+"/"+idx);
        }
      })
  }
  
  return (
    <div>
      <form method="post" className="frm" onSubmit={frmHandler}>
        <input type="hidden" value={view.idx}/>
        <table>
          <tr>
            <th>Title</th>
            <td><input type="text" name="title" value={view.title} onChange={(e) => setTitle(e.target.value)} /></td>
          </tr>
          <tr>
            <th>Writer</th>
            <td><input type="text" name="writer" value={view.writer} onChange={(e) => setWriter(e.target.value)} /></td>
          </tr>
          <tr>
            <th>Password</th>
            <td><input type="password" name="passwd" value={view.passwd} onChange={(e) => setPasswd(e.target.value)} /></td>
          </tr>
          <tr>
            <th>Content</th>
            <td><textarea rows="20" cols="100" name="contents" value={view.contents} onChange={(e) => setContents(e.target.value)}></textarea></td>
          </tr>
          <tr>
            <th>Image</th>
            <td>
              <img src={`http://localhost:4001/${view.image}`}/>
              <input type="file" name="img" onChange={(e) => setImg(e.target.files[0])}/>
            </td>
          </tr>
          <tr>
            <td colSpan="2"><input type="submit" value="Update" /></td>
          </tr>
        </table>
      </form>
      <button className="list-btn">
        <Link to={"/AdminPage/board/"+boardName}>돌아가기</Link>
      </button>
   </div>
  )
}

export default View