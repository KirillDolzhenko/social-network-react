import React, { useEffect, useState } from "react"
import c_css from "./ProfileAdditionalInfo.module.css"
import { reduxForm, Field } from "redux-form"
import { FormInput } from "../../../../common/FormComponents/FormInput"

const ProfileAdditionalInfo = (props) => {

    let [isEditing, isEditingSwitch] = useState(false);

    let submitFunc = (data) => {
        props.putDesc(data, props.userAuth.id)
            .then((resultCode) => !resultCode && isEditingSwitch(false))
            .catch((err) => console.log(err))
    }

    if (!isEditing) {
        return (
            <div className={c_css.container}>
                <ProfileAdditionalInfoDisplay userInfo={props.userInfo} />
                {(props.userAuthProfile) && <button onClick={() => { isEditingSwitch(true) }} className={c_css.userInfo__button}>Изменить</button>}
            </div>
        )
    } else {
        return (
            <div className={c_css.container}>
                <ProfileAdditionalInfoForm onSubmit={(data) => {submitFunc(data)}} isEditingSwitch={() => isEditingSwitch(false)} putDesc={props.putDesc} initialValues={props.userInfo} />
            </div>
        )
    }
}

const ProfileAdditionalInfoDisplay = ({ userInfo }) => {

    let countList = 0;

    let list = Object.keys(userInfo.contacts).map(key => { 
        if (userInfo.contacts[key]) { 
            countList++;
            return <li className={`${c_css.userInfo__item} ${c_css.userInfo__subItem}`}>
                <b>{key}:</b> {userInfo.contacts[key]}
            </li>
        } else {
            return null
        }
    })

    return (
        <>
            <ul>
                <li className={c_css.userInfo__item}>
                    <span><b>Полное имя: </b></span>
                    <span>{userInfo.fullName}</span>
                </li>
                <li className={c_css.userInfo__item}>
                    <span><b>Описание: </b></span>
                    <span>{userInfo.aboutMe ? userInfo.aboutMe : "Описание не указано"}</span>
                </li>
                    {userInfo.lookingForAJob ? 
                        <>
                            <li className={c_css.userInfo__item}>
                                <span><b>Ищу ли работу: </b></span><span>{userInfo.lookingForAJob ? "Да": "Нет"}</span>
                            </li>
                            <li className={c_css.userInfo__item}>
                                <span><b>Описание поиска работы: </b></span><span>{userInfo.lookingForAJobDescription}</span>
                            </li>
                        </> : null}
                <li className={c_css.userInfo__item}>       
                    <span><b>Контакты: </b></span>
                    <ul>
                        { countList > 0 ? list : <li className={c_css.userInfo__subItem}>Контакты не указаны</li>}
                    </ul>
                </li>
            </ul>
        </>
    )
}

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

export default ProfileAdditionalInfo;
