import React from "react";

import "../../css/pages/AdminMain.css";
import Graph from "../../images/AdminMainGraph.PNG";

function AdminMainGraph() {
  return (
    <div>
      <h3>Profit Graph</h3>
      <img className="AdminMainGraph" src={Graph} alt="Graph" />
    </div>
  );
}

export default AdminMainGraph;
