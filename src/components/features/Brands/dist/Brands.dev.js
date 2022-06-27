// import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import { getAllBrands } from '../../../redux/brandsRedux';
// import styles from './Brands.module.scss';
// import Button from '../../common/Button/Button';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
// const Brands = () => {
//   const allBrands = useSelector(getAllBrands);
//   const [activeBrands, setActiveBrands] = useState(0);
//   const handleLeftSlide = e => {
//     e.preventDefault();
//     setActiveBrands(activeBrands - allBrands.length);
//   };
//   const handleRightSlide = e => {
//     e.preventDefault();
//     setActiveBrands(activeBrands + allBrands.length);
//   };
//   return (
//     <div className={styles.root}>
//       <div className='container'>
//         <div className='row'>
//           <div className={styles.thumbnailNavigationWrapper}>
//             <Button
//               className={styles.arrow}
//               variant='small'
//               onClick={e => handleLeftSlide(e)}
//             >
//               <FontAwesomeIcon icon={faAngleLeft}>Left</FontAwesomeIcon>
//             </Button>
//             {allBrands.map(item => (
//               <div className={styles.thumbnailMenu} key={item.id}>
//                 <ul>
//                   <li>
//                     <a href='#' className={styles.activeThumbnail}>
//                       <img src={item.image} alt='brands' />
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             ))}
//             <Button
//               className={styles.arrow}
//               variant='small'
//               onClick={e => handleRightSlide(e)}
//             >
//               <FontAwesomeIcon icon={faAngleRight}>Right</FontAwesomeIcon>
//             </Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Brands;
// import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import { getAllBrands } from '../../../redux/brandsRedux';
// import styles from './Brands.module.scss';
// import Button from '../../common/Button/Button';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
// const Brands = () => {
//   const allBrands = useSelector(getAllBrands);
//   const [activeBrands, setActiveBrands] = useState(0);
//   // const handleLeftSlide = e => {
//   //   e.preventDefault();
//   //   setActiveBrands(activeBrands - allBrands.length);
//   // };
//   // const handleRightSlide = e => {
//   //   e.preventDefault();
//   //   setActiveBrands(activeBrands + allBrands.length);
//   // };
//   return (
//     <div className={styles.root}>
//       <div className='container'>
//         <div className='row'>
//           <div className={styles.thumbnailNavigationWrapper}>
//             <div
//               id='carouselExampleSlidesOnly'
//               className='carousel slide'
//               data-ride='carousel'
//             >
//               <div className='carousel-inner'>
//                 <div className='carousel-item active'>
//                   <div className='row'>
//                     {allBrands.slice(0, 6).map(item => (
//                       <div className={styles.thumbnailMenu} key={item.id}>
//                         <ul>
//                           <li>
//                             <a href='#' className={styles.activeThumbnail}>
//                               <img src={item.image} alt='brands' />
//                             </a>
//                           </li>
//                         </ul>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//               <a
//                 className='carousel-control-prev'
//                 href='#carouselExampleControls'
//                 role='button'
//                 data-slide='prev'
//               >
//                 <span className='carousel-control-prev-icon' aria-hidden='true'></span>
//                 <span className='sr-only'>Previous</span>
//               </a>
//               <a
//                 className='carousel-control-next'
//                 href='#carouselExampleControls'
//                 role='button'
//                 data-slide='next'
//               >
//                 <span className='carousel-control-next-icon' aria-hidden='true'></span>
//                 <span className='sr-only'>Next</span>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Brands;
