import React from "react";
import "../css/pages/Login.css";

function Login() {
  return (
    <div className="container">
      <div className="login-wrap">
        <div className="login-title">
          <h1>셀러 로그인</h1>
        </div>
        <div className="login">
          <form method="post">
            <div className="login">
              <input type="text" name="id" placeholder="아이디" />
            </div>
            <div className="login">
              <input type="password" name="pw" placeholder="비밀번호" />
            </div>
            <div className="login">
              <input type="checkbox" name="idSave" />
              <span>아이디 저장</span>
            </div>
            <div className="login-btn">
              <input type="submit" value="로그인" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
