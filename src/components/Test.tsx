import React, { useEffect } from 'react';

import ArrowIcon from '../Icons/arrow.svg';
import styles from './Test.module.css';

const Test = ({ title }: any) => {
  useEffect(() => {
    console.log(title);
  }, []);
  return (
    <div className={styles.title}>
      {title}
      <ArrowIcon width="40px" height="40px" />
      <div className={styles.test}>hello</div>
    </div>
  );
};
export default Test;
