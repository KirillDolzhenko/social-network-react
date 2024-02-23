import userAPI, { pictureAPI, statusAPI } from "../API/api";
import { changeImg } from "./authReducer";

const CHANGE_STATE_TEXTAREA = "CHANGE-STATE-TEXTAREA";
const CHANGE_STATE_STATUS = "CHANGE-STATE-STATUS";
const CHANGE_STATE_PICTURE = "CHANGE-STATE-PICTURE";
const ADD_POST = "ADD-POST";
const SET_USER_INFO = "SET-USER-INFO";
const REMOVE_USER_INFO = "REMOVE-USER-INFO";

let stateDefault = {
    userInfo: null,
    posts: [
        { username: "OtherUser", text: "My post", like: 1 },
        { username: "OtherMan", text: "popa", like: 12 },
        { username: "FRED", text: "My post #1", like: 32 },
        { username: "Fed", text: "My post here", like: 609 },
        { username: "he", text: "hehe", like: 59 },
    ],
    status: ""
}

const profileReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case ADD_POST:
            if (action.text !== '') {
                return {
                    ...state,
                    posts: [...state.posts, {
                        username: "Someone",
                        text: action.text,
                        like: 0
                    }],
                    postInput: ""
                };
            } else {
                return state;
            }
        case CHANGE_STATE_TEXTAREA:
            return {
                ...state,
                postInput: action.text
            };
        case SET_USER_INFO:
            return {
                ...state,
                userInfo: {...action.userInfo}
            };
        case REMOVE_USER_INFO:
            return {
                ...state,
                userInfo: null
            };
        case CHANGE_STATE_STATUS:
            return {
                ...state,
                status: action.status
            };
        case CHANGE_STATE_PICTURE:
                // console.log(action.data)
                // console.log(state)
            return {
                ...state,
                userInfo: {...state.userInfo, photos: action.data.data.data.photos}
            };
        default:
            return state;
    }
};

export default profileReducer;

//AC//

export let createDispatchChangeStateTextare = (text) => ({
    type: CHANGE_STATE_TEXTAREA,
    text: text
})
export let createDispatchAddPost = (text) => ({
    type: ADD_POST,
    text: text
})
export let setUserInfo = (userInfo) => ({
    type: SET_USER_INFO,
    userInfo
})
export let changeStatus = (status) => ({
    type: CHANGE_STATE_STATUS,
    status,
})
export let changePicture = (data) => ({
    type: CHANGE_STATE_PICTURE,
    data,
})
export let removeUserInfo = () => ({
    type: REMOVE_USER_INFO
})

//THUNKS//

export let setUser = (id) => async (dispatch) => {
    dispatch(removeUserInfo())

    let data = await userAPI.getUser(id);

    dispatch(setUserInfo(data))
}

export let setPicture = (file) => async (dispatch) => {
    let formData = new FormData();
    formData.append("image", file);


    // dispatch(removeUserInfo())

    // console.log(formData)

    let data = await pictureAPI.putUserPicture(formData);
    // console.log(data)
    // let data2 = await userAPI.getUser(data.data.userId);

    dispatch(changeImg(data.data.data.photos.small))
    dispatch(changePicture(data))
}

export let putStatus = (status) => async (dispatch) => {

    let response = await statusAPI.putUserStatus(status)
    
    if (response.data.resultCode == 0) {
        dispatch(changeStatus(status))
    }
}

export let getStatus = (id) => async (dispatch) => {

    dispatch(changeStatus(""))

    let response = await statusAPI.getUserStatus(id)
    
    dispatch(changeStatus(response.data))
}