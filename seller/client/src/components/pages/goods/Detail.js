import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import {
  useNavigate,
  Navigate,
  Link,
  useParams,
  Outlet,
  redirect,
} from 'react-router-dom';
import '../../css/pages/Detail.css';
import Carousel from 'react-bootstrap/Carousel';
import coupon2 from '../../images/coupon2.jpg';
import laptop from '../../images/laptop.jpg';
import LEDmood from '../../images/LEDmood.jpg';
import doll from '../../images/doll.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import { faTags } from '@fortawesome/free-solid-svg-icons';
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons';
import { faSquareMinus } from '@fortawesome/free-regular-svg-icons';
import { useEffect } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { min } from 'date-fns';

const topnavstyle = {
  margin: '0 0 0 15px',
  color: '#27336F',
};
const truck = {
  margin: '0 10px 0 0',
  color: 'yellowgreen',
};
const tags = {
  margin: '0 10px 0 0',
  color: 'red',
};
// const plusminus = {
//   font-size: ''
// };
const discount = 10000;
function Detail({ token, userId }) {
  const [item, setItem] = useState('');
  const [price, setPrice] = useState(0);
  const { idx } = useParams();
  const navigate = useNavigate();
  // useEffect(function () {
  //   axios
  //     .get(`http://localhost:4001/detail/${idx}`)
  //     .then(function (response) {
  //       setItem(response.data);
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });
  // }, []);

  async function getDetail() {
    await axios.get(`http://localhost:4001/detail/${idx}`).then((response) => {
      setItem(response.data[0]);
      setPrice(response.data[0].price);
    });
  }
  useEffect(() => {
    getDetail();
  }, []);
  console.log(item);

  async function cart() {
    token
      ? await axios
          .post(`http://localhost:4001/cart/${userId}/${idx}`, {
            counter,
            price,
          })
          .then((response) => {
            if (response.data.status === 201) {
              window.alert(response.data.message);
            }
          })
      : navigate('/login');
  }

  function buy() {
    token ? (
      // <Navigate to="/????????????!! ?????? ???????????? ???????????? ?????????...?" />
      <Navigate to={'/pay/' + item.idx} />
    ) : (
      navigate('/login')
    );
  }
  const [counter, setCounter] = React.useState(1);
  function plus() {
    setCounter(counter + 1);
  }

  function minus() {
    setCounter(counter - 1);
    if (counter <= 1) {
      alert('?????? ??????????????? 1????????????.');
      setCounter(1);
    }
  }

  const images = [
    {
      original: `http://localhost:4001/${item.attach}`,
      thumbnail: `http://localhost:4001/${item.attach}`,
    },
    {
      original: `http://localhost:4001/${item.attach2}`,
      thumbnail: `http://localhost:4001/${item.attach2}`,
    },
    {
      original: `http://localhost:4001/${item.attach3}`,
      thumbnail: `http://localhost:4001/${item.attach3}`,
    },
  ];
  const numPrice = parseInt(item.price);

  const numPrice2 = numPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  const totalPrice = numPrice * counter;
  const totalPrice2 = totalPrice
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  const discount = numPrice + 10000;
  const discount2 = discount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  const point = numPrice * 0.08;
  const point2 = point.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return (
    <div className='detail-con'>
      <div className='top-nav-con'>
        <div>{item.category}</div>
        <FontAwesomeIcon icon={faChevronRight} style={topnavstyle} />
        <div>{item.detailcategory}</div>
        <FontAwesomeIcon icon={faChevronRight} style={topnavstyle} />
        <div>{item.itemname}</div>
      </div>
      <div className='right-pay-sticky'>
        <h3>?????? ??????</h3>
        <div className='similar-item'>
          {/* <ul>
            <li>???????????? ?????????</li>
            <li>???????????? ?????????</li>
            <li>???????????? ?????????</li>
          </ul> */}
          <div className='recomen-product'>
            <div className='recomen-product-img'>
              <img src={doll} alt={doll} />
            </div>
            <div className='recomen-product-name'>
              <b style={{ float: 'right' }}>[????????????] ???????????????</b>
              <p style={{ float: 'right' }}>4,900???</p>
            </div>
          </div>
          <div className='recomen-product'>
            <div className='recomen-product-img'>
              <img src={LEDmood} alt={LEDmood} />
            </div>
            <div className='recomen-product-name'>
              <b style={{ float: 'right' }}>LED ???????????? ?????????</b>
              <p style={{ float: 'right' }}>84,000???</p>
            </div>
          </div>
          <div className='recomen-product2'>
            <div className='recomen-product-img'>
              <img src={laptop} alt={laptop} />
            </div>
            <div className='recomen-product-name'>
              <b style={{ float: 'right' }}>????????? ????????? ?????????</b>
              <p style={{ float: 'right' }}>27,900???</p>
            </div>
          </div>
        </div>
        <div className='cartorpay'>
          <div className='howmayprice'>
            <div className='detail-howmany'>
              <button onClick={minus}>
                <FontAwesomeIcon
                  icon={faSquareMinus}
                  style={{ fontSize: '30px' }}
                />
              </button>
              <span className='spanmany'>{counter}</span>
              <input type='hidden' name='counter' value={counter} />
              <button onClick={plus}>
                <FontAwesomeIcon
                  icon={faSquarePlus}
                  style={{ fontSize: '30px' }}
                />
              </button>
            </div>
            <h2 className='detail-price'>{totalPrice2}???</h2>
            <input
              type='hidden'
              name='price'
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className='coupon-wrap'>
            <p className='detail-coupon'>????????? ????????? ?????? ??????</p>
            <button className='coupon-btn'>?????? ??????</button>
          </div>
          <div className='ship-fee'>
            <p>
              ????????????<b> 3,000???</b>
            </p>
          </div>
          <div className='payBtn-wrap'>
            <button className='detail-cart' onClick={cart}>
              ????????????
            </button>
            <Link
              to={`/pay/${item.idx} / ${item.categoryCode1} /${item.categoryCode2}`}
              onClick={buy}
            >
              <button type='buuton' className='detail-pay' onClick={buy}>
                ????????????
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className='detail-top-con'>
        <ImageGallery items={images} />

        <div className='detail-title-con'>
          <h4 className='detail1'>?????? ?????? ?????? 3+1 ??????</h4>
          <h2 className='detail2'>{item.itemname}</h2>
          <h1 className='detail4'>
            {numPrice2}???
            <span>
              <small className='detail5'>{discount2}</small>
            </span>
          </h1>
          <hr className='detail-hr' />
          <h4 className='detail6'>
            <FontAwesomeIcon icon={faTruck} style={truck} />
            3,000???
          </h4>
          <p className='detail7'>15:00 ?????? ?????? ??? ?????? ??????</p>
          <p className='detail8'>
            <b style={{ color: '#5568d7' }}>12/2(???)</b> ?????? ?????? ??????
          </p>
          <p className='detail9'>CJ ????????????</p>
          <hr className='detail-hr' />
          <h4 className='detail10'>
            <FontAwesomeIcon icon={faTags} style={tags} />
            ??????
          </h4>
          <p className='detail11'>
            SK pay point ?????? <b style={{ color: '#5568d7' }}>{point2}P</b> ??????
          </p>
          <p className='detail12'>
            2??? ?????? ????????? ?????? <b style={{ color: '#5568d7' }}>500???</b> ??????
          </p>
          <p className='detail13'>
            11?????? ???????????? ??? ???????????? + ??????
            <b style={{ color: '#5568d7' }}>2%</b> ??????
          </p>
          <p className='detail13'>
            ??????
            <b style={{ color: '#5568d7' }}> 12??????</b> ??????????????? ??????
          </p>
          <p className='detail14'>[??????] ??????????????????????????? : 1??? [????????????]</p>
          <p className='detail14'>L.POINT ????????????</p>
          <hr className='detail-hr' />
          <div className='coupon-banner'>
            <img src={coupon2} alt={coupon2} />
          </div>

          {/* <div>
            <h4 className="detail15">??????????????????</h4>
            <div className="new-review">??????????????? ????????????</div>
            <button className="more-review">
              ?????? ?????????
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div> */}
        </div>
      </div>
      <div className='detail-bottom-wrap'>
        <navigator className='detail-nav-wrap'>
          <Link to='detailTable'>
            <div>
              <p>????????????</p>
            </div>
          </Link>
          <Link to='detailReview'>
            <div>
              <p>????????????</p>
            </div>
          </Link>
          <div>
            <p>Q&A</p>
          </div>
          <div>
            <p>????????????</p>
          </div>
        </navigator>
      </div>
      <div className='detail-bottom-wrap'>
        <Outlet />
      </div>
    </div>
  );
}

export default Detail;
