import React from 'react'
import App from './app';
import {createRoot} from "react-dom";
import {compose, createStore} from "redux";
import {rootReducer} from "./store/reducers/rootReducer";
import {Provider} from "react-redux";

const store = createStore(rootReducer, compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

const root = createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);