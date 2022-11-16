import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BoardAdd = () => {
  const [boardName, setBoardName] = useState("");
  const [boardType, setBoardType] = useState("");
  const [boardUrl, setBoardUrl] = useState("");
  const [secret, setSecret] = useState("");
  const [readAllow, setReadAllow] = useState("");
  const [writeAllow, setWriteAllow] = useState("");
  const [replyAllow, setReplyAllow] = useState("");
  const [modifyAllow, setModifyAllow] = useState("");
  const [deleteAllow, setDeleteAllow] = useState("");
  const [download, setDownload] = useState("");
  const [upload, setUpload] = useState("");
  const [boardDesc, setBoardDesc] = useState("");

  const navigate = useNavigate();

  async function frmHandler(e) {
    e.preventDefault();
    const data = {}
    await axios.post("http://localhost:4001/boardAdd", data)
      .then((response) => {
        if(response.data.status === 201){
          window.alert(response.data.message);
          navigate("/");
        }
      })
  }

  return (
    <div>
      <form method="post" className="frm" onSubmit={frmHandler}>
        boardName<input type="text" className="boardName" onChange={(e) => setBoardName(e.target.value)}/><br/>
        boardType<input type="text" className="boardType" onChange={(e) => setBoardType(e.target.value)}/><br/>
        boardUrl<input type="text" className="boardUrl" onChange={(e) => setBoardUrl(e.target.value)}/><br/>
        secret<input type="text" className="secret" onChange={(e) => setSecret(e.target.value)}/><br/>
        readAllow<input type="text" className="readAllow" onChange={(e) => setReadAllow(e.target.value)}/><br/>
        writeAllow<input type="text" className="writeAllow" onChange={(e) => setWriteAllow(e.target.value)}/><br/>
        replyAllow<input type="text" className="replyAllow" onChange={(e) => setReplyAllow(e.target.value)}/><br/>
        modifyAllow<input type="text" className="modifyAllow" onChange={(e) => setModifyAllow(e.target.value)}/><br/>
        deleteAllow<input type="text" className="deleteAllow" onChange={(e) => setDeleteAllow(e.target.value)}/><br/>
        upload<input type="text" className="upload" onChange={(e) => setUpload(e.target.value)}/><br/>
        download<input type="text" className="download" onChange={(e) => setDownload(e.target.value)}/><br/>
        boardDesc<input type="text" className="boardDesc" onChange={(e) => setBoardDesc(e.target.value)}/><br/>
        <input type="submit" value="Create" />
      </form>
    </div>
  )
}

export default BoardAdd