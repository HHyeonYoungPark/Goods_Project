import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// layout
import Header from "./components/layout/Header";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// pages
import Main from "./components/pages/Main";
import Login from "./components/pages/privateInfo/Login";
import Logout from "./components/pages/privateInfo/Logout";
import Regist from "./components/pages/privateInfo/Regist";
import GoodsDetail from "./components/pages/goods/GoodsDetail";
import GoodsLists from "./components/pages/goods/GoodsLists";
import Profile from "./components/pages/privateInfo/Profile";
import ProfileModify from "./components/pages/privateInfo/ProfileModify"
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
  const [userId, setUserId] = useState(localStorage.getItem("token_id"));

  return (
    <div>
      <Router>
        <Header userId={userId}/>
        <Navbar />
        
        <main>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="login" element={<Login />} />
            <Route path="logout" element={<Logout />} />
            <Route path="regist" element={<Regist />} />
            <Route path="profile" element={<Profile userId={userId}/>} />
            <Route path="profileModify" element={<ProfileModify userId={userId}/>} />
            <Route path="cart" element={<Cart userId={userId}/>} />
            <Route path="wishlist" element={<Wishlist userId={userId}/>} />
            <Route path="review" element={<Review userId={userId}/>} />

            <Route path="influencerMain" element={<InfluencerMain />}>
              <Route path="influencerLists" element={<InfluencerLists />} >
                <Route path="goodsLists" element={<GoodsLists />} />
              </Route>
            </Route>
            <Route path="influencerStores" element={<InfluencerStores />} />
            
            <Route path="goodsMain" element={<GoodsMain />} />
            <Route path="goodsLists" element={<GoodsLists />} />
            <Route path="goodsDetail/:idx" element={<GoodsDetail userId={userId}/>} />
            
            <Route path="newnhot" element={<NewnHot />} />
            <Route path="limitednspecial" element={<LimitednSpecial />} />
            <Route path="clearance" element={<Clearance />} />
            <Route path="customerHelp" element={<CustomerHelp />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
