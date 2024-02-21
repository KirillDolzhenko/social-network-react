import React from "react"
import c_css from "./Post.module.css"
import icon from "../../../../redux/images/icon.jpg"

const Post = (props) => {
    return (<div className={c_css.post}>
        <div className={c_css.post__image}>
            <img src={icon} />
        </div>
        <div className={c_css.post__content}>
            <p className={c_css.post__username}><a href="#">{props.username}</a></p>
            <p className={c_css.post__text}>{props.text}</p>
            <button className={c_css.post__like}>{props.like} Like</button>
        </div>
    </div>)
}

export default Post;
