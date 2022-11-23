import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
// import "../../css/pages/privateInfo/Profile.css";

const useConfirm = (message = "", onConfirm, onCancel) => {
  if (!onConfirm || typeof onConfirm !== "function") { 
    return; // 매개변수 onConfirm가 없거나 onConfirm이 함수가 아나라면 return 실행
  }
  if (onCancel && typeof onCancel !== "function") { // onCancle은 필수요소는 아님
    return;
  }
  const confirmAction = () => { // confirm창의 응답에 따른 이벤트 실행 함수
    if (window.confirm(message)) { // 확인을 눌렀다면
      onConfirm();
    } else { // 취소를 눌렀다면
      onCancel();
    }
  };
  return confirmAction; 
};

function Profile({userId}) {
  const [profile, setProfile] = useState([]);
  const navigate = useNavigate();

  const getCustomerData = async () => {
    await axios.get("http://localhost:4001/customer/profile/"+userId)
        .then((response) => {
        if (response.data.status === 404) {
          window.alert(response.data.message);
          navigate("/login");
        } else if(response.data.status === 201){
          setProfile(response.data.result[0]);
        } else {
          window.alert("에러발생 : 관리자에게 문의하세요");
          navigate("/");
        }
      });
    } 
  
  useEffect(() => {
    getCustomerData();
  }, []);

  const deleteConfirm = async() => {
    await axios.delete("http://localhost:4001/customer/delete/"+profile.idx)
      .then((res) => {
        if(res.data.status === 201 ){
          window.alert(res.data.message);
          navigate("/logout");
        }
      });
  }
  const cancelConfirm = () => window.alert("취소했습니다.")
  const withdrawal = useConfirm("회원탈퇴 하시겠습니까?", deleteConfirm, cancelConfirm);

  return (
    <div className="profile-container">
      <div className="profile-wrap">
        <div className="profile-title">
          <h1>회원 정보</h1>
        </div>
        <div className="profile-info">
        <input type="hidden" name="customerIdx" value={profile.idx} />
          <table>
            <tr>
              <th>아이디</th>
              <td>
                <input
                  type="text"
                  name="customerId"
                  value={profile.id}
                />
              </td>
            </tr>
            <tr>
              <th>비밀번호</th>
              <td>
                <input
                  type="password"
                  name="customerPw"
                  value={profile.pw}
                />
              </td>
            </tr>
            <tr>
              <th>이름</th>
              <td>
                <input
                  type="text"
                  name="customerName"
                  value={profile.NAME}    
                />
              </td>
            </tr>
            <tr>
              <th>전화번호</th>
              <td>
                <input
                  type="text"
                  name="customerMobile"
                  value={profile.mobile}    
                />
              </td>
            </tr>
            <tr>
              <th>이메일</th>
              <td>
                <input
                  type="text"
                  name="customerEmail"
                  value={profile.email}    
                />
              </td>
            </tr>
            <tr>
              <th>주소1</th>
              <td>
                <input
                  type="text"
                  name="customerAddress1"
                  value={profile.address1}    
                />
              </td>
            </tr>
            <tr>
              <th>주소2</th>
              <td>
                <input
                  type="text"
                  name="customerAddress2"
                  value={profile.address2}    
                />
              </td>
            </tr>
            <tr>
              <th>우편번호</th>
              <td>
                <input
                  type="text"
                  name="customerZipcod"
                  value={profile.zipcod}    
                />
              </td>
            </tr>
          </table>
          <div className="submit-btn">
            <button className="list-btn" onClick={withdrawal}>
              탈퇴하기
            </button>
            <button type="button" onClick={(e) => window.location="/profileModify"}>
              수정하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
