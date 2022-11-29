import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation, useParams, useNavigate } from "react-router-dom";
import "../../css/pages/BoardSon.css";

const View = () => {
  const [view, setView] = useState([]);

  const { boardCode } = useParams();
  const { idx } = useParams();
  // console.log(boardName);
  // console.log(idx);

  const navigate = useNavigate();
  const location = useLocation();

  const boardName = location.state.boardName;

  const getView = async () => {
    await axios
      .get("http://localhost:4001/view?boardCode=" + boardCode + "&idx=" + idx)
      .then((res) => {
        setView(res.data[0]);
      });
  };

  useEffect(() => {
    getView();
  }, []);

  return (
    <div className="boardWriteContainer">
      <h2>Board View</h2>
      <div className="boardWriteTbl">
        <input type="hidden" value={view.idx} />
        <table className="boardWriteForm">
          <tr>
            <th>Title</th>
            <td>
              <input type="text" name="title" value={view.title} />
            </td>
          </tr>
          <tr>
            <th>Writer</th>
            <td>
              <input type="text" name="writer" value={view.writer} />
            </td>
          </tr>
          <tr>
            <th>Password</th>
            <td>
              <input type="password" name="passwd" value={view.passwd} />
            </td>
          </tr>
          <tr>
            <th>Content</th>
            <td>
              <textarea
                rows="16"
                cols="160"
                name="contents"
                value={view.contents}
                className="boardWriteContent"
              ></textarea>
            </td>
          </tr>
          <tr>
            <th>Image</th>
            <td>
              {view.image === null && (
                <input type="text" name="img" value="첨부 파일 없음"></input>
              )}
              {view.image !== null && (
                <img
                  src={`http://localhost:4001/${view.image}`}
                  style={{ height: "50px" }}
                ></img>
              )}
            </td>
          </tr>
        </table>
      </div>
      <div className="boardWritebtm">
        <Link
          to={"/AdminPage/board/" + boardCode}
          state={{ boardName: boardName }}
        >
          <button className="cancelBoard">Back</button>
        </Link>
      </div>
    </div>
  );
};

export default View;
