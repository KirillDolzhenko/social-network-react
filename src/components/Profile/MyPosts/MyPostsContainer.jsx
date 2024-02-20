import React from "react"
import MyPosts from "./MyPosts.jsx"
// import StateContext from "./../../../stateContext.jsx";
import { connect } from "react-redux"

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts
    }
}

const MyPostsContainer = connect(mapStateToProps)(MyPosts)

// const MyPostsContainer = (props) => {
//     return (<StateContext.Consumer>
//         {(store) => <MyPosts posts={store.getState().profilePage.posts}/>}
//      </StateContext.Consumer>)
// }

export default MyPostsContainer;
