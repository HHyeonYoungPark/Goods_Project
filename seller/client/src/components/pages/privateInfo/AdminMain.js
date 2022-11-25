import React from "react";
import "../../css/pages/AllManager.css";

function AdminMain() {
  return (
    <div className="allManager-container">
      <div className="content-manager">
        <h3>상품 관리</h3>
      </div>
      <div className="content-manager">회원관리</div>
      <div className="content-manager">공지사항 관리</div>
      <div className="content-manager">Q&A관리</div>
    </div>
  );
}

export default AdminMain;
