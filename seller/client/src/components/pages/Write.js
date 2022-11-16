import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Write = () => {

  return (
    <div>
      <form method="post" className="frm" onSubmit={frmHandler}>
        <input type="hidden" />
        title<input type="text" className="title" /><br/>
        writer<input type="text" className="writer" /><br/>
        passwd<input type="text" className="passwd" /><br/>
        content<input type="text" className="content" /><br/>
        img<input type="text" className="img" /><br/>
        <input type="submit" value="Write" />
      </form>
    </div>
  )
}

export default Write