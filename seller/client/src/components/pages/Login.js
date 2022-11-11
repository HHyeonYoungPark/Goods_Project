import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/pages/Login.css";

function Login() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  async function frmHandler(e) {
    e.preventDefault();
    await axios
      .post("http://localhost:4001/login", { id, pw })
      .then((response) => {
        if (response.data.status === 201) {
          localStorage.setItem("id", response.data.id);
          localStorage.setItem("token", response.data.token);
          window.location = "/";
        } else if (response.data.status === 400) {
          window.alert(response.data.message);
          window.location = "/login";
        } else if (response.data.status === 404) {
          window.alert(response.data.message);
          window.location = "/login";
        } else {
          window.alert("관리자에게 문의하세요.");
          window.location = "/";
        }
      });
  }

  return (
    <div className="login-container">
      <div className="login-wrap">
        <div className="login-title">
          <h1>로그인</h1>
        </div>
        <div className="login-box">
          <form method="post" onSubmit={frmHandler}>
            <div className="login">
              <input
                type="text"
                name="id"
                placeholder="아이디"
                onChange={(e) => setId(e.target.value)}
              />
            </div>
            <div className="login-box">
              <input
                type="password"
                name="pw"
                placeholder="비밀번호"
                onChange={(e) => setPw(e.target.value)}
              />
            </div>

            <div className="login-btn">
              <input type="submit" value="로그인" />
            </div>
            <div className="link-wrap">
              <div className="regist-link">
                <Link to="/regist">회원가입</Link>
              </div>
              <div className="find-id">
                <Link to="/find">아이디,비밀번호 찾기</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
