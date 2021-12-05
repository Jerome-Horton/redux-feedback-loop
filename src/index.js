import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// Import Redux and createStore
import { createStore, combineReducers, applyMiddleware } from 'redux';
// import logger
import logger from 'redux-logger';
// Import Provider
import { Provider } from 'react-redux';
// Create Reducers to connect components

// Create Store to hold App information
const storeInstance = createStore(
    combineReducers({
       
    }),
    applyMiddleware(
        logger),
);


// Add Store to ReactDom
ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>, 
document.getElementById('root'));
    registerServiceWorker();
