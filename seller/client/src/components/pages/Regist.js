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
  const [channelname, setChannelname] = useState("");
  const [channelPlatform, setChannelPlatform] = useState("");
  const [channelGenre, setChannelGenre] = useState("");
  const [url, setUrl] = useState("");
  const [profileimage, setProfileimage] = useState("");
  const [intro, setIntro] = useState("");

  // 오류메시지를 상태로 저장
  const [idMessage, setIdMessage] = useState("");
  const [pwMessage, setPwMessage] = useState("");
  const [pwConfirmMessage, setPwConfirmMessage] = useState("");
  const [sellernameMessage, setSellernameMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");

  // 유효성 검사
  const [isId, setIsId] = useState(false); // 아이디를 8자 이상 입력했는지
  // const [isSameId, setIsSameId] = useState(false); // 아이디 중복 확인을 했는지
  const [isPw, setIsPw] = useState(false); // 8자 이상 비밀번호를 입력했는지
  const [isPwConfirm, setIsPwConfirm] = useState(false); // 동일한 비밀번호 입력했는지
  const [isSellername, setIsSellername] = useState(false); // 이름을 입력했는지
  const [isEmail, setIsEmail] = useState(false); // 이메일을 입력했는지
  const [isEmailType, setIsEmailType] = useState(false); // 이메일 형식을 만족했는지
  const [isChannelName, setIsChannelName] = useState(false); // 채널이름을 입력했는지
  const [isChannelPlatform, setIsChannelPlatform] = useState(false); // 활동 플랫폼 선택했는지
  const [isChannelGenre, setIsChannelGenre] = useState(false); // 채널 장르 선택했는지
  const [isUrl, setIsUrl] = useState(false); // url을 입력했는지
  const [isProfileimage, setIsProfileimage] = useState(false); // 프로필이미지를 선택했는지
  const [isIntro, setIsIntro] = useState(false); // 한줄소개를 작성했는지
  const [isAgree1, setIsAgree1] = useState(false); // 14세 이상 체크했는지
  const [isAgree2, setIsAgree2] = useState(false); // 개인정보 약관 동의 체크했는지
  const [isAgree3, setIsAgree3] = useState(false); // 이용 약관 동의 체크했는지

  const navigate = useNavigate();

  async function frmHandler(e) {
    e.preventDefault();

    if (
      isId &&
      isPw &&
      isPwConfirm &&
      isSellername &&
      isEmail &&
      isEmailType &&
      isChannelName &&
      isChannelPlatform &&
      isChannelGenre &&
      isUrl &&
      isProfileimage &&
      isIntro &&
      isAgree1 &&
      isAgree2 &&
      isAgree3 === true
    ) {
      let formData = new FormData();
      formData.append("id", id);
      formData.append("pw", pw);
      formData.append("sellername", sellername);
      formData.append("email", email);
      formData.append("channelname", channelname);
      formData.append("channelplatform", channelPlatform);
      formData.append("channelgenre", channelGenre);
      formData.append("url", url);
      formData.append("profileimage", profileimage);
      formData.append("intro", intro);

      await axios
        .post("http://localhost:4001/regist", formData)
        .then((response) => {
          if (response.data.status === 201) {
            window.alert(response.data.message);
            localStorage.setItem("id", response.data.id);
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("sellername", response.data.sellername);
            localStorage.setItem("channelname", response.data.channelname);
            localStorage.setItem(
              "channelplatform",
              response.data.channelplatform
            );
            localStorage.setItem("channelgenre", response.data.channelgenre);
            localStorage.setItem("url", response.data.url);
            localStorage.setItem("profileimage", response.data.profileimage);
            localStorage.setItem("intro", response.data.intro);
            navigate("/login");
          } else {
            window.alert("에러발생 : 관리자에게 문의하세요");
            navigate("/");
          }
        });
    } else {
      alert("입력하신 정보 또는 약관 동의를 다시 확인해주세요.");
    }
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
      setIdMessage("사용가능한 아이디 입니다.");
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

  // 이름
  function onChangeSellername(e) {
    const sellernameCurrent = e.target.value;
    setSellername(sellernameCurrent);

    if (sellernameCurrent.length === null || sellernameCurrent.length === "") {
      setSellernameMessage("이름을 입력해주세요");
      setIsSellername(false);
    } else {
      setSellernameMessage("");
      setIsSellername(true);
    }
  }

  // 이메일 정규식
  function onChangeEmail(e) {
    //eslint-disable-next-line
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

  // 채널명
  function onChangeChannelname(e) {
    const channelnameCurrent = e.target.value;
    setChannelname(channelnameCurrent);

    if (
      channelnameCurrent.length === null ||
      channelnameCurrent.length === ""
    ) {
      setIsChannelName(false);
    } else {
      setIsChannelName(true);
    }
  }

  // 활동 플랫폼
  function onChangeChannelPlatform(e) {
    const channelPlatformCurrent = e.target.value;
    setChannelPlatform(channelPlatformCurrent);

    if (channelPlatformCurrent == null) {
      setIsChannelPlatform(false);
    } else {
      setIsChannelPlatform(true);
    }
  }
  // 채널 장르
  function onChangeChannelGenre(e) {
    const channelGenreCurrent = e.target.value;
    setChannelGenre(channelGenreCurrent);

    if (channelGenreCurrent == null) {
      setIsChannelGenre(false);
    } else {
      setIsChannelGenre(true);
    }
  }
  // 채널 주소(url)
  function onChangeUrl(e) {
    const urlCurrent = e.target.value;
    setUrl(urlCurrent);

    if (urlCurrent.length === null || urlCurrent.length === "") {
      setIsUrl(false);
    } else {
      setIsUrl(true);
    }
  }

  // 프로필 이미지
  function onChangeProfileImage(e) {
    const profileImageCurrent = e.target.files[0];
    setProfileimage(profileImageCurrent);

    if (profileImageCurrent === null || profileImageCurrent === "") {
      setIsProfileimage(false);
    } else {
      setIsProfileimage(true);
    }
  }

  // 한줄소개
  function onChangeIntro(e) {
    const introCurrent = e.target.value;
    setIntro(introCurrent);

    if (introCurrent.length === null || introCurrent.length === "") {
      setIsIntro(false);
    } else {
      setIsIntro(true);
    }
  }
  // 14세 이상
  function onChangeAgree1(e) {
    const agreeCurrent = e.target.value;

    if (agreeCurrent === 0) {
      setIsAgree1(false);
    } else {
      setIsAgree1(true);
    }
  }
  // 개인정보 약관 동의
  function onChangeAgree2(e) {
    const agreeCurrent = e.target.value;

    if (agreeCurrent === 0) {
      setIsAgree2(false);
    } else {
      setIsAgree2(true);
    }
  }
  // 이용약관 동의
  function onChangeAgree3(e) {
    const agreeCurrent = e.target.value;

    if (agreeCurrent === 0) {
      setIsAgree3(false);
    } else {
      setIsAgree3(true);
    }
  }

  // // 입력 또는 체크를 안했으면 alert
  // function onClick() {

  //   // 약관체크
  //   let chk = document.querySelector("input[name='agree']:checked");
  //   if (!chk) {
  //     alert("약관을 확인 후 체크해주세요");
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }

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
                    onChange={onChangeSellername}
                  />
                  {sellername && <span>{sellernameMessage}</span>}
                </td>
              </tr>
              <tr>
                <th>이메일</th>
                <td>
                  <input type="text" name="email" onChange={onChangeEmail} />
                  {email && <span>{emailMessage}</span>}
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
                    onChange={onChangeChannelname}
                  />
                </td>
              </tr>
              <tr>
                <th>활동 플랫폼</th>
                <td>
                  <select
                    name="channelPlatform"
                    onChange={onChangeChannelPlatform}
                  >
                    <option value="">선택하세요</option>
                    <option value="1">유튜브</option>
                    <option value="2">틱톡</option>
                    <option value="3">트위치</option>
                    <option value="4">아프리카tv</option>
                    <option value="5">기타</option>
                  </select>
                  <select name="channelGenre" onChange={onChangeChannelGenre}>
                    <option value="">선택하세요</option>
                    <option value="1">게임</option>
                    <option value="2">스포츠</option>
                    <option value="3">음악</option>
                    <option value="4">여행</option>
                    <option value="5">음식</option>
                    <option value="6">기타</option>
                  </select>
                </td>
              </tr>
              <tr>
                <th>채널 주소(url)</th>
                <td>
                  <input type="text" name="url" onChange={onChangeUrl} />
                </td>
              </tr>
              <tr>
                <th>프로필 이미지</th>
                <td>
                  <input
                    className="profileimage"
                    type="file"
                    name="profileimage"
                    onChange={onChangeProfileImage}
                  />
                </td>
              </tr>
              <tr>
                <th>한줄 소개</th>
                <td>
                  <input type="text" name="intro" onChange={onChangeIntro} />
                </td>
              </tr>
            </table>
          </div>
          <div className="agree-check">
            <div className="checkbox">
              <input type="checkbox" name="agree" onChange={onChangeAgree1} />
              <span>
                <strong>(필수)</strong> 만 14세 이상입니다.
              </span>
            </div>
            <div className="checkbox">
              <input type="checkbox" name="agree" onChange={onChangeAgree2} />
              <span>
                <strong>(필수)</strong> 개인정보의 수집 및 이용에 관하여
                동의합니다.
              </span>
              <Link to="#" target="_blank">
                전체보기
              </Link>
            </div>
            <div className="checkbox">
              <input type="checkbox" name="agree" onChange={onChangeAgree3} />
              <span>
                <strong>(필수)</strong> 이용약관에 동의합니다.
              </span>
              <Link to="#" target="_blank">
                전체보기
              </Link>
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
