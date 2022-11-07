import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "../css/pages/Regist.css";

function Regist() {
  // 입력받은 개인정보
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [pwConfirm, setPwConfirm] = useState();
  const [sellername, setSellername] = useState("");
  const [email, setEmail] = useState("");
  const [sellertype, setSellertype] = useState("");
  const [channelname, setChannelname] = useState("");
  const [url, setUrl] = useState("");
  const [profileimage, setProfileimage] = useState("");
  const [intro, setIntro] = useState("");

  // 오류메시지를 상태로 저장
  const [idMessage, setIdMessage] = useState("");
  const [pwMessage, setPwMessage] = useState("");
  const [pwConfirmMessage, setPwConfirmMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");

  // 유효성 검사
  const [isId, setIsId] = useState(false); // 아이디를 8자 이상 입력했는지
  const [isSameId, setIsSameId] = useState(false); // 아이디 중복 확인을 했는지
  const [isPw, setIsPw] = useState(false); // 8자 이상 비밀번호를 입력했는지
  const [isPwConfirm, setIsPwConfirm] = useState(false); // 동일한 비밀번호 입력했는지
  const [isEmail, setIsEmail] = useState(false); // 이메일을 입력했는지
  const [isEmailType, setIsEmailType] = useState(false); // 이메일 형식을 만족했는지

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
        navigate("/login");
      } else {
        window.alert("에러발생 : 관리자에게 문의하세요");
        navigate("/");
      }
    });
  }

  // 유효성 검사

  // 아이디
  function onChangeId(e) {
    const idCurrent = e.target.value;
    setId(idCurrent);

    if (idCurrent.length < 8) {
      setIdMessage("아이디를 8자이상 입력해주세요");
      setIsId(false);
    } else {
      setIdMessage("사용 가능한 아이디입니다.");
      setIsId(true);
    }
  }

  // 비밀번호
  function onChangePw(e) {
    const pwCurrent = e.target.value;
    setPw(pwCurrent);

    if (pwCurrent.length < 8) {
      setPwMessage("비밀번호를 8자이상 입력해주세요");
      setIsPw(false);
    } else {
      setPwMessage("사용 가능한 비밀번호입니다.");
      setIsPw(true);
    }
  }
  // 비밀번호 재확인
  function onChangePwConfirm(e) {
    const pwConfirmCurrent = e.target.value;
    setPwConfirm(pwConfirmCurrent);

    if (pw === pwConfirmCurrent) {
      setPwConfirmMessage("비밀번호가 일치합니다.");
      setIsPwConfirm(true);
    } else {
      setPwConfirmMessage(
        "비밀번호가 일치하지 않습니다. 다시 입력해주시기 바랍니다."
      );
      setIsPwConfirm(false);
    }
  }

  // 아이디 중복확인
  const sameIdCheck = (e) => {
    e.preventDefault();

    axios.post("/sameIdCheck", id).then((response) => {
      if (response.canUseId) {
        alert("사용 가능한 아이디입니다.");
        setIsSameId(true);
      } else {
        alert("이미 존재하는 아이디가 있습니다.");
        setIsSameId(false);
      }
    });
  };

  // 이메일 정규식
  function onChangeEmail(e) {
    const emailRegex = /^[a-z A-Z 0-9 +-\_.]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/;
    const emailCurrent = e.target.value;
    setEmail(emailCurrent);

    if (!emailRegex.test(emailCurrent)) {
      setEmailMessage("잘못된 이메일 형식입니다.");
      setIsEmail(true);
      setIsEmailType(false);
    } else {
      setEmailMessage("올바른 이메일 형식입니다.");
      setIsEmail(true);
      setIsEmailType(true);
    }
  }

  return (
    <div className="container">
      <div className="regist-wrap">
        <div className="regist-title">
          <h1>판매자 신청</h1>
          <h4>필수 정보 입력 후 신청 시 담당자 검토 후 가입이 승인됩니다.</h4>
        </div>
        <form
          method="post"
          encType="multipart/form-data"
          onSubmit={frmHandler}
          id="form"
          name="form"
        >
          <div className="regist-info">
            <h3>기본정보</h3>
            <table>
              <tr>
                <th>아이디</th>
                <td>
                  <input type="text" name="id" onChange={onChangeId} />
                  {idMessage && <span>{idMessage}</span>}
                  <button onClick={sameIdCheck} disabled={!isSameId}>
                    중복 확인
                  </button>
                </td>
              </tr>
              <tr>
                <th>비밀번호</th>
                <td>
                  <input type="password" name="pw" onChange={onChangePw} />
                  {pw && <span>{pwMessage}</span>}
                </td>
              </tr>
              <tr>
                <th>비밀번호 확인</th>
                <td>
                  <input
                    type="password"
                    name="pwConfirm"
                    onChange={onChangePwConfirm}
                  />
                  {pwConfirm && <span>{pwConfirmMessage}</span>}
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
                  <input type="text" name="email" onChange={onChangeEmail} />
                  {email && <span>{emailMessage}</span>}
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
          </div>
          <div className="channel-info">
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
                    className="profileimage"
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
          </div>
          <div className="agree-check">
            <div className="checkbox">
              <input type="checkbox" />
              <span>
                <strong>(필수)</strong> 만 14세 이상입니다.
              </span>
            </div>
            <div className="checkbox">
              <input type="checkbox" />
              <span>
                <strong>(필수)</strong> 개인정보의 수집 및 이용에 관하여
                동의합니다.
              </span>
            </div>
            <div className="checkbox">
              <input type="checkbox" />
              <span>
                <strong>(필수)</strong> 이용약관에 동의합니다.
              </span>
            </div>
          </div>
          <div className="submit-btn">
            <button className="list-btn">
              <Link to="/">돌아가기</Link>
            </button>
            <input type="submit" value="판매자 신청" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Regist;
