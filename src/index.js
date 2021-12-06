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
const feelingsReducer = (state = 0, action) =>{
        switch (action.type) {
            case 'ADD_FEELINGS':
                return [...state, action.payload];
            default:
               return state;
        }
}
// Create Reducer for Understanding Component
const understandingReducer = (state = 0, action) =>{
    switch (action.type) {
        case 'ADD_UNDERSTANDING':
            return [...state, action.payload];
        default:
           return state;
    }
    
}

// Create Reducer for Support Component
const supportReducer = (state = 0, action) =>{
    switch (action.type) {
        case 'ADD_SUPPORT':
            return [...state, action.payload]
        default:
           return state;
    }
}

// Create Reducer for Comments Component
const commentsReducer = (state = 0, action) =>{
    switch (action.type) {
        case 'ADD_COMMENTS':
            return [...state, action.payload];
        default:
           return state;
    }
}



// Create Store to hold Reducers which holds the App information
const storeInstance = createStore(
    combineReducers({
        // Add Reducers
        feelingsReducer,
        understandingReducer,
        supportReducer,
        commentsReducer

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
