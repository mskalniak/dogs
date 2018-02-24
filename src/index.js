import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App/App';
import { Provider } from 'react-redux'
import { reducers } from './reducers/reducers';
import { createStore } from 'redux'; 
import './styles/all.scss';

import 'jquery';
import 'popper.js/dist/umd/popper';
import 'bootstrap';

let appStore = createStore(reducers);

ReactDOM.render(
    <Provider store={appStore}>
        <App />
    </Provider>,
document.getElementById('root'));
