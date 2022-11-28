import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faPowerOff,
  faArrowRight,
  faCartArrowDown,
  faUser,
  faChalkboardUser,
} from "@fortawesome/free-solid-svg-icons";
import { faIdCard } from "@fortawesome/free-regular-svg-icons";

import "../../css/pages/AdminPage.css";
import { Link, Outlet, useNavigate } from "react-router-dom";
import WTLogo from "../../images/logo.png";
import WTBZLogo from "../../images/WETINYBIZ_LOGO.jpg";

function AdminPage({ userId }) {
  const navigate = useNavigate();
  const useConfirm = (message = null, onConfirm, onCancel) => {
    if (!onConfirm || typeof onConfirm !== "function") {
      return;
    }
    if (onCancel && typeof onCancel !== "function") {
      return;
    }

    const confirmAction = () => {
      if (window.confirm(message)) {
        onConfirm();
      } else {
        onCancel();
      }
    };

    return confirmAction;
  };

  const agreeConfirm = () => navigate("/logout");
  const cancelConfirm = () => console.log("LogOut Canceled.");

  const confirmLogout = useConfirm(
    "LogOut 하시겠습니까?",
    agreeConfirm,
    cancelConfirm
  );

  const agreeWetiny = () => navigate("/logouttocustom");
  const cancelWetiny = () => console.log("LogOut Canceled.");

  const confirmWetiny = useConfirm(
    "WE'TINY로 가시겠습니까?",
    agreeWetiny,
    cancelWetiny
  );

  const agreeBiz = () => navigate("/logout");
  const cancelBiz = () => console.log("LogOut Canceled.");

  const confirmBiz = useConfirm(
    "WE'TINY BIZ로 가시겠습니까?",
    agreeBiz,
    cancelBiz
  );

  return (
    <div className="adminContainer">
      <div className="adminHeader">
        <div className="wtHqLog">
          <Link to="/myPage">
            <h1>WE'TINY HQ</h1>
          </Link>
        </div>
        <div className="headerRight">
          <Link to="/myPage">
            <FontAwesomeIcon className="headerUserIcon" icon={faIdCard} />
            <b>{userId}</b>님
          </Link>
          <br />
          <div className="loginInfo">
            <button className="wtLogo" onClick={confirmWetiny}>
              <img className="wtLogo" src={WTLogo} alt={WTLogo} />
            </button>
            <button className="wtbzLogo" onClick={confirmBiz}>
              <img className="wtbzLogo" src={WTBZLogo} alt={WTBZLogo} />
            </button>
            <button className="headerLogoutIcon" onClick={confirmLogout}>
              <FontAwesomeIcon className="headerLogoutIcon" icon={faPowerOff} />
            </button>
          </div>
        </div>
      </div>
      <div className="adminBox">
        <div className="mypageSideNav">
          <div className="sideNavProfile">
            <a href="/AdminPage">
              <h1>
                <FontAwesomeIcon className="navHomeIcon" icon={faHouse} />
                Home
              </h1>
            </a>
          </div>
          <div className="adminSideNav">
            <Link className="navMenu" to="#" style={{ paddingLeft: "50px" }}>
              <h3>
                <FontAwesomeIcon
                  className="navMenuIcon"
                  icon={faCartArrowDown}
                />
                Shop
                <FontAwesomeIcon className="navMenuArrow" icon={faArrowRight} />
              </h3>
            </Link>
            <Link className="navMenu" to="goodsManager">
              <p>
                Goods
                <FontAwesomeIcon className="navMenuArrow" icon={faArrowRight} />
              </p>
            </Link>
            <Link className="navMenu" to="order">
              <p>
                Orders
                <FontAwesomeIcon className="navMenuArrow" icon={faArrowRight} />
              </p>
            </Link>
            <Link className="navMenu" to="#">
              <p>
                Events
                <FontAwesomeIcon className="navMenuArrow" icon={faArrowRight} />
              </p>
            </Link>
            <Link className="navMenu" to="#">
              <p>
                Banners
                <FontAwesomeIcon className="navMenuArrow" icon={faArrowRight} />
              </p>
            </Link>
            <Link className="navMenu" to="#" style={{ paddingLeft: "50px" }}>
              <h3>
                <FontAwesomeIcon className="navMenuIcon" icon={faUser} />
                Members
                <FontAwesomeIcon className="navMenuArrow" icon={faArrowRight} />
              </h3>
            </Link>
            <Link className="navMenu" to="CostumerManager">
              <p>
                Customers
                <FontAwesomeIcon className="navMenuArrow" icon={faArrowRight} />
              </p>
            </Link>
            <Link className="navMenu" to="SellerManager">
              <p>
                Sellers
                <FontAwesomeIcon className="navMenuArrow" icon={faArrowRight} />
              </p>
            </Link>
            <Link className="navMenu" to="#">
              <p>
                Admins
                <FontAwesomeIcon className="navMenuArrow" icon={faArrowRight} />
              </p>
            </Link>
            <Link
              className="navMenu"
              to="boardManager"
              style={{ paddingLeft: "50px" }}
            >
              <h3>
                <FontAwesomeIcon
                  className="navMenuIcon"
                  icon={faChalkboardUser}
                />
                Boards
                <FontAwesomeIcon className="navMenuArrow" icon={faArrowRight} />
              </h3>
            </Link>
            <Link className="navMenu" to="board/notice">
              <p>
                Notice
                <FontAwesomeIcon className="navMenuArrow" icon={faArrowRight} />
              </p>
            </Link>
            <Link className="navMenu" to="board/customerHelp">
              <p>
                Customer Help
                <FontAwesomeIcon className="navMenuArrow" icon={faArrowRight} />
              </p>
            </Link>
            <Link className="navMenu" to="board/todoList">
              <p>
                Todo List
                <FontAwesomeIcon className="navMenuArrow" icon={faArrowRight} />
              </p>
            </Link>
          </div>
        </div>
        <div className="mypageContentBox">
          <div className="mypageContent">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
