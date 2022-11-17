import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// pages
import Board from "./components/pages/board/Board";
import BoardAdd from "./components/pages/board/BoardAdd";
import BoardManager from "./components/pages/board/BoardManager ";
import Write from "./components/pages/board/Write";
import View from "./components/pages/board/View";

function App() {
  
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<BoardManager />} />
          <Route path="boardAdd" element={<BoardAdd />} />
          <Route path="board/:boardName" element={<Board />} />
          <Route path="board/:boardName/write" element={<Write />} />
          <Route path="board/:boardName/:idx" element={<View />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
