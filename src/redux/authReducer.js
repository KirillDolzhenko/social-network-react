import { stopSubmit } from "redux-form";
import userAPI, { authAPI } from "../API/api";

const SET_AUTH = "SET-AUTH";
const SET_INFO = "SET-INFO";
const CHANGE_IMG = "authReducer_CHANGE_IMG";
const SET_CAPTCHA = "authReducer_SET_CAPTCHA";
const SET_CAPTCHA_TRIES = "authReducer_SET_CAPTCHA_TRIES";

let stateDefault = {
    img: null,
    login: null,
    id: null,
    isAuth: false,
    captcha: undefined,
    captchaTries: 0,
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
        case CHANGE_IMG:
            return {
                ...state,
                img: action.img
                };
        case SET_CAPTCHA:
            return {
                ...state,
                captcha: action.url
                };
        case SET_CAPTCHA_TRIES:
            return {
                ...state,
                captchaTries: action.num
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
export let setCaptcha = (url) => ({
    type: SET_CAPTCHA,
    url
})
export let setCaptchaTries = (num) => ({
    type: SET_CAPTCHA_TRIES,
    num
})
export let setInfo = (img, login, id) => ({
    type: SET_INFO,
    img,
    login,
    id
})
export let changeImg = (img) => ({
    type: CHANGE_IMG,
    img
})

// THUNKS //

export let autoAuth = () => async (dispatch) => {

    let responseProfile = await userAPI.autoLogin()

    if (responseProfile) {
        if (responseProfile.status < 400) {
            dispatch(setInfo(responseProfile.data.photos.small, responseProfile.data.fullName, responseProfile.data.userId))
            dispatch(setAuth(true))
        }
    }
}

export let logIning = (info, captchaTries) => async (dispatch) => { 
    let response = await authAPI.logIn(info)
    
    if (response.data.resultCode == 0) {
        await dispatch(autoAuth());
        
        dispatch(setCaptcha(undefined));
        
        if (captchaTries) {
            setCaptchaTries(0);
        } 
    } else if (response.data.resultCode == 10) {
        let responseCaptcha = await authAPI.getCaptcha()
        
        await dispatch(setCaptcha(responseCaptcha.data.url));
        
        if (captchaTries) {
            dispatch(stopSubmit("login", {_error: `${response.data.messages.length ? response.data.messages[0] : "Common Error"}`}))
        } else {
            dispatch(stopSubmit("login", {_error: "Enter captcha"}))   
        }

        dispatch(setCaptchaTries(++captchaTries));
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