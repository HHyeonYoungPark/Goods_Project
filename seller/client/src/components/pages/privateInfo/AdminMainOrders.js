import axios from "axios";
import React, { useEffect, useState } from "react";

function AdminMainOrders() {
  const [totalOrders, setTotalOrders] = useState("");
  const [recentOrders, setRecentOrders] = useState("");

  const GetOrderNum = async () => {
    await axios
      .get("http://localhost:4001/adminMain/NumOfOrders")
      .then((res) => {
        setTotalOrders(res.data.recentOrders[0].cnt);
        setRecentOrders(res.data.recentOrders[0].cnt);
        console.log(res.data.recentOrders[0].cnt);
      });
    console.log(totalOrders);
  };

  useEffect(() => {
    GetOrderNum();
  }, []);

  return (
    <div className="adminMainOrdersContainer">
      <h3>Weekly Orders</h3>
      {/* {totalOrders} */}
      <div className="weeklyOrders">
        <h1> + {recentOrders}</h1>
      </div>
      <div className="totalOrders">
        <h4>this Quater</h4>
        <h3> 6812</h3>
      </div>
    </div>
  );
}

export default AdminMainOrders;
