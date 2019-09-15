import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TopMenu from './TopMenu';
import CrearProd from "./CrearProd";
import * as serviceWorker from './serviceWorker';
import Feedback from "./Feedback.js";
ReactDOM.render(
  <div>
    <TopMenu/>
    <div className="container">
      <App/>
      <CrearProd/>
      <Feedback/>
    </div>
  </div>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
