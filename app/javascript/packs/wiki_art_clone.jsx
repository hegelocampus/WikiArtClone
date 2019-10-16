import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import configureStore from '../store/store.js'
import Root from '../components/root.jsx'
import * as SelectorAcions from '../actions/selector_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  //window.store = store;
  //window.requestAllSelectors = SelectorAcions.requestAllSelectors;
  //window.fetchSelector = SelectorAcions.fetchSelector;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root)
});

