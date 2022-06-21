import React from 'react';

import styles from './Gallery.module.scss';

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
            <div className={styles.menu}>
              <ul>
                <li>
                  <a href='#' className={styles.active}>
                    Featured
                  </a>
                </li>
                <li>
                  <a href='#' className={styles.active}>
                    Top Seller
                  </a>
                </li>
                <li>
                  <a href='#' className={styles.active}>
                    Sale Off
                  </a>
                </li>
                <li>
                  <a href='#' className={styles.active}>
                    Top Rated
                  </a>
                </li>
              </ul>
            </div>
            <div className={styles.box_left}>
              <div className={styles.promoted}>
                <img
                  src='/images/chairs/chair-8.png'
                  alt='chair'
                  className={styles.images}
                ></img>
              </div>
            </div>
          </div>
          <div className='col-md-6'>test</div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
