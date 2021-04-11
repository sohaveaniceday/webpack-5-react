import ArrowIcon from '../Icons/arrow.svg';
import React from 'react';
import styles from './Test.module.css';

const Test = ({ title }) => (
  <div className={styles.title}>
    {title}
    <ArrowIcon width="40px" height="40px" />
    <div className={styles.test}>hello</div>
  </div>
);

export default Test;
