import React from 'react';
//import PropTypes from 'prop-types';
import styles from './PromotedBox.module.scss';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faExchangeAlt,
  faEye,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import StarsRating from '../StarsRating/StarsRating';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
const PromotedBox = () => {
  //console.log('test')
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <div className={styles.productBox}>
              <div className={styles.topBar}>
                <div className={'col-md-8 ' + styles.title}>HOT DEALS</div>
                <div className={'col-md-4 ' + styles.dots}>
                  <ul>
                    <li>
                      <a className={styles.active}>page</a>
                    </li>
                    <li>
                      <a>page</a>
                    </li>
                    <li>
                      <a>page</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles.photo}>
                <img
                  className={styles.images}
                  src='/images/fornitures-bed-3.jpg'
                  alt='forniture'
                />
                <div className={styles.buttons}>
                  <Button variant='small'>
                    <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO
                    CART
                  </Button>
                </div>
              </div>
              <div className={styles.content}>
                <h5> Aenean Ru Bristique 9</h5>
                <StarsRating id={1} stars={4} />
              </div>
              <div className={styles.line}></div>
              <div className={styles.actions}>
                <div className={styles.outlines}>
                  <Button variant='outline'>
                    <FontAwesomeIcon icon={faEye}>Show</FontAwesomeIcon>
                  </Button>
                  <Button variant='outline'>
                    <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
                  </Button>
                  <Button variant='outline'>
                    <FontAwesomeIcon icon={faExchangeAlt}>
                      Add to compare
                    </FontAwesomeIcon>
                  </Button>
                </div>
                <div className={styles.priceold}>
                  <Button noHover variant='light'>
                    $ 350.00
                  </Button>
                </div>
                <div>
                  <Button noHover variant='small'>
                    $ 300.00
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

export default PromotedBox;
