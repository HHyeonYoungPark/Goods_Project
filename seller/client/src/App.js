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
import LogoutToCustom from "./components/pages/login & logout/LogoutToCustom";
import Regist from "./components/pages/login & logout/Regist";
import Post from "./components/pages/login & logout/Post";
import AdminPage from "./components/pages/privateInfo/AdminPage";
import PrivateMyPage from "./components/pages/PrivateMyPage";
import MyPage from "./components/pages/privateInfo/MyPage";
import SellHistory from "./components/pages/privateInfo/SellHistory";
import MyAsk from "./components/pages/privateInfo/MyAsk";
import UserInfo from "./components/pages/privateInfo/UserInfo";
import AddItem from "./components/pages/goods/AddItem";
import UpdateItem from "./components/pages/goods/UpdateItem";
import ItemSearch from "./components/pages/goods/ItemSearch";
import NewItem from "./components/pages/goods/NewItem";
import Order from "./components/pages/board/Order";
import Cart from "./components/pages/privateInfo/Cart";
import Pay from "./components/pages/privateInfo/Pay";
import Pays from "./components/pages/privateInfo/Pays";
import OrderComplete from "./components/pages/privateInfo/OrderComplete";
import Notice from "./components/pages/board/Notice";
import Help from "./components/pages/board/HelpToAdmin";
import TableGallary from "./components/pages/goods/TableGallary";
import Detail from "./components/pages/goods/Detail";
import DetailTable from "./components/pages/goods/DetailTable";
import DetailReview from "./components/pages/goods/DetailReview";
import WriteReview from "./components/pages/goods/WriteReview";
import Ask from "./components/pages/board/AskToAdmin";
import PrivateRoute from "./components/pages/PrivateRoute";
import NotFound from "./components/pages/NotFound";

import AdminMain from "./components/pages/privateInfo/AdminMain";
import GoodsManager from "./components/pages/privateInfo/GoodsManager";
import NoticeManager from "./components/pages/privateInfo/NoticeManager";
import AskManager from "./components/pages/privateInfo/AskManager";
import UserManager from "./components/pages/privateInfo/UserManager";
import CustomerManager from "./components/pages/privateInfo/CustomerManager";
import SellerManager from "./components/pages/privateInfo/SellerManager";
import WriteNotice from "./components/pages/board/WriteNotice";
import Board from "./components/pages/board/Board";
import BoardAdd from "./components/pages/board/BoardAdd";
import BoardUpdate from "./components/pages/board/BoardUpdate";
import BoardManager from "./components/pages/board/BoardManager";
import Write from "./components/pages/board/Write";
import View from "./components/pages/board/View";
import ViewUpdate from "./components/pages/board/ViewUpdate";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [userId, setUserId] = useState(localStorage.getItem("id"));

  return (
    <div>
      <Router>
        {userId !== "admin" && (
          <>
            <Header token={token} userId={userId} />

            <Navbar />
          </>
        )}

        <main>
          <Routes token={token} userId={userId}>
            <Route path="/" element={<Main />}>
              <Route index="tableGallary" element={<TableGallary />} />
              <Route path="tableGallary" element={<TableGallary />} />
              <Route path="itemSearch/:keyword" element={<ItemSearch />} />
            </Route>
            <Route
              path="detail/:idx/:categoryCode1/:categoryCode2"
              element={<Detail token={token} userId={userId} />}
            >
              <Route index="detailTable" element={<DetailTable />} />
              <Route path="detailTable" element={<DetailTable />} />
              <Route
                path="detailReview"
                element={<DetailReview token={token} userId={userId} />}
              />
              <Route
                path="detailReview"
                element={<WriteReview token={token} userId={userId} />}
              />
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="logout" element={<Logout />} />
            <Route path="logouttocustom" element={<LogoutToCustom />} />

            <Route path="regist" element={<Regist />} />
            <Route path="post" element={<Post />} />

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
              <Route index="adminMain" element={<AdminMain />} />
              <Route path="goodsManager" element={<GoodsManager />} />
              <Route path="addItem" element={<AddItem />} />
              <Route path="updateItem/:idx" element={<UpdateItem />} />
              <Route path="order" element={<Order />} />
              <Route path="userManager" element={<UserManager />} />
              <Route path="customerManager" element={<CustomerManager />} />
              <Route path="sellerManager" element={<SellerManager />} />

              <Route
                path="boardManager"
                element={<BoardManager userId={userId} />}
              />
              <Route path="boardAdd" element={<BoardAdd />} />
              <Route path="boardUpdate/:BoardCode" element={<BoardUpdate />} />
              <Route path="board/:boardCode" element={<Board />} />
              <Route path="board/:boardCode/write" element={<Write />} />
              <Route path="board/:boardCode/:idx" element={<View />} />
              <Route
                path="board/:boardCode/update/:idx"
                element={<ViewUpdate />}
              />

              <Route path="noticeManager" element={<NoticeManager />} />
              <Route path="askManager" element={<AskManager />} />
            </Route>

            {/* <Route element={<PrivateRoute token={token} />}> */}
            {/* </Route> */}

            <Route path="newItem" element={<NewItem />} />
            <Route   path="pay/:idx/:categoryCode1/:categoryCode2" element={<Pay userId={userId} />} />
            <Route path="pays" element={<Pays userId={userId} />} />
            <Route
              path="orderComplete"
              element={<OrderComplete userId={userId} />}
            />
            <Route path="cart" element={<Cart userId={userId} />} />
            <Route path="notice" element={<Notice />} />
            <Route
              path="writeNotice"
              element={<WriteNotice userId={userId} />}
            />
            <Route path="help" element={<Help />} />
            <Route path="ask" element={<Ask />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        {userId !== "admin" && <Footer />}
      </Router>
    </div>
  );
}

export default App;
