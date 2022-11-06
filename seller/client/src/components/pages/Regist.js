import React from "react";
import "../css/pages/Regist.css";

function Regist() {
  return (
    <div className="container">
      <div className="regist-wrap">
        <div className="regist-title">
          <h1>판매자 신청</h1>
          <h4>필수 정보 입력 후 신청 시 담당자 검토 후 가입이 승인됩니다.</h4>
        </div>
        <div className="regist-info">
          <h3>기본정보</h3>
          {/* onSubmit={frmHandler} */}
          <form method="post" encType="multipart/form-data" autocomplete="off">
            <table>
              <tr>
                <th>아이디</th>
                <td>
                  <input type="text" name="id" />
                </td>
              </tr>
              <tr>
                <th>비밀번호</th>
                <td>
                  <input type="password" name="pw" />
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
                  <input type="text" name="sellername" />
                </td>
              </tr>
              <tr>
                <th>이메일</th>
                <td>
                  <input type="text" name="email" />
                </td>
              </tr>
              <tr>
                <th>유형</th>
                <td>
                  <div class="sellertype">
                    <input type="radio" name="sellertype" />
                    <span>개인사업자</span>
                    <input type="radio" name="sellertype" />
                    <span>법인사업자</span>
                  </div>
                </td>
              </tr>
            </table>

            <h3>채널 관련 정보</h3>
            <table>
              <tr>
                <th>채널명</th>
                <td>
                  <input type="text" name="channelname" />
                </td>
              </tr>
              <tr>
                <th>채널주소(url)</th>
                <td>
                  <input type="text" name="url" />
                </td>
              </tr>
              <tr>
                <th>프로필 이미지</th>
                <td>
                  <input type="file" name="profileimage" />
                </td>
              </tr>
              <tr>
                <th>소개</th>
                <td>
                  <input type="text" name="intro" />
                </td>
              </tr>
            </table>
            <div className="submit-btn">
              <input type="button" value="돌아가기" />
              <input type="submit" value="판매자 신청" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Regist;
