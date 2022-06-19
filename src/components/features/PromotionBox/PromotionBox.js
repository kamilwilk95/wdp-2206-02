import React from 'react';
import PropTypes from 'prop-types';

import styles from './PromotionBox.module.scss';

const PromotionBox = promotion_img => {
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
              <p>
                GUEST ROOM<span> SOFA</span>
              </p>
              <p>-20%</p>
            </div>
            <div className={styles.bottom_product}>
              <img src='./images/promotion-bed.jpg' alt='promotion' />
              <p>
                GUEST ROOM<span> SOFA</span>
              </p>
              <p>-20%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

PromotionBox.propTypes = {
  promotion_img: PropTypes.string,
};

export default PromotionBox;
