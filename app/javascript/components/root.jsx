import { HashRouter as Router } from 'react-router-dom'
import React from 'react'
import { Provider } from 'react-redux'
import App from './app'

export default ({ store }) => (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
)
