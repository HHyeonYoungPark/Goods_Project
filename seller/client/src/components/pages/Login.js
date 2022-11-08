import axios from "axios";
import React from "react";
import { useState } from "react";
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
          window.alert(response.data.message);
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
    <div className="container">
      <div className="login-wrap">
        <div className="login-title">
          <h1>셀러 로그인</h1>
        </div>
        <div className="login">
          <form method="post" onSubmit={frmHandler}>
            <div className="login">
              <input
                type="text"
                name="id"
                placeholder="아이디"
                onChange={(e) => setId(e.target.value)}
              />
            </div>
            <div className="login">
              <input
                type="password"
                name="pw"
                placeholder="비밀번호"
                onChange={(e) => setPw(e.target.value)}
              />
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
