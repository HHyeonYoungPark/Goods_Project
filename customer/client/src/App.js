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
import Login from "./components/pages/Login";
import Regist from "./components/pages/Regist";
import GoodsDetail from "./components/pages/GoodsDetail";
import GoodsLists from "./components/pages/GoodsLists";
import Profile from "./components/pages/Profile";
import Review from "./components/pages/Review";
import CustomerHelp from "./components/pages/CustomerHelp";
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
            <Route path="goodsLists" element={<GoodsLists />} />
            <Route path="goodsDetail" element={<GoodsDetail />} />
            <Route path="customerHelp" element={<CustomerHelp />} />
            <Route path="profile" element={<Profile />} />
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
