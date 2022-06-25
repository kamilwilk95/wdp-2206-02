import React from 'react';
import PropTypes from 'prop-types';

import styles from './Brands.module.scss';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Brands = () => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className={styles.thumbnailNavigationWrapper}>
            <Button className={styles.arrow} variant='small'>
              <FontAwesomeIcon icon={faAngleLeft}>Left</FontAwesomeIcon>
            </Button>
            <div className={styles.thumbnailMenu}>
              <ul>
                <li>
                  <a href='#' className={styles.activeThumbnail}>
                    <img src='/images/brands/brands-1.jpg' alt='brand'></img>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <img src='/images/brands/brands-2.jpg' alt='brands'></img>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <img src='/images/brands/brands-3.jpg' alt='brands'></img>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <img src='/images/brands/brands-4.jpg' alt='brands'></img>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <img src='/images/brands/brands-5.jpg' alt='brands'></img>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <img src='/images/brands/brands-6.jpg' alt='brands'></img>
                  </a>
                </li>
              </ul>
            </div>
            <Button className={styles.arrow} variant='small'>
              <FontAwesomeIcon icon={faAngleRight}>Right</FontAwesomeIcon>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
