import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import AppFrame from './app-frame/AppFrame';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <AppFrame />
  </React.StrictMode>,

  document.getElementById('root')
);

reportWebVitals();
