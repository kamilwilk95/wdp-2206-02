import React from 'react';
import PropTypes from 'prop-types';

const PromotionBox = promotion_img => {
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
            <img className='w-100' src='./images/promotion-bed.jpg' alt='promotion' />
            <div className='text-black rounded-3'>
              <h2>
                GUEST ROOM<span> SOFA</span>
              </h2>
              <h3>-20%</h3>
            </div>
          </div>
          <div className='col-6'>
            <div className='row'>
              <div className='col-12'>
                <img
                  className='w-100 h-25'
                  src='./images/promotion-bed.jpg'
                  alt='promotion'
                />
                <img
                  className='w-100 h-25'
                  src='./images/promotion-bed.jpg'
                  alt='promotion'
                />
              </div>
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
