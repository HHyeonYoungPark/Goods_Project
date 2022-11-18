import React from "react";
import banner1 from "../../images/make_banner1.png";
import banner2 from "../../images/make_banner2.png";
import Carousel from "react-bootstrap/Carousel";
import "../../css/pages/Main.css";
import { useNavigate, Link, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Dropdown from "../../function/Dropdown";
function Main() {
  const [dropdownVisibility1, setDropdownVisibility1] = React.useState(false);
  const [dropdownVisibility2, setDropdownVisibility2] = React.useState(false);
  const [dropdownVisibility3, setDropdownVisibility3] = React.useState(false);
  const [dropdownVisibility4, setDropdownVisibility4] = React.useState(false);
  return (
    <div>
      <div className="banner-con">
        <Carousel fade>
          <Carousel.Item>
            <img className="d-block w-100" src={banner1} alt="First slide" />
            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={banner2} alt="Second slide" />

            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={banner1} alt="Third slide" />

            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="make-main-con">
        <div className="left-nav-con">
          <h2>카테고리</h2>
          <hr />
          <Link to="tableGallary">전체</Link>
          <hr />
          <ul>
            <li>
              <span>패션</span>
              <button
                onClick={(e) => setDropdownVisibility1(!dropdownVisibility1)}
              >
                {dropdownVisibility1 ? (
                  <FontAwesomeIcon icon={faChevronUp} />
                ) : (
                  <FontAwesomeIcon icon={faChevronDown} />
                )}
              </button>
            </li>
            <hr />
            <Dropdown visibility={dropdownVisibility1}>
              <ul>
                <li>
                  <Link to="tableGallary">후드티</Link>
                </li>
                <li>
                  <Link to="tableGallary">스웨트니트</Link>
                </li>
                <li>
                  <Link to="tableGallary">티셔츠</Link>
                </li>
                <li>
                  <Link to="tableGallary">니트</Link>
                </li>
              </ul>
            </Dropdown>
            <li>
              <span>전자기기</span>
              <button
                onClick={(e) => setDropdownVisibility2(!dropdownVisibility2)}
              >
                {dropdownVisibility2 ? (
                  <FontAwesomeIcon icon={faChevronUp} />
                ) : (
                  <FontAwesomeIcon icon={faChevronDown} />
                )}
              </button>
            </li>
            <hr />
            <Dropdown visibility={dropdownVisibility2}>
              <ul>
                <li>
                  <Link to="tableGallary">후드티</Link>
                </li>
                <li>
                  <Link to="tableGallary">스웨트니트</Link>
                </li>
                <li>
                  <Link to="tableGallary">티셔츠</Link>
                </li>
                <li>
                  <Link to="tableGallary">니트</Link>
                </li>
              </ul>
            </Dropdown>
            <li>
              <span>생활</span>
              <button
                onClick={(e) => setDropdownVisibility3(!dropdownVisibility3)}
              >
                {dropdownVisibility3 ? (
                  <FontAwesomeIcon icon={faChevronUp} />
                ) : (
                  <FontAwesomeIcon icon={faChevronDown} />
                )}
              </button>
            </li>
            <hr />
            <Dropdown visibility={dropdownVisibility3}>
              <ul>
                <li>
                  <Link to="tableGallary">후드티</Link>
                </li>
                <li>
                  <Link to="tableGallary">스웨트니트</Link>
                </li>
                <li>
                  <Link to="tableGallary">티셔츠</Link>
                </li>
                <li>
                  <Link to="tableGallary">니트</Link>
                </li>
              </ul>
            </Dropdown>
            <li>
              <span>기타</span>
              <button
                onClick={(e) => setDropdownVisibility4(!dropdownVisibility4)}
              >
                {dropdownVisibility4 ? (
                  <FontAwesomeIcon icon={faChevronUp} />
                ) : (
                  <FontAwesomeIcon icon={faChevronDown} />
                )}
              </button>
            </li>
            <hr />
            <Dropdown visibility={dropdownVisibility4}>
              <ul>
                <li>
                  <Link to="tableGallary">후드티</Link>
                </li>
                <li>
                  <Link to="tableGallary">스웨트니트</Link>
                </li>
                <li>
                  <Link to="tableGallary">티셔츠</Link>
                </li>
                <li>
                  <Link to="tableGallary">니트</Link>
                </li>
              </ul>
            </Dropdown>
          </ul>
        </div>
        <div className="goods-table">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Main;
