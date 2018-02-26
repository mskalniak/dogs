import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App/App.container';
import { Provider } from 'react-redux'
import { rootReducer } from './reducers/rootReducer';
import { createStore, applyMiddleware, compose } from 'redux'; 
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic } from './epics/rootEpic';
import 'jquery';
import 'popper.js/dist/umd/popper';
import 'bootstrap';

//Styles
import './styles/all.scss';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let appStore = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(createEpicMiddleware(rootEpic))
    )
);

ReactDOM.render(
    <Provider store={appStore}>
        <App />
    </Provider>,
document.getElementById('root'));
