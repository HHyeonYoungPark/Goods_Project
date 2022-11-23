import React from "react";
import { Link } from "react-router-dom";

function GoodsMain() {
  return (
    <div>
      <h1>GoodsMain</h1>
      <div className="goodsMainHeader">
        <ul className="goodsList">
          <li>
            <Link to="/goodsLists" >
              패션
            </Link>
          </li>
          <li>
            <Link to="/goodsLists" >
              전자기기
            </Link>
          </li>
          <li>
            <Link to="/goodsLists" >
              악세서리
            </Link>
          </li>
          <li>
            <Link to="/goodsLists" >
              문구
            </Link>
          </li>
          <li>
            <Link to="/goodsLists" >
              생활
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default GoodsMain;
