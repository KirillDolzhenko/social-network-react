import React from "react"
import c_css from "./PostMake.module.css"

const PostMake = (props) => {
    return (<div className={c_css.posts__form}>
        <textarea className={c_css.posts__input}></textarea>
        <div className={c_css.posts__buttons}>
            <button className={c_css.posts__post}>Post</button>
            <button className={c_css.posts__clear}>Clear</button>
        </div>
    </div>)
}

export default PostMake;
