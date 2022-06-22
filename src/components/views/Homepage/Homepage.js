import React from 'react';
//import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Feedback from '../../features/Feedback/Feedback';
import Gallery from '../../features/Gallery/Gallery';
import PromotedBox from '../../features/PromotedBox/PromotedBox';

const Homepage = () => (
  <div className={styles.root}>
    <PromotedBox />
    <FeatureBoxes />
    <NewFurniture />
    <Gallery />
    <Feedback />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
