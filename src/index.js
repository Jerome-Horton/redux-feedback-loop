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

// Components Reducers
// create Reducer for feeling component
const feelingsReducer = (state = {}, action) =>{
        switch (action.type) {
            case 'ADD_FEELINGS':
                return [...state, action.payload];
            default:
               return state;
        }
}



// Create Reducer for Understanding Component

// Create Reducer for Support Component

// Create Reducer for Comments Component




// Create Store to hold App information
const storeInstance = createStore(
    combineReducers({
        feelingsReducer

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
