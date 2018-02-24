import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker';
import { reducers } from './reducers/reducers';
import { createStore } from 'redux'; 

let appStore = createStore(reducers);

ReactDOM.render(
    <Provider store={appStore}>
        <App />
    </Provider>,
document.getElementById('root'));
registerServiceWorker();
