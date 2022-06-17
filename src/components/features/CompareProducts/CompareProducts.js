import React from 'react';
import { useSelector } from 'react-redux';
import { getCompare } from '../../../redux/productsRedux';

import styles from './CompareProducts.module.scss';

const CompareProducts = () => {
  const compare = useSelector(state => getCompare(state));

  return (
    <div className={styles.root}>
      <div className='row align-items-end justify-content-end'>
        {compare.map(product => (
          <div key={product.id} className={'col-2' + ' ' + styles.photo}>
            <img
              src={product.image}
              alt={product.category + ' ' + product.name}
              className={styles.image}
            ></img>
          </div>
        ))}
      </div>
      <p>compare</p>
    </div>
  );
};

export default CompareProducts;
