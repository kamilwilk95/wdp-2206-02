import React from 'react';
import { useSelector } from 'react-redux';
import getCompare from '../../../redux/productsRedux';

import styles from './CompareProducts.module.scss';

const CompareProducts = () => {
  const compare = useSelector(state => getCompare(state));

  console.log('compare', compare);

  return (
    <div className={styles.root}>
      <p>compare</p>
    </div>
  );
};

export default CompareProducts;
