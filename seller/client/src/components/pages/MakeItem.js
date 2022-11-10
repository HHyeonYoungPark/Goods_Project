import React from 'react';
import banner1 from '../images/make_banner1.png';
import banner2 from '../images/make_banner2.png';
import Carousel from 'react-bootstrap/Carousel';
import '../css/pages/MakeItem.css';
import { useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Dropdown from '../function/Dropdown';
function MakeItem() {
  const [dropdownVisibility1, setDropdownVisibility1] = React.useState(false);
  const [dropdownVisibility2, setDropdownVisibility2] = React.useState(false);
  const [dropdownVisibility3, setDropdownVisibility3] = React.useState(false);
  const [dropdownVisibility4, setDropdownVisibility4] = React.useState(false);
  const [dropdownVisibility5, setDropdownVisibility5] = React.useState(false);
  const [dropdownVisibility6, setDropdownVisibility6] = React.useState(false);
  const [dropdownVisibility7, setDropdownVisibility7] = React.useState(false);
  return (
    <div>
      <div className='banner-con'>
        <Carousel fade>
          <Carousel.Item>
            <img className='d-block w-100' src={banner1} alt='First slide' />
            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className='d-block w-100' src={banner2} alt='Second slide' />

            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className='d-block w-100' src={banner1} alt='Third slide' />

            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className='left-nav-con'>
        <h3>카테고리</h3>
        <hr />
        <ul>
          <li>
            <span>키링</span>
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
              voluptates praesentium fugit recusandae delectus amet? Delectus!
            </p>
          </Dropdown>
        </ul>
      </div>
    </div>
  );
}

export default MakeItem;
