import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import 'typeface-roboto';
import './index.css';
import App from './components/App';
import appReducer from './components/App/reducer';

let devAdditions;
if (module.hot) {
  module.hot.accept();
}

if ('__REDUX_DEVTOOLS_EXTENSION__' in window) {
  devAdditions = window.__REDUX_DEVTOOLS_EXTENSION__();
}

const store = createStore(
  appReducer,
  devAdditions
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
