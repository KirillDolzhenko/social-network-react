import { stopSubmit } from "redux-form";
import userAPI, { authAPI } from "../API/api";

const SET_AUTH = "SET-AUTH";
const SET_INFO = "SET-INFO";

let stateDefault = {
    img: null,
    login: null,
    id: null,
    isAuth: false
}

const authReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case SET_INFO:
                return {
                    ...state,
                    img: action.img,
                    login: action.login,
                    id: action.id,
                };
        case SET_AUTH:
            return {
                ...state,
                isAuth: action.isAuth
                };
        default:
            return state;
    }
};

export default authReducer;

// AC //

export let setAuth = (isAuth) => ({
    type: SET_AUTH,
    isAuth
})
export let setInfo = (img, login, id) => ({
    type: SET_INFO,
    img,
    login,
    id
})

// THUNKS //

export let autoAuth = () => async (dispatch) => {

    let responseProfile = await userAPI.autoLogin()

    if (responseProfile) {
        if (responseProfile.status < 400) {
            dispatch(setInfo(responseProfile.data.photos.small, responseProfile.data.fullName, responseProfile.data.id))
            dispatch(setAuth(true))
        }
    }
}

export let logIning = (info) => async (dispatch) => { 
    let response = await authAPI.logIn(info)
    
    if (response.data.resultCode == 0) {
        dispatch(setAuth(true));
        dispatch(autoAuth());
    } else {
        dispatch(stopSubmit("login", {_error: `${response.data.messages.length ? response.data.messages[0] : "Common Error"}`}))
    }
}

export let logOut = () => async (dispatch) => { 
    let response = await authAPI.logOut()
    
    if (response.data.resultCode == 0) {
        dispatch(setAuth(false));
    }
}