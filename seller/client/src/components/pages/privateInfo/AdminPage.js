import React from "react";
import "../../css/pages/AdminPage.css";
import { Link, Outlet } from "react-router-dom";
import WTLogo from "../../images/logo.png";
import WTBZLogo from "../../images/WETINYBIZ_LOGO.jpg";

function AdminPage({ userId }) {
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
            <b>{userId}</b>님
          </Link>
          <br />
          <div className="loginInfo">
            <Link to="/logouttocustom">
              <img className="wtLogo" src={WTLogo} alt={WTLogo} />
            </Link>
            <Link to="/logout">
              <img className="wtbzLogo" src={WTBZLogo} alt={WTBZLogo} />
            </Link>
            <Link to="/logout">Logout</Link>
          </div>
        </div>
      </div>
      <div className="adminBox">
        <div className="mypageSideNav">
          <div className="sideNavProfile">
            <a href="/AdminPage">
              <h1>Icon Home</h1>
            </a>
          </div>
          <div className="adminSideNav">
            <Link className="navMenu" to="#">
              <h3>Shop Manager</h3>
            </Link>
            <Link className="navMenu" to="goodsManager">
              Goods
            </Link>
            <Link className="navMenu" to="#">
              Orders
            </Link>
            <Link className="navMenu" to="#">
              Events
            </Link>
            <Link className="navMenu" to="#">
              Banners
            </Link>
            <Link className="navMenu" to="#">
              <h3>Members</h3>
            </Link>
            <Link className="navMenu" to="#">
              Customers
            </Link>
            <Link className="navMenu" to="#">
              Sellers
            </Link>
            <Link className="navMenu" to="#">
              Admins
            </Link>
            <Link className="navMenu" to="#">
              <h3>Boards</h3>
            </Link>
            <Link className="navMenu" to="#">
              Notice
            </Link>
            <Link className="navMenu" to="#">
              Help
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
