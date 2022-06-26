import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { getAllBrands } from '../../../redux/brandsRedux';

import styles from './Brands.module.scss';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Brands = () => {
  const [activePage, setActivePage] = useState(0);
  const allBrands = useSelector(getAllBrands);
  const [activeBrands, setActiveBrands] = useState('');

  // dodać stan obecny czyli 6 zdjeć na sliderze
  // nowy stan przesunięcię na kolejne 6 elementów.

  const rightSlide = e => {
    e.preventDefault();
    setTimeout(() => {
      setActiveBrands(activeBrands);
    }, 500);
  };

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className={styles.thumbnailNavigationWrapper}>
            <Button className={styles.arrow} variant='small'>
              <FontAwesomeIcon icon={faAngleLeft}>Left</FontAwesomeIcon>
            </Button>
            {allBrands.map(item => (
              <div className={styles.thumbnailMenu} key={item.id}>
                <ul>
                  <li>
                    <a href='#' className={styles.activeThumbnail}>
                      <img src={item.image} alt='brands' />
                    </a>
                  </li>
                </ul>
              </div>
            ))}
            <Button
              className={styles.arrow}
              variant='small'
              onClick={e => rightSlide(e)}
            >
              <FontAwesomeIcon icon={faAngleRight}>Right</FontAwesomeIcon>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
