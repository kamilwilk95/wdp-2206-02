import React from 'react';
import { useSelector } from 'react-redux';
import { getCompare } from '../../../redux/productsRedux';

import styles from './CompareProducts.module.scss';

const CompareProducts = () => {
  const compare = useSelector(state => getCompare(state));

  return (
    <div
      className={'row align-items-end justify-content-center' + ' ' + styles.wrapper}
    >
      {compare.map(product => (
        <div className={styles.box} key={product.id}>
          <div className={'col-3' + ' ' + styles.photo}>
            <img
              src={product.image}
              alt={product.category + ' ' + product.name}
              className={styles.image}
            ></img>
          </div>
          <div className={styles.content}>
            <h5>{product.name}</h5>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CompareProducts;
