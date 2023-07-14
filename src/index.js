// External Library Imports
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

// Local imports
import './index.css';
import App from './App';

// React will render a tree from the root element and the App component
ReactDOM.render(
 
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(   );