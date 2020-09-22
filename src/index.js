import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './reducers/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './reducers/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
