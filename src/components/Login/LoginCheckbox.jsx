import React from "react";
import c_css from "./Login.module.css";

export let LoginCheckbox = (props) => {

    let errorState = props.meta.error && props.meta.touched;
// debugger
    return  <div className={c_css.container}>
                    <input {...props.input} type={props.type} />
                    <label htmlFor={props.name}>Remember Me</label>
            </div>
}