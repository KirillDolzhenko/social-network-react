import React from "react"
import c_css from "./SendMessage.module.css"

let SendMessageInput = (props) => {

    let errorState = props.meta.error && props.meta.touched;

    return <div className={c_css.input__container}>
                <textarea {...props.input} type={props.type} className={`${c_css.message__input} ${errorState ? c_css.error : "" }`}> 
                </textarea>
                <span className={c_css.error}>{(errorState) ? props.meta.error : ""}</span>
            </div>
}

export default SendMessageInput