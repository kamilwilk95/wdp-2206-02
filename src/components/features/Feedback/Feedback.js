import React from 'react';
import styles from './Feedback.module.scss';

const Feedback = () => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.panelBar}>
          <div className='row no-gutters align-items-end'>
            <div className={'col-auto ' + styles.heading}>
              <h3>Client Feedback</h3>
            </div>
            <div className={'col'}></div>
            <div className={'col-auto ' + styles.dots}>
              <ul>
                <li>
                  <a className={styles.active}>page</a>
                </li>
                <li>
                  <a className={''}>page</a>
                </li>
                <li>
                  <a className={''}>page</a>
                </li>
              </ul>
            </div>
          </div>
        </div>{' '}
        <div className='row justify-content-center mb-3'>
          <img src='/images/apostrophe.png' alt='apostrophe' />
        </div>
        <div className='row justify-content-center'>
          <div className={'col-10'}>
            <div className={styles.feedbackContent}>
              Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
              accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.
            </div>
          </div>
        </div>
        <div className={styles.feedbackAuthorWrapper}>
          <div className='row justify-content-center'>
            <div className='col-2'>
              <div className={styles.authorBox}></div>
            </div>
            <div className='col-2'>
              <div className='row'>
                {' '}
                <div className={styles.feedbackAuthorText}> John Smith </div>{' '}
              </div>
              <div className='row'>
                <div className={styles.feedbackAuthorTitle}> Furniture Client </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
