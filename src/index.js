import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './views/App';

import { Provider } from "react-redux";
import {
  createStore, applyMiddleware,
  // compose
} from "redux";
import thunk from "redux-thunk";
import reducers from './reducers';
// import * as serviceWorker from './serviceWorker';


const store = createStore(reducers, applyMiddleware(thunk));
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
  </BrowserRouter>
, document.getElementById('root'));

// serviceWorker.register();