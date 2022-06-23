import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

import styles from './Gallery.module.scss';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleLeft,
  faAngleRight,
  faExchangeAlt,
  faEye,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import ReactTooltip from 'react-tooltip';
import StarsRating from '../StarsRating/StarsRating';
import {
  getAll,
  getCompare,
  toggleProductCompare,
  toggleFavoriteProduct,
} from '../../../redux/productsRedux';
import { getGalleryCategories } from '../../../redux/categoriesRedux';

const Gallery = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector(getAll);
  const galleryCategories = useSelector(getGalleryCategories);
  const getCompareProducts = useSelector(getCompare);
  const [activateFade, setActivateFade] = useState('');
  const [activeCategory, setActiveCategory] = useState('topSeller');

  const categoryProducts = allProducts.filter(
    item => item.galleryCategory === activeCategory
  );
  const [activeProduct, setActiveProduct] = useState(categoryProducts[0].id);

  const showProduct = allProducts.find(item => item.id === activeProduct);

  const handleCategoryChange = (e, newCategory) => {
    e.preventDefault();
    setActivateFade('true');
    setTimeout(() => {
      setActiveCategory(newCategory);
      handleProductChange(e, categoryProducts[0].id);
      console.log('new', newCategory);
      console.log('new', activeCategory);

      setTimeout(() => setActivateFade(''), 250);
    }, 250);
  };

  const handleProductChange = (e, newProduct) => {
    e.preventDefault();
    setActiveProduct(newProduct);
  };

  const handleCompare = (e, id) => {
    e.preventDefault();
    if (getCompareProducts.length < 4) {
      dispatch(toggleProductCompare(id));
    }
  };

  const handleFavorite = (e, id) => {
    e.preventDefault();
    dispatch(toggleFavoriteProduct(id));
  };

  const handleClick = e => {
    // placeholder
    e.preventDefault();
  };
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <div className={styles.panelBar}>
              <div className='row no-gutters align-items-end'>
                <div className={'col-12 ' + styles.heading}>
                  <h3>Furniture Gallery</h3>
                </div>
              </div>
            </div>

            {/* Menu on top */}
            <div className={styles.menu}>
              <ul>
                {galleryCategories.map(item => (
                  <li key={item.id}>
                    <a
                      href='#'
                      className={item.id === activeCategory ? styles.active : ''}
                      onClick={e => handleCategoryChange(e, item.id)}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Left box */}
            <div className={styles.box_left}>
              <div className={styles.promoted}>
                <img
                  src={categoryProducts[0].image}
                  alt={showProduct.name}
                  className={styles.images}
                ></img>
                <div className={styles.actions}>
                  <div className={styles.outlines}>
                    <Button
                      className={
                        showProduct.isFavorite ? 'mb-1 ' + styles.isFavorite : 'mb-1'
                      }
                      variant='outline-orange'
                      data-tip='Add to favorite'
                      data-for='favorite'
                      onClick={e => handleFavorite(e, showProduct.id)}
                    >
                      <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
                    </Button>
                    <ReactTooltip
                      id='favorite'
                      place='right'
                      type='dark'
                      effect='float'
                    />
                    <Button
                      className={
                        showProduct.compare ? 'mb-1 ' + styles.compare : 'mb-1'
                      }
                      variant='outline-orange'
                      data-tip='Add to compare'
                      data-for='compare'
                      onClick={e => handleCompare(e, showProduct.id)}
                    >
                      <FontAwesomeIcon icon={faExchangeAlt}>
                        Add to compare
                      </FontAwesomeIcon>
                    </Button>
                    <ReactTooltip
                      id='compare'
                      place='right'
                      type='dark'
                      effect='float'
                    />
                    <Button
                      className='mb-1'
                      variant='outline-orange'
                      data-tip='Quick View'
                      data-for='view'
                      onClick={e => handleClick(e)}
                    >
                      <FontAwesomeIcon icon={faEye}>Show</FontAwesomeIcon>
                    </Button>
                    <ReactTooltip id='view' place='right' type='dark' effect='float' />
                    <Button
                      className=''
                      variant='outline-orange'
                      data-tip='Add to cart'
                      data-for='cart'
                      onClick={e => handleClick(e)}
                    >
                      <FontAwesomeIcon icon={faShoppingBasket}>
                        Add to cart
                      </FontAwesomeIcon>
                    </Button>
                    <ReactTooltip id='cart' place='right' type='dark' effect='float' />
                  </div>
                </div>
                <div className={styles.product_info}>
                  <div className={styles.price}>
                    <p className='m-0'>${showProduct.price}</p>
                    <p className={styles.old_price}>
                      {showProduct.priceOld ? '$' + showProduct.priceOld : ' $160'}
                    </p>
                  </div>
                </div>
                <div className={styles.frame_wrapper}>
                  <div className={styles.frame}>
                    <p className={styles.product_name}>{showProduct.name}</p>
                    <StarsRating id={showProduct.id} stars={showProduct.stars} />
                  </div>
                </div>
              </div>
            </div>

            {/* Thumbnail menu on the bottom  */}
            <div className={styles.thumbnailNavigationWrapper}>
              <Button className={styles.arrow} variant='small'>
                <FontAwesomeIcon icon={faAngleLeft}>Left</FontAwesomeIcon>
              </Button>
              <div className={styles.thumbnailMenu}>
                <ul>
                  {categoryProducts.map(item => (
                    <li key={item.id}>
                      <a
                        href='#'
                        className={
                          item.id === activeProduct ? styles.activeThumbnail : ''
                        }
                        onClick={e => handleProductChange(e, item.id)}
                      >
                        <img src={item.image} alt='chair'></img>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <Button className={styles.arrow} variant='small'>
                <FontAwesomeIcon icon={faAngleRight}>Right</FontAwesomeIcon>
              </Button>
            </div>
          </div>

          {/*  Right Box  */}
          <div className='col-md-6'>
            <div className={styles.box_right}>
              <div className={styles.right_image}>
                <img src='/images/gallery/gallery-bedroom-1.png' alt='bed'></img>
                <div className={'row ' + styles.promo_wrapper}>
                  <h5>
                    FROM <span className={styles.promo_price}>$50.80</span>
                  </h5>
                  <h3 className={styles.promo_name}>Bedroom Bed</h3>
                  <Button variant='main' className={styles.promo_button}>
                    SHOP NOW
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
