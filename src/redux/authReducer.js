import { stopSubmit } from "redux-form";
import userAPI, { authAPI } from "../API/api";

const SET_AUTH = "SET-AUTH";
const SET_INFO = "SET-INFO";
const authReducer_CHANGE_IMG = "authReducer_CHANGE_IMG";

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
        case authReducer_CHANGE_IMG:
            return {
                ...state,
                img: action.img
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
export let changeImg = (img) => ({
    type: authReducer_CHANGE_IMG,
    img
})

// THUNKS //

export let autoAuth = () => async (dispatch) => {

    let responseProfile = await userAPI.autoLogin()

    if (responseProfile) {
        console.log(responseProfile);
        if (responseProfile.status < 400) {
            console.log(responseProfile)
            dispatch(setInfo(responseProfile.data.photos.small, responseProfile.data.fullName, responseProfile.data.userId))
            dispatch(setAuth(true))
        }
    }
}

export let logIning = (info) => async (dispatch) => { 
    let response = await authAPI.logIn(info)

    console.log(response.data.resultCode)
    console.log(response.data.resultCode)
    console.log(response.data.resultCode)
    
    if (response.data.resultCode == 0) {
        // dispatch(setAuth(true));
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