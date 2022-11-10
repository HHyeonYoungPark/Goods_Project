import { Link } from "react-router-dom";
import notFound from "../images/notFound.png";

function NotFound() {
  return (
    <div className="notFound-container">
      <div className="notFound">
        <h1>! 요청하신 페이지를 찾을 수 없습니다</h1>
        <img src={notFound} alt={notFound} className="notFound-img" />
        <br />
        <Link to="/" className="tomain">
          메인으로
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
