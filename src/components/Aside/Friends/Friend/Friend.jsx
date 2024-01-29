import React from "react"
import c_css from "./Friend.module.css"

const Friend = (props) => {
    return (<div className={c_css.aside__friend}>
        <a href={props.href} className={c_css.aside__friendImage}>
            <img src={props.img} alt="image" />
        </a>
        <h6 className={c_css.aside__friendTitle}>{props.name}</h6>
    </div>)
}

export default Friend;
