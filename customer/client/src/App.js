import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// layout
import Header from "./components/layout/Header";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// pages
import Main from "./components/pages/Main";
import Login from "./components/pages/privateInfo/Login";
import Regist from "./components/pages/privateInfo/Regist";
import GoodsDetail from "./components/pages/goods/GoodsDetail";
import GoodsLists from "./components/pages/goods/GoodsLists";
import Profile from "./components/pages/privateInfo/Profile";
import Review from "./components/pages/Review";
import CustomerHelp from "./components/pages/help/CustomerHelp";
import InfluencerLists from "./components/pages/influencer/InfluencerLists";
import InfluencerMain from "./components/pages/influencer/InfluencerMain";
import InfluencerStores from "./components/pages/influencer/InfluencerStores";
import GoodsMain from "./components/pages/goods/GoodsMain";
import NewnHot from "./components/pages/event/NewnHot";
import LimitednSpecial from "./components/pages/event/LimitednSpecial";
import Clearance from "./components/pages/event/Clearance";
import Wishlist from "./components/pages/privateInfo/Wishlist";
import Cart from "./components/pages/privateInfo/Cart";

import NotFound from "./components/pages/NotFound";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="login" element={<Login />} />
            <Route path="regist" element={<Regist />} />
            <Route path="influencerMain" element={<InfluencerMain />}>
              <Route path="influencerLists" element={<InfluencerLists />} />
            </Route>
            <Route path="influencerStores" element={<InfluencerStores />} />
            <Route path="goodsMain" element={<GoodsMain />} />
            <Route path="goodsLists" element={<GoodsLists />} />
            <Route path="goodsDetail" element={<GoodsDetail />} />
            <Route path="customerHelp" element={<CustomerHelp />} />
            <Route path="profile" element={<Profile />} />
            <Route path="newnhot" element={<NewnHot />} />
            <Route path="limitednspecial" element={<LimitednSpecial />} />
            <Route path="clearance" element={<Clearance />} />
            <Route path="cart" element={<Cart />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="review" element={<Review />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
