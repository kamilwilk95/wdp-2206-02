import React from 'react';
import PropTypes from 'prop-types';

import ProductSearch from '../../features/ProductSearch/ProductSearch';

import styles from './MenuBar.module.scss';

const MenuBar = ({ children }) => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row align-items-center'>
        <div className={'col order-md-1 order-sm-2'}>
          <ProductSearch />
        </div>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>

          <div className={'col-auto order-md-2 order-sm-1 ' + styles.menu}>
            <div className='collapse navbar-collapse' id='navbarNav'>
              <ul className='navbar-nav'>
                <li className='nav-item'>
                  <a href='#' className={'nav-link' + styles.active}>
                    Home
                  </a>
                </li>
                <li className='nav-item active'>
                  <a className='nav-link' href='#'>
                    Furniture
                  </a>
                </li>
                <li className='nav-item active'>
                  <a className='nav-link' href='#'>
                    Chair
                  </a>
                </li>
                <li className='nav-item active'>
                  <a className='nav-link' href='#'>
                    Table
                  </a>
                </li>
                <li className='nav-item active'>
                  <a className='nav-link' href='#'>
                    Sofa
                  </a>
                </li>
                <li className='nav-item active'>
                  <a className='nav-link' href='#'>
                    Bedroom
                  </a>
                </li>
                <li className='nav-item active'>
                  <a className='nav-link' href='#'>
                    Blog
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
);

MenuBar.propTypes = {
  children: PropTypes.node,
};

export default MenuBar;
