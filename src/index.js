import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from 'redux';
import store from "../src/reducers/index"
import promise from 'redux-promise';
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
ReactDOM.render(
    <Provider store={createStoreWithMiddleware(store)} >
        <App />
    </Provider>,
    document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();