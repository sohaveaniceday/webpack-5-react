import React from 'react';
import styles from './style.css';
import ArrowIcon from './icons/arrow.svg';

const App = ({ title }) => (
  <div className={styles.title}>
    {title}
    <ArrowIcon width="40px" height="40px" />
  </div>
);

export default App;
