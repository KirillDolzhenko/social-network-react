import React from "react"
import c_css from "./Friend.module.css"

const Friend = ({href, img, name}) => {
    return (<div className={c_css.aside__friend}>
        <a href={href} className={c_css.aside__friendImage}>
            <img src={img} alt="image" />
        </a>
        <h6 className={c_css.aside__friendTitle}>{name}</h6>
    </div>)
}

export default Friend;
