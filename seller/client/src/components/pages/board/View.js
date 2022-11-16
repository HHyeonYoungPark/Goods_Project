import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';

const View = () => {
  const [view, setView] = useState([]);

  const { boardName } = useParams();
  const { idx } = useParams();
  console.log(boardName);
  console.log(idx);
  
  const getView = async () => {
    await axios.get("http://localhost:4001/view?boardName="+boardName+"&idx="+idx)
      .then((res) =>{
        setView(res.data[0]);
      });
  }

  useEffect(() => {
    getView();
  }, []);

  return (
    <div>
      
        <input type="hidden" />
        title<input type="text" className="title" value={view.title} /><br/>
        writer<input type="text" className="writer" value={view.writer} /><br/>
        passwd<input type="text" className="passwd" value={view.passwd} /><br/>
        content<input type="text" className="content" value={view.content} /><br/>
        img<input type="text" className="img" /><br/>
      
    </div>
  )
}

export default View