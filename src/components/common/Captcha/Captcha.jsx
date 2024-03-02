import React from "react";
import { Field } from 'redux-form'
import { FormInput } from "../FormComponents/FormInput";
import { notNone } from "../../../assets/validation";
import c_css from "./Captcha.module.css";

let Captcha = ( { url } ) => {

    return <>
                <img src={url} className={c_css.captcha} alt="captcha image" />
                <Field name={ `captcha` } type="text" component={ FormInput } validate={[ notNone ]}/>
            </>
}

export default Captcha