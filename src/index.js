import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware, combineReducers, compose} from 'redux'
import {BrowserRouter} from 'react-router-dom'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import * as reducers from './store/reducers'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    login: reducers.reducerLogin,
    auth: reducers.reducerAuth,
    forgotPassword: reducers.reducerForgotPassword,
    signup: reducers.reducerSignup
})


const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)) )

const application = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)
ReactDOM.render(application, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
