import React, { useState, useEffect, useRef } from 'react';
//import PropTypes from 'prop-types';
import styles from './PromotedBox.module.scss';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleLeft,
  faAngleRight,
  faExchangeAlt,
  faEye,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import StarsRating from '../StarsRating/StarsRating';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCompare,
  getHotDeals,
  toggleFavoriteProduct,
  toggleProductCompare,
} from '../../../redux/productsRedux';
import PropTypes from 'prop-types';

const PromotedBox = () => {
  const [activePage, setActivePage] = useState(0);
  const [delay, setDelay] = useState(3000);
  const [activateFade, setActivateFade] = useState(false);
  const hotDealsData = useSelector(getHotDeals);
  const pagesCount = hotDealsData.length;
  const dispatch = useDispatch();

  const handlePageChange = newPage => {
    setDelay(10000);
    setActivateFade(true);
    setTimeout(() => {
      setActivePage(newPage);
      setTimeout(() => setActivateFade(false), 250);
    }, 250);
  };

  const getCompareProducts = useSelector(state => getCompare(state));

  //onClick functions
  const handleCompare = (e, item) => {
    e.preventDefault();
    if (getCompareProducts.length < 4) {
      dispatch(toggleProductCompare(item.id));
    }
  };

  const handleFavorite = (e, item) => {
    e.preventDefault();
    dispatch(toggleFavoriteProduct(item.id));
  };

  const handleShow = e => {
    e.preventDefault();
    //placeholder
  };

  //autoplay for left slider
  const timeoutRef = useRef(null);

  useEffect(() => {
    setTimeout(() => setActivateFade(false), 250);

    timeoutRef.current = setTimeout(() => {
      setTimeout(() => {
        setActivePage(prevIndex =>
          prevIndex === hotDealsData.length - 1 ? 0 : prevIndex + 1
        );
      }, 250);
      setActivateFade(true);
    }, delay);

    if (delay === 10000) {
      setDelay(3000);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activePage]);

  const dots = [];
  for (let i = 0; i < pagesCount; i++) {
    dots.push(
      <li key={i}>
        <a
          onClick={() => handlePageChange(i)}
          className={i === activePage ? styles.active : ''}
        >
          page {i}
        </a>
      </li>
    );
  }

  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            {hotDealsData.slice(activePage, activePage + 1).map(item => (
              <div key={item.id} className={styles.productBox}>
                <div className={styles.topBar}>
                  <div className={'col-md-8 ' + styles.title}>HOT DEALS</div>
                  <div className={'col-md-4 ' + styles.dots}>
                    <ul>{dots}</ul>
                  </div>
                </div>
                <div key={item.id} className={styles.photoBox}>
                  <div
                    className={activateFade === true ? styles.fadeIn : styles.fadeOut}
                  >
                    <img className={styles.images} src={item.image} alt='furniture' />
                  </div>

                  <div className={styles.buttons}>
                    <Button variant='small' className='pt-2 pb-2'>
                      <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO
                      CART
                    </Button>
                  </div>
                  <div className={styles.timerWrapper}>
                    <div className={styles.timerText}>
                      <div className={styles.textBig}>25</div>
                      <div className={styles.textSmall}>DAYS</div>
                    </div>
                    <div className={styles.timerText}>
                      <div className={styles.textBig}>11</div>
                      <div className={styles.textSmall}>HRS</div>
                    </div>
                    <div className={styles.timerText}>
                      <div className={styles.textBig}>45</div>
                      <div className={styles.textSmall}>MINS</div>
                    </div>
                    <div className={styles.timerText}>
                      <div className={styles.textBig}>25</div>
                      <div className={styles.textSmall}>SECS</div>
                    </div>
                  </div>
                </div>
                <div className={styles.content}>
                  <h5> {item.name}</h5>
                  <StarsRating
                    id={item.id}
                    stars={item.stars}
                    ownStars={item.ownStars}
                  />
                </div>
                <div className={styles.line}></div>
                <div className={styles.actions}>
                  <div>
                    <Button
                      className='mr-1'
                      variant='outline'
                      onClick={e => handleShow(e)}
                    >
                      <FontAwesomeIcon icon={faEye}>Show</FontAwesomeIcon>
                    </Button>
                    <Button
                      variant='outline'
                      className={(item.isFavorite ? styles.isFavorite : '') + ' mr-1'}
                      onClick={e => handleFavorite(e, { ...item })}
                    >
                      <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
                    </Button>
                    <Button
                      variant='outline'
                      className={item.compare ? styles.compare : ''}
                      onClick={e => handleCompare(e, { ...item })}
                    >
                      <FontAwesomeIcon icon={faExchangeAlt}>
                        Add to compare
                      </FontAwesomeIcon>
                    </Button>
                  </div>
                  {item.priceOld && (
                    <div className={styles.priceold}>
                      <Button noHover variant='light'>
                        $ {item.priceOld}
                      </Button>
                    </div>
                  )}
                  <div>
                    <Button noHover variant='small'>
                      $ {item.price}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='col-md-8'>
            <div className={styles.promoWrapper}>
              <img
                className={styles.imagePromo}
                src='/images/promotions/indoor-furniture.jpg'
                alt='garden-furniture'
              />
              <div className={styles.banner}>
                <div className={styles.titleWrapper}>
                  <div>INDOOR</div>
                  <div>FURNITURE</div>
                </div>
                <div className={styles.bannerSubTitle}>
                  SAVE UP TO 50% OF ALL FURNITURE
                </div>
              </div>
              <Button className={styles.shopNow} variant='small'>
                SHOP NOW
              </Button>
              <div className={styles.promoNavigationWrapper}>
                <Button className={styles.arrow} variant='small'>
                  <FontAwesomeIcon icon={faAngleLeft}>Left</FontAwesomeIcon>
                </Button>
                <Button className={styles.arrow} variant='small'>
                  <FontAwesomeIcon icon={faAngleRight}>Right</FontAwesomeIcon>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

PromotedBox.propTypes = {
  id: PropTypes.string,
};

export default PromotedBox;
