import React from "react"
import c_css from "./PostMake.module.css"
// import { Field, reduxForm } from 'redux-form'

let PostMakeInput = (props) => {

    let errorState = props.meta.error && props.meta.touched;

    return <div className={c_css.post__container}>
                <textarea {...props.input} className={`${c_css.posts__input} ${errorState ? c_css.error : "" }`}> 
                </textarea>
                <span className={c_css.error}>{(errorState) ? props.meta.error : ""}</span>
            </div>
}

//  {...props.meta} {...props}

export default PostMakeInput