import React from "react";
import "../../css/Sidebar.css";

function SidebarItem({ menu }) {
  return (
    <div className="sidebar-item">
      <h2>{menu.name}</h2>
    </div>
  );
}

export default SidebarItem;
