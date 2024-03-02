import React from "react";
import { Field, reduxForm } from 'redux-form'
import c_css from "./Login.module.css";
import { maxLength, minLength, notNone } from "../../assets/validation";
import { LoginInput } from "./LoginInput";
import { LoginCheckbox } from "./LoginCheckbox";
import Captcha from "../common/Captcha/Captcha";

let maxLength20 = maxLength(20);
let minLength7 = minLength(7); 

let Login = (props) => {

    return <form onSubmit={props.handleSubmit}>
                <Field name="email" component={LoginInput} type="email" validate={[maxLength20, notNone, minLength7]} />
                <Field name="password" component={LoginInput} type="password" validate={[maxLength20, notNone, minLength7]} />
                <div className={c_css.input_box}>
                    <Field name="rememberMe" component={LoginCheckbox} type="checkbox" />
                </div>

                {props.auth.captcha && <Captcha url={props.auth.captcha} />}

                <div className={c_css.error_message}>{props.error}</div>
                <button className={c_css.button} type="submit">Log In</button>
            </form>
}

// let LoginCaptcha = (props) => {
//     return <Captcha url={props.url}/> 
// }

Login = reduxForm({
    form: "login"
})(Login)

export default Login