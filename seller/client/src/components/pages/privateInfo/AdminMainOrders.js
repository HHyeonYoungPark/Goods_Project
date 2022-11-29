import axios from "axios";
import React, { useEffect, useState } from "react";

function AdminMainOrders() {
  const [totalOrders, setTotalOrders] = useState("");
  const [recentOrders, setRecentOrders] = useState("");

  // async function GetOrderNum() {
  //   await axios
  //     .get("http://localhost:4001/adminMain/NumOfOrders")
  //     .then((res) => {
  //       setTotalOrders(res.data.recentOrders[0]);
  //       setRecentOrders(res.data.recentOrders[0]);
  //       console.log(res.data.recentOrders[0]);
  //     });
  //   console.log(totalOrders);
  // }

  // useEffect(() => {
  //   GetOrderNum();
  // }, []);

  return (
    <div>
      <h3>Weekly Orders</h3>
    </div>
  );
}

export default AdminMainOrders;
