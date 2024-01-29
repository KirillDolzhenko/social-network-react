import React from "react"
import c_css from "./MyPosts.module.css"
import Post from "./Post/Post.jsx"
import PostMake from "./PostMake/PostMake.jsx"

const MyPosts = (props) => {

    let postsMap = props.store.getState().profilePage.posts.map(el => <Post username={el.username} text={el.text} like={el.like} />);

    return (<div className={c_css.posts}>
        <h3 className={c_css.posts__title}>My Posts</h3>
        <PostMake store={props.store} addPost={props.addPost} changeStateTextarea={props.changeStateTextarea} />
        <div className={c_css.posts__content}>
            {postsMap}
        </div>
    </div>)
}

export default MyPosts;
