import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import '../../css/pages/privateInfo/Cart.css';

function Cart({userId}) {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const getCartData = async () => {
    await axios.get("http://localhost:4001/customer/cart")
      .then((response) => {
        if(response.data.status === 404) {
          window.alert(response.data.message);
          navigate("/login");
        } else if(response.data.status === 201){
          setCart(response.data);
        } else {
          window.alert("에러발생 : 관리자에게 문의하세요");
          navigate("/");
        }
      })
  }

  useEffect(() => {
    getCartData();
  }, []);

  return (
    <div>
      <h1>Cart</h1>
    </div>
  );
}

export default Cart;
