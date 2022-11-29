import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import "../../css/pages/BoardSon.css";

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
  const location = useLocation();

  const boardName = location.state.boardName;

  useEffect(() => {
    const getView = async () => {
      await axios
        .get(
          "http://localhost:4001/view?boardCode=" + boardCode + "&idx=" + idx
        )
        .then((res) => {
          setView(res.data[0]);
          setTitle(res.data[0].title);
          setWriter(res.data[0].writer);
          setPasswd(res.data[0].passwd);
          setContents(res.data[0].contents);
          setImg(res.data[0].image);
        });
    };
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

    await axios
      .put(
        "http://localhost:4001/update?boardCode=" + boardCode + "&idx=" + idx,
        formData
      )
      .then((response) => {
        if (response.data.status === 201) {
          window.alert(response.data.message);
          navigate("/adminPage/board/" + boardCode, { state: boardName });
        }
      });
  }

  const delImg = async (e) => {
    e.preventDefault();
    window.alert("첨부파일을 삭제하시겠습니까?");
    await axios
      .delete(
        "http://localhost:4001/delImg?boardCode=" + boardCode + "&idx=" + idx
      )
      .then((res) => {
        if (res.data.status === 201) {
          window.alert(res.data.message);
          window.location.reload();
        }
      });
  };

  return (
    <div className="boardWriteContainer">
      <h2>Modify Write</h2>
      <form method="post" className="frm" onSubmit={frmHandler}>
        <div className="boardWriteTbl">
          <input type="hidden" value={view.idx} />
          <table className="boardWriteForm">
            <tr>
              <th>Title</th>
              <td>
                <input
                  type="text"
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <th>Writer</th>
              <td>
                <input
                  type="text"
                  name="writer"
                  value={writer}
                  onChange={(e) => setWriter(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <th>Password</th>
              <td>
                <input
                  type="password"
                  name="passwd"
                  value={passwd}
                  onChange={(e) => setPasswd(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <th>Content</th>
              <td>
                <textarea
                  rows="16"
                  cols="160"
                  name="contents"
                  value={contents}
                  onChange={(e) => setContents(e.target.value)}
                  className="boardWriteContent"
                ></textarea>
              </td>
            </tr>
            <tr>
              <th>Image</th>
              <td>
                {img === null && (
                  <input type="text" name="img" value="첨부 파일 없음" />
                )}
                {img !== null && (
                  <input type="text" name="img" value={view.image} />
                )}
                <input
                  type="file"
                  name="img"
                  onChange={(e) => setImg(e.target.files[0])}
                />
                <button type="button" onClick={delImg}>
                  첨부파일 삭제
                </button>
              </td>
            </tr>
            <tr>
              <td colSpan="2"></td>
            </tr>
          </table>
        </div>
        <div className="boardWritebtm">
          <button className="boardWriteSubmitBtn" type="submit">
            Modify
          </button>
          <Link
            to={"/AdminPage/board/" + boardCode}
            state={{ boardName: boardName }}
          >
            <button className="cancelBoard">Back</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default View;
