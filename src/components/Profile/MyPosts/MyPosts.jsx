import React from "react"
import c_css from "./MyPosts.module.css"
import Post from "./Post/Post.jsx"
import PostMakeContainer from "./PostMake/PostMakeContainer.jsx"

const MyPosts = React.memo((props) => {

    let postsMap = props.posts.map((el, ind) => <Post username={el.username} text={el.text} like={el.like} key={ind} />);

    return (<div className={c_css.posts}>
                <h3 className={c_css.posts__title}>My Posts</h3>
                <PostMakeContainer/>
                <div className={c_css.posts__content}>
                    {postsMap}
                </div>
    </div>)
})

export default MyPosts;
