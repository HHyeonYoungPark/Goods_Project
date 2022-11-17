import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../../css/Sidebar.css";

import profile from "../../images/woodstock.png";

import SidebarItem from "./SidebarItem";

function Sidebar() {
  const menus = [
    { name: "관리자 메인", path: "/adminHome" },
    { name: "상품 관리", path: "/admin/goodsMain" },
    { name: "회원 관리", path: "/admin/membersMain" },
    { name: "게시판 메인", path: "/admin/boardsMain" },
    { name: "게시판 관리", path: "/admin/boardsManager" },
  ];

  const [subMenu, setSubMenu] = useState(false); // 메뉴의 초기값을 false로 설정
  const toggleMenu = () => {
    setSubMenu((isOpen) => !isOpen); // on,off 개념 boolean
  };
  return (
    <div className="sidebar">
      <img className="profile" src={profile} alt={profile} />
      {menus.map((menu, index) => {
        return (
          <div className="menuBox">
            <Link to={menu.path} key={index}>
              <SidebarItem menu={menu} />
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Sidebar;
