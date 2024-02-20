import React from "react";
import c_css from "./Login.module.css";

export let LoginInput = (props) => {

    let errorState = props.meta.error && props.meta.touched;

    return  <div className={c_css.container}>
                <input className={`${c_css.input} ${errorState ? c_css.error : ""}`} {...props.input} type={props.type} />
                <span className={c_css.error}>{errorState ? props.meta.error : ""}</span>
            </div>
}