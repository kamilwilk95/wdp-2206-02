import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import styles from './CompareProducts.module.scss';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../../common/Button/Button';
import { getCompare, toggleProductCompare } from '../../../redux/productsRedux';

const CompareProducts = () => {
  const dispatch = useDispatch();
  const compare = useSelector(state => getCompare(state));
  const [productId, setProductId] = useState('');

  const handleRemove = id => {
    dispatch(toggleProductCompare(id));
  };

  return (
    <div
      className={'row align-items-end justify-content-center' + ' ' + styles.wrapper}
    >
      {compare.map(product => (
        <div className={'col-4 col-lg-1' + ' ' + styles.box} key={product.id}>
          <Button
            variant='outline'
            className={styles.button_close}
            onClick={handleRemove}
          >
            <FontAwesomeIcon icon={faWindowClose}></FontAwesomeIcon>
          </Button>
          <div className={styles.photo}>
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
      <Button
        variant='main'
        className={compare.length === 0 ? styles.button_compare : ''}
      >
        Compare
      </Button>
    </div>
  );
};

export default CompareProducts;
