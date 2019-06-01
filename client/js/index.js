import "@babel/polyfill";
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Routes from './Routes';
import store from './store';

Object.defineProperty(window, 'isProd', {
  value: process.env.NODE_ENV === 'production'
});

render(
  <Provider store={store()}>
    <Routes />
  </Provider>,
  document.getElementById('container')
);
