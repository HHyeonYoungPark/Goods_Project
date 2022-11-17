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
    const data = {boardName, boardType, boardUrl, secret, readAllow, writeAllow, replyAllow, modifyAllow, deleteAllow, download, upload, boardDesc}
    await axios.post("http://localhost:4001/boardAdd", data)
      .then((response) => {
        if(response.data.status === 201){
          window.alert(response.data.message);
          navigate("/AdminPage/boardManager");
        }
      })
  }

  return (
    <div>
      <form method="post" className="frm" onSubmit={frmHandler}>
        <table>
          <tr>
            <th>boardName</th>
            <td><input type="text" className="boardName" onChange={(e) => setBoardName(e.target.value)}/></td>
          </tr>
          <tr>
            <th>boardType</th>
            <td><input type="text" className="boardType" onChange={(e) => setBoardType(e.target.value)}/></td>  
          </tr>
          <tr>
            <th>boardUrl</th>
            <td><input type="text" className="boardUrl" onChange={(e) => setBoardUrl(e.target.value)}/></td>  
          </tr>
          <tr>
            <th>secret</th>
            <td><input type="text" className="secret" onChange={(e) => setSecret(e.target.value)}/></td>  
          </tr>
          <tr>
            <th>readAllow</th>
            <td><input type="text" className="readAllow" onChange={(e) => setReadAllow(e.target.value)}/></td>  
          </tr>
          <tr>
            <th>writeAllow</th>
            <td><input type="text" className="writeAllow" onChange={(e) => setWriteAllow(e.target.value)}/></td>  
          </tr>
          <tr>
            <th>replyAllow</th>
            <td><input type="text" className="replyAllow" onChange={(e) => setReplyAllow(e.target.value)}/></td>  
          </tr>
          <tr>
            <th>modifyAllow</th>  
            <td><input type="text" className="modifyAllow" onChange={(e) => setModifyAllow(e.target.value)}/></td>
          </tr> 
          <tr>
            <th>deleteAllow</th>  
            <td><input type="text" className="deleteAllow" onChange={(e) => setDeleteAllow(e.target.value)}/></td>
          </tr> 
          <tr>
            <th>upload</th>  
            <td><input type="text" className="upload" onChange={(e) => setUpload(e.target.value)}/></td>
          </tr> 
          <tr>
            <th>download</th>  
            <td><input type="text" className="download" onChange={(e) => setDownload(e.target.value)}/></td>
          </tr> 
          <tr>
            <th>boardDesc</th>  
            <td><input type="text" className="boardDesc" onChange={(e) => setBoardDesc(e.target.value)}/></td>
          </tr>  
          <tr>
            <td colSpan="2"><input type="submit" value="Create" /></td>
          </tr>
        </table>
      </form>
    </div>
  )
}

export default BoardAdd