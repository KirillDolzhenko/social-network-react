import React from "react"
import PostMake from "./PostMake.jsx"
import { createDispatchAddPost, createDispatchChangeStateTextare } from "./../../../../redux/profileReducer"
import StateContext from "./../../../../stateContext.jsx";
import { connect } from "react-redux"

const mapStateToProps = (state) => {
    return {
        postInput: state.profilePage.postInput 
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        inputInPost: (text) => {
            dispatch(createDispatchAddPost(text))
        },
        
        inputInStateTextarea: (text) => {
            dispatch(createDispatchChangeStateTextare(text))
        },
    }
}

const PostMakeContainer = connect(mapStateToProps, mapDispatchToProps)(PostMake)


// const PostMakeContainer = (props) => {
//     return <StateContext.Consumer>
//                {(store) => {
//                 function inputInPost(text) {
//                     store.dispatch(createDispatchAddPost(text))
//                 };
            
//                 function inputInStateTextarea(text) {
//                     store.dispatch(createDispatchChangeStateTextare(text))
//                 };

//                return <PostMake 
//                             postInput={store.getState().profilePage.postInput} 
//                             inputInPost={(text) => {inputInPost(text)}} 
//                             inputInStateTextarea={(text) => {inputInStateTextarea(text)}}/>}
//             }
//     </StateContext.Consumer>
// }

export default PostMakeContainer;
