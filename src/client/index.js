import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import store from '~c/store/index';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root')
);