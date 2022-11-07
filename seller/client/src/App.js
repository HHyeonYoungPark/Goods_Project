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
import MakeItem from "./components/pages/MakeItem";
import AddItem from "./components/pages/AddItem";
import Order from "./components/pages/Order";
import Review from "./components/pages/Review";
import Help from "./components/pages/HelpToAdmin";
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
            <Route path="makeItem" element={<MakeItem />} />
            <Route path="addItem" element={<AddItem />} />
            <Route path="order" element={<Order />} />
            <Route path="review" element={<Review />} />
            <Route path="help" element={<Help />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
