import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Dropdown from "../../function/Dropdown";
import "../../css/pages/HelpToAdmin.css";

const Help = (props) => {
  const [dropdownVisibility1, setDropdownVisibility1] = React.useState(false);
  const [dropdownVisibility2, setDropdownVisibility2] = React.useState(false);
  const [dropdownVisibility3, setDropdownVisibility3] = React.useState(false);
  const [dropdownVisibility4, setDropdownVisibility4] = React.useState(false);
  const [dropdownVisibility5, setDropdownVisibility5] = React.useState(false);
  const [dropdownVisibility6, setDropdownVisibility6] = React.useState(false);
  const [dropdownVisibility7, setDropdownVisibility7] = React.useState(false);

  return (
    <div id="app">
      <div className="Help-container">
        <div className="semi-con">
          <div className="FAQ-wrap">
            <h2 className="helph2">고객센터</h2>
            <h3>문의 전 FAQ를 확인해주세요!</h3>
            <small>
              아래 도움말을 검색해 보세요. 쉽고 빠르게 원하는 내용을 찾아보고
              문의를 해결할 수 있습니다.
            </small>
            <h4 className="helph4">자주 찾는 도움말</h4>
            <hr />
            <ul>
              <li>
                <span> 무통장입금 결제는 어떻게 해야 하나요?</span>
                <button
                  onClick={(e) => setDropdownVisibility1(!dropdownVisibility1)}
                >
                  {dropdownVisibility1 ? (
                    <FontAwesomeIcon icon={faChevronUp} />
                  ) : (
                    <FontAwesomeIcon icon={faChevronDown} />
                  )}
                </button>
              </li>
              <hr />
              <Dropdown visibility={dropdownVisibility1}>
                <p>
                  무통장입금 결제는 주문서 페이지의 일반결제 , 나중에 결제 ,
                  '나중에 무통장 입금'을 선택하여 결제할 수 있습니다.
                  스마트스토어/외부쇼핑몰 모두 주문 후 영업일 기준 2일 내에 발급
                  받은 전용계좌로 입금해야 결제완료 처리됩니다. 영업일 기준
                  3일이 되는 시점에 해당 가상계좌는 만료되어 입금할 수 없으며,
                  ​입금기한이 지나도록 입금하지 않으면 구매의사가 없는 것으로
                  인정되어 주문이 취소됩니다. ​무통장입금 결제는 아래와 같이
                  진행해 주세요. 스마트스토어 ​1. 주문서 페이지의 결제수단의
                  일반결제 , 나중에 결제 , '나중에 무통장 입금'을 선택해 주세요.
                  ​2. 입금하실 은행을 선택해 주세요. (배너가 뜨는 경우 배너를
                  닫고 입금할 은행 선택) ​3. 주문 취소/반품 시 환불 받을 방법을
                  선택해 주세요. (환불정산액 적립/ 본인계좌 환불 중 선택) ​4.
                  현금영수증 신청여부를 선택한 후, 필요 정보를 입력해 주세요.
                  ​5. 주문자 동의 진행 후 '결제하기'를 누르면 주문이 완료됩니다.
                  외부쇼핑몰(네이버페이 가맹점) ​1. 주문서 페이지의 결제수단의
                  일반결제 , 나중에 결제 , '나중에 무통장 입금'을 선택해 주세요.
                  ​2. 환불정보를 입력해 주세요. 외부쇼핑몰 주문 시 본인 계좌
                  환불만 가능합니다. (배너가 뜨는 경우 배너를 닫고 환불정보
                  입력) ​3. 현금영수증 신청여부를 선택한 후, 필요 정보를 입력해
                  주세요. ​4. 구매관련 주문자 동의 항목에 동의해 주세요. ​5.
                  '결제하기'를 클릭하면 결제페이지가 노출되며, 입금할 은행을
                  선택하면 주문이 완료됩니다. ※ 입금 은행 선택 항목이 노출되지
                  않는 경우 아래와 같이 노출되는 배너를 닫아주시면, 입금 은행을
                  선택할 수 있습니다.
                </p>
              </Dropdown>
              <li>
                <span>무통장입금 결제는 어떻게 해야 하나요?</span>
                <button
                  onClick={(e) => setDropdownVisibility2(!dropdownVisibility2)}
                >
                  {dropdownVisibility2 ? (
                    <FontAwesomeIcon icon={faChevronUp} />
                  ) : (
                    <FontAwesomeIcon icon={faChevronDown} />
                  )}
                </button>
              </li>
              <hr />
              <Dropdown visibility={dropdownVisibility2}>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque culpa ullam maxime quos laudantium, fugiat nesciunt
                  obcaecati error reiciendis, porro voluptas illum quisquam,
                  voluptates praesentium fugit recusandae delectus amet?
                  Delectus!
                </p>
              </Dropdown>
              <li>
                <span>무통장입금 결제는 어떻게 해야 하나요?</span>
                <button
                  onClick={(e) => setDropdownVisibility3(!dropdownVisibility3)}
                >
                  {dropdownVisibility3 ? (
                    <FontAwesomeIcon icon={faChevronUp} />
                  ) : (
                    <FontAwesomeIcon icon={faChevronDown} />
                  )}
                </button>
              </li>
              <hr />
              <Dropdown visibility={dropdownVisibility3}>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque culpa ullam maxime quos laudantium, fugiat nesciunt
                  obcaecati error reiciendis, porro voluptas illum quisquam,
                  voluptates praesentium fugit recusandae delectus amet?
                  Delectus!
                </p>
              </Dropdown>
              <li>
                <span>무통장입금 결제는 어떻게 해야 하나요?</span>
                <button
                  onClick={(e) => setDropdownVisibility4(!dropdownVisibility4)}
                >
                  {dropdownVisibility4 ? (
                    <FontAwesomeIcon icon={faChevronUp} />
                  ) : (
                    <FontAwesomeIcon icon={faChevronDown} />
                  )}
                </button>
              </li>
              <hr />
              <Dropdown visibility={dropdownVisibility4}>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque culpa ullam maxime quos laudantium, fugiat nesciunt
                  obcaecati error reiciendis, porro voluptas illum quisquam,
                  voluptates praesentium fugit recusandae delectus amet?
                  Delectus!
                </p>
              </Dropdown>
              <li>
                <span>무통장입금 결제는 어떻게 해야 하나요?</span>
                <button
                  onClick={(e) => setDropdownVisibility5(!dropdownVisibility5)}
                >
                  {dropdownVisibility5 ? (
                    <FontAwesomeIcon icon={faChevronUp} />
                  ) : (
                    <FontAwesomeIcon icon={faChevronDown} />
                  )}
                </button>
              </li>
              <hr />
              <Dropdown visibility={dropdownVisibility5}>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque culpa ullam maxime quos laudantium, fugiat nesciunt
                  obcaecati error reiciendis, porro voluptas illum quisquam,
                  voluptates praesentium fugit recusandae delectus amet?
                  Delectus!
                </p>
              </Dropdown>
              <li>
                <span>무통장입금 결제는 어떻게 해야 하나요?</span>
                <button
                  onClick={(e) => setDropdownVisibility6(!dropdownVisibility6)}
                >
                  {dropdownVisibility6 ? (
                    <FontAwesomeIcon icon={faChevronUp} />
                  ) : (
                    <FontAwesomeIcon icon={faChevronDown} />
                  )}
                </button>
              </li>
              <hr />
              <Dropdown visibility={dropdownVisibility6}>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque culpa ullam maxime quos laudantium, fugiat nesciunt
                  obcaecati error reiciendis, porro voluptas illum quisquam,
                  voluptates praesentium fugit recusandae delectus amet?
                  Delectus!
                </p>
              </Dropdown>
              <li>
                <span>무통장입금 결제는 어떻게 해야 하나요?</span>
                <button
                  onClick={(e) => setDropdownVisibility7(!dropdownVisibility7)}
                >
                  {dropdownVisibility7 ? (
                    <FontAwesomeIcon icon={faChevronUp} />
                  ) : (
                    <FontAwesomeIcon icon={faChevronDown} />
                  )}
                </button>
              </li>
              <hr />
              <Dropdown visibility={dropdownVisibility7}>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque culpa ullam maxime quos laudantium, fugiat nesciunt
                  obcaecati error reiciendis, porro voluptas illum quisquam,
                  voluptates praesentium fugit recusandae delectus amet?
                  Delectus!
                </p>
              </Dropdown>
            </ul>
          </div>
          <div className="ask-wrap">
            <h3>문제가 해결되지 않으셨나요?</h3>
            <hr className="ask-hr" />
            <Link to="/ask">
              <div className="toAsk">
                <strong>직접 문의하기</strong>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
