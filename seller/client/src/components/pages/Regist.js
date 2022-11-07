import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../css/pages/Regist.css";

function Regist() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [sellername, setSellername] = useState("");
  const [email, setEmail] = useState("");
  const [sellertype, setSellertype] = useState("");
  const [channelname, setChannelname] = useState("");
  const [url, setUrl] = useState("");
  const [profileimage, setProfileimage] = useState("");
  const [intro, setIntro] = useState("");

  const navigate = useNavigate();

  function frmHandler(e) {
    e.preventDefault();
    let formData = new FormData();
    formData.append("id", id);
    formData.append("pw", pw);
    formData.append("sellername", sellername);
    formData.append("email", email);
    formData.append("sellertype", sellertype);
    formData.append("channelname", channelname);
    formData.append("url", url);
    formData.append("profileimage", profileimage);
    formData.append("intro", intro);

    axios.post("http://localhost:4001/regist", formData).then((response) => {
      if (response.data.status === 201) {
        window.alert(response.data.message);
        navigate("/");
      } else {
        window.alert("에러발생 : 관리자에게 문의하세요");
        navigate("/");
      }
    });
  }

  return (
    <div className="container">
      <div className="regist-wrap">
        <div className="regist-title">
          <h1>판매자 신청</h1>
          <h4>필수 정보 입력 후 신청 시 담당자 검토 후 가입이 승인됩니다.</h4>
        </div>
        <div className="regist-info">
          <h3>기본정보</h3>
          <form
            method="post"
            encType="multipart/form-data"
            onSubmit={frmHandler}
            id="form"
            name="form"
          >
            <table>
              <tr>
                <th>아이디</th>
                <td>
                  <input
                    type="text"
                    name="id"
                    id="id"
                    onChange={(e) => {
                      setId(e.target.value);
                    }}
                  />
                </td>
              </tr>
              <tr>
                <th>비밀번호</th>
                <td>
                  <input
                    type="password"
                    name="pw"
                    onChange={(e) => {
                      setPw(e.target.value);
                    }}
                  />
                </td>
              </tr>
              <tr>
                <th>비밀번호 확인</th>
                <td>
                  <input type="password" name="pw" />
                </td>
              </tr>
              <tr>
                <th>이름</th>
                <td>
                  <input
                    type="text"
                    name="sellername"
                    onChange={(e) => {
                      setSellername(e.target.value);
                    }}
                  />
                </td>
              </tr>
              <tr>
                <th>이메일</th>
                <td>
                  <input
                    type="text"
                    name="email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </td>
              </tr>
              <tr>
                <th>유형</th>
                <td>
                  <div class="sellertype">
                    <label>
                      <input
                        type="radio"
                        name="sellertype"
                        value="개인사업자"
                        onChange={(e) => {
                          setSellertype(e.target.value);
                        }}
                      />
                      개인사업자
                    </label>

                    <label>
                      <input
                        type="radio"
                        name="sellertype"
                        value="법인사업자"
                        onChange={(e) => {
                          setSellertype(e.target.value);
                        }}
                      />
                      법인사업자
                    </label>
                  </div>
                </td>
              </tr>
            </table>

            <h3>채널 관련 정보</h3>
            <table>
              <tr>
                <th>채널명</th>
                <td>
                  <input
                    type="text"
                    name="channelname"
                    onChange={(e) => {
                      setChannelname(e.target.value);
                    }}
                  />
                </td>
              </tr>
              <tr>
                <th>채널주소(url)</th>
                <td>
                  <input
                    type="text"
                    name="url"
                    onChange={(e) => {
                      setUrl(e.target.value);
                    }}
                  />
                </td>
              </tr>
              <tr>
                <th>프로필 이미지</th>
                <td>
                  <input
                    type="file"
                    name="profileimage"
                    onChange={(e) => {
                      setProfileimage(e.target.files[0]);
                    }}
                  />
                </td>
              </tr>
              <tr>
                <th>한줄소개</th>
                <td>
                  <input
                    type="text"
                    name="intro"
                    onChange={(e) => {
                      setIntro(e.target.value);
                    }}
                  />
                </td>
              </tr>
            </table>
            <div className="submit-btn">
              <input type="submit" value="판매자 신청" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Regist;
