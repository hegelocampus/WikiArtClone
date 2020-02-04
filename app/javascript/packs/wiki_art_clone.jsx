import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import * as configureStore from '../store/store.js';
import saga from '../sagas/index';
import Root from '../components/root.jsx';

document.addEventListener('DOMContentLoaded', () => {
  let store, storeConfig;
  if (process.env.NODE_ENV == 'production') {
    storeConfig = configureStore.prod;
  } else {
    storeConfig = configureStore.dev;
  }

  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = storeConfig(preloadedState);
    delete window.currentUser;
  } else {
    store = storeConfig();
  }

  configureStore.sagaMiddleware.run(saga);

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
