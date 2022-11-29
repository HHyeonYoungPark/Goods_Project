import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import "../../css/pages/privateInfo/Profile.css";

function ProfileModify({userId}) {
  const [customerPw, setCustomerPw] = useState("");
  const [customerPwConfirm, setCustomerPwConfirm] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [customerMobile, setCustomerMobile] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerAddress1, setCustomerAddress1] = useState("");
  const [customerAddress2, setCustomerAddress2] = useState("");
  const [customerZipcod, setCustomerZipcod] = useState("");
  
  const [isCustomerPw, setIsCustomerPw] = useState(false);
  const [isCustomerPwConfirm, setIsCustomerPwConfirm] = useState(false);
  const [isCustomerName, setIsCustomerName] = useState(false);
  const [isCustomerMobile, setIsCustomerMobile] = useState(false);
  const [isCustomerEmail, setIsCustomerEmail] = useState(false);
  const [isCustomerEmailType, setIsCustomerEmailType] = useState(false);
  const [isCustomerAddress1, setIsCustomerAddress1] = useState(false);
  const [isCustomerZipcod, setIsCustomerZipcod] = useState(false);

  const [customerPwMessage, setCustomerPwMessage] = useState("");
  const [customerPwConfirmMessage, setCustomerPwConfirmMessage] = useState("");
  const [customerNameMessage, setCustomerNameMessage] = useState("");
  const [customerMobileMessage, setCustomerMobileMessage] = useState("");
  const [customerEmailMessage, setCustomerEmailMessage] = useState("");
  const [customerAddressMessage, setCustomerAddressMessage] = useState("");
  const [customerZipcodMessage, setCustomerZipcodMessage] = useState("");

  const [profile, setProfile] = useState([]);

  const navigate = useNavigate();

  const getCustomerData = async () => {
    await axios.get("http://localhost:4002/customer/profile/"+userId)
        .then((response) => {
        if (response.data.status === 404) {
          window.alert(response.data.message);
          navigate("/login");
        } else if(response.data.status === 201){
          setProfile(response.data.result[0]);
          setCustomerName(response.data.result[0].NAME);
          setCustomerMobile(response.data.result[0].mobile);
          setCustomerEmail(response.data.result[0].email);
          setCustomerAddress1(response.data.result[0].address2);
          setCustomerAddress2(response.data.result[0].address2);
          setCustomerZipcod(response.data.result[0].zipcod);
        } else {
          window.alert("에러발생 : 관리자에게 문의하세요");
          navigate("/");
        }
      });
    } 
  
  useEffect(() => {
    getCustomerData();
  }, []);

  function onChangeCustomerPw(e) {
    const customerPwCheck = e.target.value;
    setCustomerPw(customerPwCheck);

    if (customerPwCheck.length < 8) {
      setCustomerPwMessage("비밀번호를 8자이상 입력해주세요");
      setIsCustomerPw(false);
    } else {
      setCustomerPwMessage("사용가능한 비밀번호 입니다");
      setIsCustomerPw(true);
    }
  }

  function onChangeCustomerPwConfirm(e) {
    const customerPwConfirmCheck = e.target.value;
    setCustomerPwConfirm(customerPwConfirmCheck);

    if (customerPw === customerPwConfirmCheck) {
      setCustomerPwConfirmMessage("비밀번호가 일치합니다.");
      setIsCustomerPwConfirm(false);
    } else {
      setCustomerPwConfirmMessage("비밀번호가 일치하지 않습니다. 다시 입력해주시기 바랍니다.");
      setIsCustomerPwConfirm(true);
    }
  }

  function onChangeCustomerName(e) {
    const customerNameCheck = e.target.value;
    setCustomerName(customerNameCheck);

    if (customerName === "") {
      setCustomerNameMessage("이름을 입력해주세요");
      setIsCustomerName(false);
    } else {
      setCustomerNameMessage("");
      setIsCustomerName(true);
    }
  }

  function onChangeCustomerMobile(e) {
    const customerMobileCheck = e.target.value;
    setCustomerMobile(customerMobileCheck);

    if (customerMobile === "") {
      setCustomerMobileMessage("전화번호를 입력해주세요");
      setIsCustomerMobile(false);
    } else {
      setCustomerMobileMessage("");
      setIsCustomerMobile(true);
    }
  }

  function onChangeCustomerEmail(e) {
    const emailRegex = /^[a-z A-Z 0-9 +-\_.]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/;
    const customerEmailCheck = e.target.value;
    setCustomerEmail(customerEmailCheck);

    if (!emailRegex.test(customerEmailCheck)) {
      setCustomerEmailMessage("잘못된 이메일 형식입니다.");
      setIsCustomerEmail(true);
      setIsCustomerEmailType(false);
    } else {
      setCustomerEmailMessage("올바른 이메일 형식입니다.");
      setIsCustomerEmail(true);
      setIsCustomerEmailType(true);
    }
  }

  function onChangeCustomerAddress1(e) {
    const customerAddressCheck = e.target.value;
    setCustomerAddress1(customerAddressCheck);

    if (customerAddress1 === "") {
      setCustomerAddressMessage("주소를 입력해주세요");
      setIsCustomerAddress1(false);
    } else {
      setCustomerAddressMessage("");
      setIsCustomerAddress1(true);
    }
  }
  
  function onChangeCustomerAddress2(e) {
    const customerAddress2Check = e.target.value;
    setCustomerAddress2(customerAddress2Check);
  }

  function onChangeCustomerZipcod(e) {
    const customerZipcodCheck = e.target.value;
    setCustomerZipcod(customerZipcodCheck);

    if (customerZipcod === "") {
      setCustomerZipcodMessage("우편번호를 입력해주세요");
      setIsCustomerZipcod(false);
    } else {
      setCustomerZipcodMessage("");
      setIsCustomerZipcod(true);
    }
  }

  async function frmHandler(e) {
    e.preventDefault();
    if(
      isCustomerPw &&
      isCustomerPwConfirm &&
      isCustomerName &&
      isCustomerMobile &&
      isCustomerEmail &&
      isCustomerEmailType &&
      isCustomerAddress1 &&
      isCustomerZipcod
    ) {
      const CustomerData = {customerPw, customerName, customerMobile, customerEmail, customerAddress1, customerAddress2, customerZipcod}
      
      await axios.post("http://localhost:4001/customer/profileModify", CustomerData)
        .then((response) => {
        if (response.data.status === 201) {
          window.alert(response.data.message);
          navigate("/");
        } else {
          window.alert("에러발생 : 관리자에게 문의하세요");
          navigate("/");
        }
      });
    } 
  }
  
  return (
    <div className="modify-container">
      <div className="modify-wrap">
        <div className="modify-title">
          <h1>회원 정보 수정</h1>
        </div>
        <div className="modify-info">
          <form
            method="post"
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
                    name="customerId"
                    value={profile.id}
                    readOnly
                  />
                </td>
              </tr>
              <tr>
                <th>비밀번호</th>
                <td>
                  <input
                    type="password"
                    name="customerPw"
                    onChange={onChangeCustomerPw}
                  />
                  {customerPw && <span>{customerPwMessage}</span>}
                </td>
              </tr>
              <tr>
                <th>비밀번호 확인</th>
                <td>
                  <input type="password" name="customerPwConfirm" onChange={onChangeCustomerPwConfirm} />
                  {customerPwConfirm && <span>{customerPwConfirmMessage}</span>}
                </td>
              </tr>
              <tr>
                <th>이름</th>
                <td>
                  <input
                    type="text"
                    name="customerName"
                    value={customerName}
                    onChange={onChangeCustomerName}
                  />
                  {customerNameMessage && <span>{customerNameMessage}</span>}
                </td>
              </tr>
              <tr>
                <th>전화번호</th>
                <td>
                  <input
                    type="text"
                    name="customerMobile"
                    value={customerMobile}
                    onChange={onChangeCustomerMobile}
                  />
                  {customerMobileMessage && <span>{customerMobileMessage}</span>}
                </td>
              </tr>
              <tr>
                <th>이메일</th>
                <td>
                  <input
                    type="text"
                    name="customerEmail"
                    value={customerEmail}
                    onChange={onChangeCustomerEmail}
                  />
                  {customerEmailMessage && <span>{customerEmailMessage}</span>}
                </td>
              </tr>
              <tr>
                <th>주소1</th>
                <td>
                  <input
                    type="text"
                    name="customerAddress1"
                    value={customerAddress1}
                    onChange={onChangeCustomerAddress1}
                  />
                  {customerAddressMessage && <span>{customerAddressMessage}</span>}
                </td>
              </tr>
              <tr>
                <th>주소2</th>
                <td>
                  <input
                    type="text"
                    name="customerAddress2"
                    value={customerAddress2}
                    onChange={onChangeCustomerAddress2}
                  />
                </td>
              </tr>
              <tr>
                <th>우편번호</th>
                <td>
                  <input
                    type="text"
                    name="customerZipcod"
                    value={customerZipcod}
                    onChange={onChangeCustomerZipcod}
                  />
                  {customerZipcodMessage && <span>{customerZipcodMessage}</span>}
                </td>
              </tr>
            </table>
            <div className="submit-btn">
              <input type="submit" value="수정하기" />
              <button type="button" onClick={(e) => navigate(-1)}>취소</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProfileModify;
