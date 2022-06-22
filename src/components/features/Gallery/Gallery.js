import React from 'react';

import styles from './Gallery.module.scss';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleLeft,
  faAngleRight,
  faExchangeAlt,
  faEye,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import ReactTooltip from 'react-tooltip';
import StarsRating from '../StarsRating/StarsRating';

const Gallery = () => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <div className={styles.panelBar}>
              <div className='row no-gutters align-items-end'>
                <div className={'col-12 ' + styles.heading}>
                  <h3>Furniture Gallery</h3>
                </div>
              </div>
            </div>

            {/* Menu on top */}
            <div className={styles.menu}>
              <ul>
                <li>
                  <a href='#'>Featured</a>
                </li>
                <li>
                  <a href='#' className={styles.active}>
                    Top Seller
                  </a>
                </li>
                <li>
                  <a href='#'>Sale Off</a>
                </li>
                <li>
                  <a href='#'>Top Rated</a>
                </li>
              </ul>
            </div>

            {/* Left box */}
            <div className={styles.box_left}>
              <div className={styles.promoted}>
                <img
                  src='/images/chairs/chair-8.png'
                  alt='chair'
                  className={styles.images}
                ></img>
                <div className={styles.actions}>
                  <div className={styles.outlines}>
                    <Button
                      className='mb-1'
                      variant='outline-orange'
                      data-tip='Add to favorite'
                      data-for='favorite'
                    >
                      <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
                    </Button>
                    <ReactTooltip
                      id='favorite'
                      place='right'
                      type='dark'
                      effect='float'
                    />
                    <Button
                      className='mb-1'
                      variant='outline-orange'
                      data-tip='Add to compare'
                      data-for='compare'
                    >
                      <FontAwesomeIcon icon={faExchangeAlt}>
                        Add to compare
                      </FontAwesomeIcon>
                    </Button>
                    <ReactTooltip
                      id='compare'
                      place='right'
                      type='dark'
                      effect='float'
                    />
                    <Button
                      className='mb-1'
                      variant='outline-orange'
                      data-tip='Quick View'
                      data-for='view'
                    >
                      <FontAwesomeIcon icon={faEye}>Show</FontAwesomeIcon>
                    </Button>
                    <ReactTooltip id='view' place='right' type='dark' effect='float' />
                    <Button
                      className=''
                      variant='outline-orange'
                      data-tip='Add to cart'
                      data-for='cart'
                    >
                      <FontAwesomeIcon icon={faShoppingBasket}>
                        Add to cart
                      </FontAwesomeIcon>
                    </Button>
                    <ReactTooltip id='cart' place='right' type='dark' effect='float' />
                  </div>
                </div>
                <div className={styles.product_info}>
                  <div className={styles.price}>
                    <p className='m-0'>$120</p>
                    <p className={styles.old_price}>$160</p>
                  </div>
                </div>
                <div className={styles.frame_wrapper}>
                  <div className={styles.frame}>
                    <p className={styles.product_name}>Comfortable Chair no.8</p>
                    <StarsRating id={1} stars={4} />
                  </div>
                </div>
              </div>
            </div>

            {/* Thumbnail menu on the bottom  */}
            <div className={styles.thumbnailNavigationWrapper}>
              <Button className={styles.arrow} variant='small'>
                <FontAwesomeIcon icon={faAngleLeft}>Left</FontAwesomeIcon>
              </Button>
              <div className={styles.thumbnailMenu}>
                <ul>
                  <li>
                    <a href='#' className={styles.activeThumbnail}>
                      <img src='/images/chairs/chair-1.jpg' alt='chair'></img>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <img src='/images/chairs/chair-2.jpg' alt='chair'></img>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <img src='/images/chairs/chair-3.jpg' alt='chair'></img>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <img src='/images/chairs/chair-4.jpg' alt='chair'></img>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <img src='/images/chairs/chair-5.jpg' alt='chair'></img>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <img src='/images/chairs/chair-6.jpeg' alt='chair'></img>
                    </a>
                  </li>
                </ul>
              </div>
              <Button className={styles.arrow} variant='small'>
                <FontAwesomeIcon icon={faAngleRight}>Right</FontAwesomeIcon>
              </Button>
            </div>
          </div>

          {/*  Right Box  */}
          <div className='col-md-6'>
            <div className={styles.box_right}>
              <div className={styles.right_image}>
                <img src='/images/gallery/gallery-bedroom-1.png' alt='bed'></img>
                <div className={'row ' + styles.promo_wrapper}>
                  <h5>
                    FROM <span className={styles.promo_price}>$50.80</span>
                  </h5>
                  <h3 className={styles.promo_name}>Bedroom Bed</h3>
                  <Button variant='main' className={styles.promo_button}>
                    SHOP NOW
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
