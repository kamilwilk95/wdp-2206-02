import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import ProductSearch from '../../features/ProductSearch/ProductSearch';

import styles from './MenuBar.module.scss';

const MenuBar = ({ children }) => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row align-items-center'>
        <div className={'col order-sm-2'}>
          <ProductSearch />
        </div>

        <nav className='navbar navbar-expand-sm bg-light' id='mobile-menu-wrapper'>
          <div className='container-fluid'>
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#mobile-menu'
              aria-controls='mobile-menu'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon'></span>
            </button>
            <div
              className={clsx(
                'col-auto order-sm-1 navbar-expand-xs collapse',
                styles.menu
              )}
              id='mobile-menu'
            >
              <ul className='navbar-nav'>
                <li className='nav-item'>
                  <a href='#' className={styles.active}>
                    Home
                  </a>
                </li>
                <li className='nav-item'>
                  <a href='#'>Furniture</a>
                </li>
                <li className='nav-item'>
                  <a href='#'>Chair</a>
                </li>
                <li className='nav-item'>
                  <a href='#'>Table</a>
                </li>
                <li>
                  <a href='#'>Sofa</a>
                </li>
                <li className='nav-item'>
                  <a href='#'>Bedroom</a>
                </li>
                <li className='nav-item'>
                  <a href='#'>Blog</a>
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
