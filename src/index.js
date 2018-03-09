import React from 'react';
import ReactDOM from 'react-dom';
import LoginComponent from './components/LoginComponent.jsx';

ReactDOM.render(
  <LoginComponent />,
  document.getElementById('app')
);

module.hot.accept();
