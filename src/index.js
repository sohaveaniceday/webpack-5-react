import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';

const title = 'React with Webpack and Yo';

ReactDOM.render(
  <App title={title} />,
  document.getElementById('root'),
);

module.hot.accept();
