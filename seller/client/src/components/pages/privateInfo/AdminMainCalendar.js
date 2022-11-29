import React, { useState } from "react";

import Calendar from "react-calendar";
import "../../css/pages/AdminMain.css";

function AdminMainCalendar() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <div className="calendarContainer">
        <Calendar className="calendar" onChange={onChange} value={value} />
      </div>
    </div>
  );
}

export default AdminMainCalendar;
