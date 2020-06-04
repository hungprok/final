import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter,
} from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

// const initialState = {
//   user: null
// };

// function countReducer(state = initialState, action, payload) {
//   switch (action.type) {
//     case "SETUSER":
//       return {
//         user: payload
//       };
//     default:
//       return state;
//   }
// }

// const store = createStore(
//   countReducer,
//   // Hooks up Redux Devtools
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

ReactDOM.render(
  // <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  // </Provider>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
