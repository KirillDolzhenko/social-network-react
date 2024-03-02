import React from "react";
import c_css from "./Form.module.css";

export let FormInput = (props) => {

    let errorState = props.meta.error && props.meta.touched;

    if (props.type == "checkbox") {    
        return  <div className={c_css.container}>
                    <input className={`${c_css.checkbox} ${errorState ? c_css.error : ""}`} {...props.input} type={props.type} />
                    <span className={c_css.error}>{errorState ? props.meta.error : ""}</span>
                </div>
    } else { 
        return  <div className={c_css.container}>
                    <input className={`${c_css.input} ${errorState ? c_css.error : ""}`} {...props.input} type={props.type} />
                    <span className={c_css.error}>{errorState ? props.meta.error : ""}</span>
                </div>
    }
}