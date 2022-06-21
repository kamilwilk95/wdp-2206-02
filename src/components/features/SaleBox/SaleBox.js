import React from 'react';
import PropTypes from 'prop-types';

import styles from './SaleBox.module.scss';

const SaleBox = sale_img => {
  return (
    <div>
      <div className='container'>
        <div className={styles.wrapper}>
          <div className={styles.leftinner}>
            <div className={styles.box_img}>
              <img src='./images/promotion-bed.jpg' alt='promotion-left' />
            </div>

            <p className={styles.promo_text}>
              GUEST ROOM<span> SOFA</span>
            </p>
            <p className={styles.text_price}>-20%</p>
          </div>
          <div className={styles.rightinner}>
            <div className={styles.top_product}>
              <img src='./images/promotion-bed.jpg' alt='promotion' />
              <p className={styles.topSale_text}>
                <strong>OFFICE</strong> CHAIR<span> COLLECTION</span>
              </p>
              <p className={styles.topSale_text_price}>-$200.00</p>
            </div>
            <div className={styles.bottom_product}>
              <img src='./images/promotion-bed.jpg' alt='promotion' />
              <p className={styles.bottomSale_text}>
                <strong>SPECIAL</strong> COLLECTION
                <span> SAVE UP 45% OF FORNITURE</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SaleBox.propTypes = {
  promotion_img: PropTypes.string,
};

export default SaleBox;
