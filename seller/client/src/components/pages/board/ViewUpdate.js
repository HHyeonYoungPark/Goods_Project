import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link, useNavigate, useParams } from 'react-router-dom';

const View = () => {
  const [view, setView] = useState([]);

  const { boardCode } = useParams();
  const { idx } = useParams();
  
  const [title, setTitle] = useState("");
  const [writer, setWriter] = useState("");
  const [passwd, setPasswd] = useState("");
  const [contents, setContents] = useState("");
  const [img, setImg] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    const getView = async () => {
      await axios.get("http://localhost:4001/view?boardCode="+boardCode+"&idx="+idx)
        .then((res) =>{
          setView(res.data[0]);
          setTitle(res.data[0].title);
          setWriter(res.data[0].writer);
          setPasswd(res.data[0].passwd);
          setContents(res.data[0].contents);
          setImg(res.data[0].image);
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

    await axios.put("http://localhost:4001/update?boardCode="+boardCode+"&idx="+idx, formData)
      .then((response) => {
        if(response.data.status === 201){
          window.alert(response.data.message);
          navigate("/adminPage/board/"+boardCode);
        }
      })
  }

  const deleteImg = () => {
    setImg("");
  }
  
  return (
    <div>
      <form method="post" className="frm" onSubmit={frmHandler}>
        <input type="hidden" value={view.idx}/>
        <table>
          <tr>
            <th>Title</th>
            <td><input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} /></td>
          </tr>
          <tr>
            <th>Writer</th>
            <td><input type="text" name="writer" value={writer} onChange={(e) => setWriter(e.target.value)} /></td>
          </tr>
          <tr>
            <th>Password</th>
            <td><input type="password" name="passwd" value={passwd} onChange={(e) => setPasswd(e.target.value)} /></td>
          </tr>
          <tr>
            <th>Content</th>
            <td><textarea rows="20" cols="100" name="contents" value={contents} onChange={(e) => setContents(e.target.value)}></textarea></td>
          </tr>
          <tr>
            <th>Image</th>
            <td>
            {
              img === null && <input type="text" name="img" value="첨부 파일 없음"/>
            }
            {
              img !== null && <input type="text" name="img" value={view.image}/>
            }
              <input type="file" name="img" onChange={(e) => setImg(e.target.files[0])}/>
              <button onClick={deleteImg}>첨부파일 초기화</button>
            </td>
          </tr>
          <tr>
            <td colSpan="2"><input type="submit" value="Update" /></td>
          </tr>
        </table>
      </form>
      <button className="list-btn">
        <Link to={"/AdminPage/board/"+boardCode}>돌아가기</Link>
      </button>
   </div>
  )
}

export default View