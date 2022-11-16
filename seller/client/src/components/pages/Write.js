import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Write = () => {
  const [title, setTitle] = useState("");
  const [writer, setWriter] = useState("");
  const [passwd, setPasswd] = useState("");
  const [content, setContent] = useState("");
  const [img, setImg] = useState("");

  const { boardName } = useParams();

  const navigate = useNavigate();

  async function frmHandler(e) {
    e.preventDefault();
    const data = {boardName, title, writer, passwd, content, img}
    await axios.post("http://localhost:4001/write", data)
      .then((response) => {
        if(response.data.status === 201){
          window.alert(response.data.message);
          navigate("/board/"+boardName);
        }
      })
  }

  return (
    <div>
      <form method="post" className="frm" onSubmit={frmHandler}>
        <input type="hidden" value={boardName}/>
        title<input type="text" className="title" onChange={(e) => setTitle(e.target.value)}/><br/>
        writer<input type="text" className="writer" onChange={(e) => setWriter(e.target.value)}/><br/>
        passwd<input type="text" className="passwd" onChange={(e) => setPasswd(e.target.value)}/><br/>
        content<input type="text" className="content" onChange={(e) => setContent(e.target.value)}/><br/>
        img<input type="text" className="img" onChange={(e) => setImg(e.target.files[0])}/><br/>
        <input type="submit" value="Write" />
      </form>
    </div>
  )
}

export default Write