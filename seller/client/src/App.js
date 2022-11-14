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
import AdminPage from "./components/pages/AdminPage";
import PrivateMyPage from "./components/pages/PrivateMyPage";
import MyPage from "./components/pages/MyPage";
import SellHistory from "./components/pages/SellHistory";
import MyAsk from "./components/pages/MyAsk";
import UserInfo from "./components/pages/UserInfo";
import MakeItem from "./components/pages/MakeItem";
import AddItem from "./components/pages/AddItem";
import Order from "./components/pages/Order";
import Notice from "./components/pages/Notice";
import Help from "./components/pages/HelpToAdmin";
import TableGallary from "./components/pages/TableGallary";
import ViewOthers from "./components/pages/ViewOthers";
import Ask from "./components/pages/AskToAdmin";
import PrivateRoute from "./components/pages/PrivateRoute";
import NotFound from "./components/pages/NotFound";

import AllManager from "./components/pages/AllManager";
import GoodsManager from "./components/pages/GoodsManager";
import NoticeManager from "./components/pages/NoticeManager";
import AskManager from "./components/pages/AskManager";
import UserManager from "./components/pages/UserManager";
import CostumerManager from "./components/pages/CostumerManager";
import SellerManager from "./components/pages/SellerManager";
import WriteNotice from "./components/pages/WriteNotice";

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
