import React from "react"
import c_css from "./ProfileAdditionalInfo.module.css"

export const ProfileAdditionalInfoDisplay = ({ userInfo }) => {

    let countList = 0;

    let list = Object.keys(userInfo.contacts).map(key => { 
        if (userInfo.contacts[key]) { 
            countList++;
            return <li className={`${c_css.userInfo__item} ${c_css.userInfo__subItem}`} key={key}>
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

// export default ProfileAdditionalInfoDisplay;