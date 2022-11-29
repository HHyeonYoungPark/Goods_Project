import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../css/pages/privateInfo/Regist.css";

function Regist() {
  const [customerId, setCustomerId] = useState("");
  const [customerPw, setCustomerPw] = useState("");
  const [customerPwConfirm, setCustomerPwConfirm] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [customerMobile, setCustomerMobile] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerAddress1, setCustomerAddress1] = useState("");
  const [customerAddress2, setCustomerAddress2] = useState("");
  const [customerZipcod, setCustomerZipcod] = useState("");
  
  const [isCustomerId, setIsCustomerId] = useState(false);
  const [isCustomerPw, setIsCustomerPw] = useState(false);
  const [isCustomerPwConfirm, setIsCustomerPwConfirm] = useState(false);
  const [isCustomerName, setIsCustomerName] = useState(false);
  const [isCustomerMobile, setIsCustomerMobile] = useState(false);
  const [isCustomerEmail, setIsCustomerEmail] = useState(false);
  const [isCustomerEmailType, setIsCustomerEmailType] = useState(false);
  const [isCustomerAddress1, setIsCustomerAddress1] = useState(false);
  const [isCustomerZipcod, setIsCustomerZipcod] = useState(false);

  const [customerIdMessage, setCustomerIdMessage] = useState("");
  const [customerPwMessage, setCustomerPwMessage] = useState("");
  const [customerPwConfirmMessage, setCustomerPwConfirmMessage] = useState("");
  const [customerNameMessage, setCustomerNameMessage] = useState("");
  const [customerMobileMessage, setCustomerMobileMessage] = useState("");
  const [customerEmailMessage, setCustomerEmailMessage] = useState("");
  const [customerAddressMessage, setCustomerAddressMessage] = useState("");
  const [customerZipcodMessage, setCustomerZipcodMessage] = useState("");

  const navigate = useNavigate();

  function onChangeCustomerId(e) {
    const customerIdCheck = e.target.value;
    setCustomerId(customerIdCheck);

    if (customerIdCheck.length < 8) {
      setCustomerIdMessage("아이디를 8자이상 입력해주세요");
      setIsCustomerId(false);
    } else {
      setCustomerIdMessage("아이디 중복체크를 해주세요.");
      setIsCustomerId(false);
    }
  }

  async function idDuplicatonChk(e) {
    e.preventDefault();
    await axios
      .post("http://localhost:4002/customer/idDuplicatonChk", { customerId })
      .then((response) => {
        if (response.data.status === 201) {
          setCustomerIdMessage("사용가능한 아이디입니다.");
          setIsCustomerId(true);
        } else {
          setCustomerIdMessage("이미 사용중인 아이디입니다.");
          setIsCustomerId(false);
        }
      });
  }

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
      setIsCustomerPwConfirm(true);
    } else {
      setCustomerPwConfirmMessage("비밀번호가 일치하지 않습니다. 다시 입력해주시기 바랍니다.");
      setIsCustomerPwConfirm(false);
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
      isCustomerId &&
      isCustomerPw &&
      isCustomerPwConfirm &&
      isCustomerName &&
      isCustomerMobile &&
      isCustomerEmail &&
      isCustomerEmailType &&
      isCustomerAddress1 &&
      isCustomerZipcod
    ) {
      const CustomerData = {customerId, customerPw, customerName, customerMobile, customerEmail, customerAddress1, customerAddress2, customerZipcod}
      
      await axios.post("http://localhost:4002/customer/regist", CustomerData)
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
    <div className="regist-container">
      <div className="regist-wrap">
        <div className="regist-title">
          <h1>회원 가입</h1>
        </div>
        <div className="regist-info">
          <form
            method="post"
            onSubmit={frmHandler}
            id="form"
            name="form"
          >
            <table>
              <tbody>
                <tr>
                  <th>아이디</th>
                  <td>
                    <input
                      type="text"
                      name="customerId"
                      onChange={onChangeCustomerId}
                    />
                    <button
                      type="button"
                      className="idCheckBtn"
                      onClick={idDuplicatonChk}
                    >
                      ID중복체크
                    </button>
                    {customerIdMessage && <span>{customerIdMessage}</span>}
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
                    {customerPwMessage && <span>{customerPwMessage}</span>}
                  </td>
                </tr>
                <tr>
                  <th>비밀번호 확인</th>
                  <td>
                    <input type="password" name="customerPwConfirm" onChange={onChangeCustomerPwConfirm} />
                    {customerPwConfirmMessage && <span>{customerPwConfirmMessage}</span>}
                  </td>
                </tr>
                <tr>
                  <th>이름</th>
                  <td>
                    <input
                      type="text"
                      name="customerName"
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
                      onChange={onChangeCustomerZipcod}
                    />
                    {customerZipcodMessage && <span>{customerZipcodMessage}</span>}
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="submit-btn">
              <input type="submit" value="회원가입" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Regist;
