import React from "react"
import c_css from "./ProfileAdditionalInfo.module.css"
import { reduxForm, Field } from "redux-form"
import { FormInput } from "../../../common/FormComponents/FormInput"

let ProfileAdditionalInfoForm = (props) => {

    let list = Object.keys(props.initialValues.contacts).map(key => { 
        return <li className={c_css.userInfo__subItem}>
                    <span><b>{key}: </b></span>
                    <Field name={`contacts.${key}`} type="text" component={FormInput} />
                </li>
    })

    return  (
         <form onSubmit={props.handleSubmit}>
            <ul>
                <li className={c_css.userInfo__item}>
                    <span><b>Полное имя: </b></span>
                    <Field name="fullName" type="text" component={FormInput} />
                </li>
                <li className={ c_css.userInfo__text }>
                    <span><b>Описание: </b></span>
                    <Field name="aboutMe" type="text" component={FormInput} />
                </li>
                <li className={ c_css.userInfo__text }>
                    <span><b>Ищу ли работу: </b></span>
                    <Field name="lookingForAJob" type="checkbox" component={FormInput} />
                </li>
                <li className={ c_css.userInfo__text }>
                    <span><b>Описание поиска работы: </b></span>
                    <Field name="lookingForAJobDescription" type="text" component={FormInput} />
                </li>
                <li className={c_css.userInfo__item}>       
                    <span><b>Контакты: </b></span>
                    <ul>
                        { list }
                    </ul>
                </li>
            </ul>
            {props.error && <div className={c_css.error}>{props.error}</div>}
            <button type="sumbit" className={c_css.userInfo__button}>Сохранить</button>
            
        </form>
    )
}

ProfileAdditionalInfoForm = reduxForm({
    form: "userInfo"
})(ProfileAdditionalInfoForm)

export default ProfileAdditionalInfoForm;