import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useEffect } from 'react';
import { getScreenSize } from '../../../redux/settingsReducer';
import { useDispatch } from 'react-redux';

const MainLayout = ({ children }) => {
  const [viewPort, setViewPort] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 767) {
        setViewPort('desktop');
      } else if (window.innerWidth < 767 && window.innerWidth > 576) {
        setViewPort('tablet');
      } else if (window.innerWidth < 576) {
        setViewPort('mobile');
      }
      if (viewPort === 'desktop') {
        dispatch(getScreenSize({ mediaQuery: 'desktop' }));
      } else if (viewPort === 'tablet') {
        dispatch(getScreenSize({ mediaQuery: 'tablet' }));
      } else if (viewPort === 'mobile') {
        dispatch(getScreenSize({ mediaQuery: 'mobile' }));
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [viewPort]);

  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
