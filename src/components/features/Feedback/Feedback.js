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
            <div className={'col ' + styles.menu}></div>
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
                <li>
                  <a className={''}>page</a>
                </li>
                <li>
                  <a className={''}>page</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
