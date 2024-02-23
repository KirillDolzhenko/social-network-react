import {combineReducers, legacy_createStore as createStore, compose, applyMiddleware} from "redux"
import { thunk } from "redux-thunk"
import { reducer as formReducer } from 'redux-form'
import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";
import asideReducer from "./asideReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import initializedReducer from "./initializedReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    usersPage: usersReducer,
    aside: asideReducer,
    auth: authReducer,
    form: formReducer,
    initialized: initializedReducer
})

const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(reducers, composeEnchancer(applyMiddleware(thunk)));

// let store = createStore(reducers, applyMiddleware(thunk));


export default store