import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

// layout
import Header from "./components/layout/Header";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// pages
import Main from "./components/pages/goods/Main";
import Login from "./components/pages/login & logout/Login";
import Logout from "./components/pages/login & logout/Logout";
import Regist from "./components/pages/login & logout/Regist";
import AdminPage from "./components/pages/privateInfo/AdminPage";
import PrivateMyPage from "./components/pages/PrivateMyPage";
import MyPage from "./components/pages/privateInfo/MyPage";
import SellHistory from "./components/pages/privateInfo/SellHistory";
import MyAsk from "./components/pages/privateInfo/MyAsk";
import UserInfo from "./components/pages/privateInfo/UserInfo";
import MakeItem from "./components/pages/goods/MakeItem";
import AddItem from "./components/pages/goods/AddItem";
import Order from "./components/pages/board/Order";
import Notice from "./components/pages/board/Notice";
import Help from "./components/pages/board/HelpToAdmin";
import TableGallary from "./components/pages/goods/TableGallary";
import ViewOthers from "./components/pages/goods/ViewOthers";
import Ask from "./components/pages/board/AskToAdmin";
import PrivateRoute from "./components/pages/PrivateRoute";
import NotFound from "./components/pages/NotFound";

import AllManager from "./components/pages/privateInfo/AllManager";
import GoodsManager from "./components/pages/privateInfo/GoodsManager";
import NoticeManager from "./components/pages/privateInfo/NoticeManager";
import AskManager from "./components/pages/privateInfo/AskManager";
import UserManager from "./components/pages/privateInfo/UserManager";
import CostumerManager from "./components/pages/privateInfo/CostumerManager";
import SellerManager from "./components/pages/privateInfo/SellerManager";
import WriteNotice from "./components/pages/board/WriteNotice";
import Board from "./components/pages/board/Board";
import BoardAdd from "./components/pages/board/BoardAdd";
import BoardManager from "./components/pages/board/BoardManager ";
import Write from "./components/pages/board/Write";
import View from "./components/pages/board/View";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [userId, setUserId] = useState(localStorage.getItem("id"));

  return (
    <div>
      <Router>
        <Header token={token} userId={userId} />
        <Navbar />

        <main>
          <Routes token={token} userId={userId}>
            <Route path="/" element={<Main />} />
            <Route path="login" element={<Login />} />
            <Route path="logout" element={<Logout />} />
            <Route path="regist" element={<Regist />} />

            <Route element={<PrivateMyPage token={token} userId={userId} />}>
              <Route
                path="myPage"
                element={<MyPage token={token} userId={userId} />}
              >
                <Route index="userInfo" element={<UserInfo />} />
                <Route path="sellHistory" element={<SellHistory />} />
                <Route path="myAsk" element={<MyAsk />} />
                <Route path="userInfo" element={<UserInfo />} />
              </Route>
            </Route>

            <Route
              path="adminPage"
              element={<AdminPage token={token} userId={userId} />}
            >
              <Route index="allManager" element={<AllManager />} />
              <Route path="goodsManager" element={<GoodsManager />} />
              <Route path="userManager" element={<UserManager />}>
                <Route index="sellerManager" element={<SellerManager />} />
                <Route path="sellerManager" element={<SellerManager />} />
                <Route path="costumerManager" element={<CostumerManager />} />
              </Route>

              <Route path="boardManager" element={<BoardManager />} />

              <Route path="noticeManager" element={<NoticeManager />} />
              <Route path="askManager" element={<AskManager />} />
            </Route>

            <Route element={<PrivateRoute token={token} />}>
              <Route path="makeItem" element={<MakeItem />}>
                <Route index="tableGallary" element={<TableGallary />} />
                <Route path="tableGallary" element={<TableGallary />} />
              </Route>
              <Route path="addItem" element={<AddItem />} />
              <Route path="order" element={<Order />} />
            </Route>

            <Route path="boardAdd" element={<BoardAdd />} />
            <Route path="board/:boardName" element={<Board />} />
            <Route path="board/:boardName/write" element={<Write />} />
            <Route path="board/:boardName/:idx" element={<View />} />

            <Route path="notice" element={<Notice />} />
            <Route
              path="writeNotice"
              element={<WriteNotice userId={userId} />}
            />
            <Route path="viewOthers" element={<ViewOthers />} />
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
