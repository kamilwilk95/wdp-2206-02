import React from 'react';
import PropTypes from 'prop-types';

import styles from './Brands.module.scss';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Brands = () => {
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div>
            <Button variant='small'>
              <FontAwesomeIcon icon={faAngleLeft}>Left</FontAwesomeIcon>
            </Button>
            <div>
              <ul>
                <li>
                  <a href='#'>
                    <img src='/images/brands/brands-1.jpg' alt='chair'></img>
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
            <Button variant='small'>
              <FontAwesomeIcon icon={faAngleRight}>Right</FontAwesomeIcon>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
