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

        <nav className='navbar navbar-light bg-light'>
          <div className='container-fluid'>
            <button
              className='navbar-toggler'
              type='button'
              data-mdb-toggle='collapse'
              data-mdb-target='#navbarToggleExternalContent'
              aria-controls='navbarToggleExternalContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <i className='fas fa-bars'></i>
            </button>
          </div>

          <div className='collapse navbar-expand-xs' id='navbarToggleExternalContent'>
            <div className={clsx('col-auto order-sm-1', styles.menu)}>
              <ul>
                <li>
                  <a href='#' className={styles.active}>
                    Home
                  </a>
                </li>
                <li>
                  <a href='#'>Furniture</a>
                </li>
                <li>
                  <a href='#'>Chair</a>
                </li>
                <li>
                  <a href='#'>Table</a>
                </li>
                <li>
                  <a href='#'>Sofa</a>
                </li>
                <li>
                  <a href='#'>Bedroom</a>
                </li>
                <li>
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
