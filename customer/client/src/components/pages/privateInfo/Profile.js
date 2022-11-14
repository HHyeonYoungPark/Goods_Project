import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../css/pages/privateInfo/Profile.css";

function Profile() {
  const [profile, setProfile] = useState([]);
  const navigate = useNavigate();

  const getCustomerData = async () => {
    await axios.get("http://localhost:4001/customer/profile")
        .then((response) => {
        if (response.data.status === 404) {
          window.alert(response.data.message);
          navigate("/login");
        } else if(response.data.status === 201){
          setProfile(response.data);
        } else {
          window.alert("에러발생 : 관리자에게 문의하세요");
          navigate("/");
        }
      });
    } 
  
  useEffect(() => {
    getCustomerData();
  }, []);
  
  return (
    <div className="profile-container">
      <div className="profile-wrap">
        <div className="profile-title">
          <h1>회원 정보</h1>
        </div>
        <div className="profile-info">
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
                  value={profile.name}    
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
            <button className="list-btn">
              <Link to="/">탈퇴하기</Link>
            </button>
            <input type="submit" value="수정하기" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
