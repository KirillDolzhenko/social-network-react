import { autoAuth } from "./authReducer";

const SET_INITIALIZED = "SET-INITIALIZED";
const UNSET_INITIALIZED = "UNSET-INITIALIZED";

let initializedDefault = {
    isInitialized: false
}

const initializedReducer = (state = initializedDefault, action) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                isInitialized: true
                };
        case UNSET_INITIALIZED:
            return {
                ...state,
                isInitialized: false
                };
        default:
            return state;
    }
};

export default initializedReducer;

export let setInitialized = () => ({
    type: SET_INITIALIZED
})

export let unsetInitialized = () => ({
    type: UNSET_INITIALIZED
})

export let setInitializedAuto = () => async (dispatch) => {
    
    dispatch(unsetInitialized())
    
    await dispatch(autoAuth())
    
    dispatch(setInitialized())
}