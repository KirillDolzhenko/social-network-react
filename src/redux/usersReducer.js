import userAPI from "../API/api";
import objectFollowToggle from "./../assets/stateHelpers"

const FOLLOW_STATUS = "CHANGE-STATE-TEXTAREA";
const LOAD_USERS = "LOAD-USERS";
const SET_PAGE_NUMBER = "SET-PAGE-NUMBER";
const SET_PAGE_CURRENT = "SET-PAGE-CURRENT";
const TOGGLE_LOADING = "TOGGLE-LOADING";
const TOGGLE_FOLLOWING = "TOGGLE-FOLLOWING";

let stateDefault = {
    users: [],
    isFollowing: [],
    isLoading: false,
    pageNumber: 10,
    pageElements: 10,
    pageCurrent: 1,
    pageButtons: 5
}

const usersReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case FOLLOW_STATUS:
                return {
                    ...state,
                    users: [...(state.users.map(el => {
                                        if (el.id === action.id) {
                                            return {
                                                ...el,
                                                followed: !el.followed
                                            }
                                        } else {
                                            return {
                                                ...el
                                            }
                                        }
                                            }
                                    )
                            )
                    ]
                };
        case LOAD_USERS:
            return {
                ...state,
                users: [...action.users.map(e => e)]
                };
        case SET_PAGE_NUMBER:
            return {
                ...state,
                pageNumber: action.pageNumber
                };
        case SET_PAGE_CURRENT:
            return {
                ...state,
                pageCurrent: action.pageCurrent
                };
        case TOGGLE_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
                };
        case TOGGLE_FOLLOWING:
            return objectFollowToggle(state, action)
            //  {
            //     ...state,
            //     isFollowing: (state.isFollowing.some(el => el == action.id )
            //                                 ? state.isFollowing.filter(el => el != action.id)
            //                                 : [...state.isFollowing, action.id])
            //     };
        default:
            return state;
    }
};

export default usersReducer;

export let changeFollowStatus = (id) => ({
    type: FOLLOW_STATUS,
    id
})
export let loadUsers = (users) => ({
    type: LOAD_USERS,
    users
})
export let setPageNumber = (pageNumber) => ({
    type: SET_PAGE_NUMBER,
    pageNumber
})
export let setPageCurrent = (pageCurrent) => ({
    type: SET_PAGE_CURRENT,
    pageCurrent
})
export let toggleLoading = (isLoading) => ({
    type: TOGGLE_LOADING,
    isLoading
})
export let toggleFollowing = (id) => ({
    type: TOGGLE_FOLLOWING,
    id
})

///

export let getUsers = (pageCurrent, pageElements) => async (dispatch) => { 

    dispatch(toggleLoading(true));

    let response = await userAPI.getUsers(pageCurrent, pageElements)
          
    dispatch(loadUsers(response.items))
    dispatch(setPageNumber(Math.ceil(response.totalCount / pageElements)))
    dispatch(setPageCurrent(pageCurrent))
    dispatch(toggleLoading(false));
}

export let followShift = (id) => async (dispatch) => {
    dispatch(toggleFollowing(id));

    let response = await userAPI.followUser(id);
    
    if (response.data.resultCode == 0) {
        dispatch(changeFollowStatus(id));
        dispatch(toggleFollowing(id));  
    }
}

export let unfollowShift = (id) => async (dispatch) => {
    dispatch(toggleFollowing(id));

    let response = await userAPI.unfollowUser(id);
    
    if (response.data.resultCode == 0) {
        dispatch(changeFollowStatus(id));
        dispatch(toggleFollowing(id));  
    }
}