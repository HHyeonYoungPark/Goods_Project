import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

function Cart() {
  const [cart, setCart] = useState([]);
  const getCartData = async () => {
    await axios.get("http://localhost:4001/customer/cart")
      .then((response) => {
        if(response.data.status === 404) {
          window.alert(response.data.message);
          navigate("/login");
        } else if(response.data.status === 201){
          setProfile(response.data);
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
