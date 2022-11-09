import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

// layout
import Header from "./components/layout/Header";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// pages
import Main from "./components/pages/Main";
import Login from "./components/pages/Login";
import Logout from "./components/pages/Logout";
import Regist from "./components/pages/Regist";
import MakeItem from "./components/pages/MakeItem";
import AddItem from "./components/pages/AddItem";
import Order from "./components/pages/Order";
import Notice from "./components/pages/Notice";
import Help from "./components/pages/HelpToAdmin";
<<<<<<< HEAD
import Ask from "./components/pages/AskToAdmin";
=======
import PrivateRoute from "./components/pages/PrivateRoute";
>>>>>>> 581fd9a7c5a9027d239f8c15c10edffa3f8b447d
import NotFound from "./components/pages/NotFound";

function App() {
  const [user, setUser] = useState(localStorage.getItem("token"));
  return (
    <div>
      <Router>
        <Header user={user} />
        <Navbar />

        <main>
          <Routes user={user}>
            <Route path="/" element={<Main />} />
            <Route path="login" element={<Login />} />
            <Route path="logout" element={<Logout />} />
            <Route path="regist" element={<Regist />} />

            <Route element={<PrivateRoute user={user} />}>
              <Route path="makeItem" element={<MakeItem />} />
              <Route path="addItem" element={<AddItem />} />
              <Route path="order" element={<Order />} />
            </Route>

            <Route path="notice" element={<Notice />} />
            <Route path="help" element={<Help />} />
            <Route path="ask" element={<Ask />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
