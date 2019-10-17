import { HashRouter as Router } from 'react-router-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { ThroughProvider } from 'react-through';
import App from './app';

export default ({store}) => (
  <ThroughProvider>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </ThroughProvider>
);

