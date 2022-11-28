import React from "react";
import "../../css/pages/AdminMain.css";

//components
import AdminMainTodo from "./AdminMainTodo";
import AdminMainVisitor from "./AdminMainVisitor";
import AdminMainOrders from "./AdminMainOrders";
import AdminMainCustomers from "./AdminMainCustomers";
import AdminMainSellers from "./AdminMainSellers";
import AdminMainGraph from "./AdminMainGraph";

function AdminMain() {
  return (
    <div>
      <div className="adminMainContainer">
        <div className="mainBox">
          <AdminMainTodo />
        </div>
        <div className="mainBox">
          <AdminMainVisitor />
        </div>
        <div className="mainBox">
          <AdminMainOrders />
        </div>
        <div className="mainBox">
          <AdminMainCustomers />
        </div>
        <div className="mainBox">
          <AdminMainSellers />
        </div>
        <div className="mainBox">
          <AdminMainGraph />h
        </div>
      </div>
    </div>
  );
}

export default AdminMain;
