import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//css
import "./components/css/adminMain.css";

// pages

import Header from "./components/pages/Header";

//sideBar
import Sidebar from "./components/pages/sidebar/Sidebar";
import AdminHome from "./components/pages/AdminHome";
import MembersMain from "./components/pages/members/MembersMain";
import GoodsMain from "./components/pages/goods/GoodsMain";
import BoardsMain from "./components/pages/boards/BoardMain";

//board
import Board from "./components/pages/boards/Board";
import BoardAdd from "./components/pages/boards/BoardAdd";
import BoardManager from "./components/pages/boards/BoardManager ";
import Write from "./components/pages/boards/Write";
import View from "./components/pages/boards/View";

function App() {
  return (
    <div>
      <Router>
        <div className="adminContainer">
          <Sidebar />
          <div className="adminRightContainer">
            <Header />
            <Routes>
              <Route path="/adminHome" element={<AdminHome />} />
              <Route path="/admin/goodsMain" element={<GoodsMain />} />
              <Route path="/admin/membersMain" element={<MembersMain />} />
              <Route path="/admin/boardsMain" element={<BoardsMain />} />
              <Route path="/admin/boardsManager" element={<BoardManager />} />

              <Route path="boardAdd" element={<BoardAdd />} />
              <Route path="board/:boardName" element={<Board />} />
              <Route path="board/:boardName/write" element={<Write />} />
              <Route path="board/:boardName/:idx" element={<View />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
