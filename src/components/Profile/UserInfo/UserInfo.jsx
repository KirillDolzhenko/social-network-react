import React from "react"
import c_css from "./UserInfo.module.css"
import Loading from "../../Users/UsersBlock/Loading/Loading"
import ProfileStatusHook from "./ProfileStatus/ProfileStatusHook"
import ProfilePicture from "./ProfilePicture/ProfilePicture"

const UserInfo = (props) => {
    // debugger

    if (props.userInfo) {
        return (
            <div className={c_css.userInfo}>
                <div className={c_css.userInfo__img}>
                    <img src={props.userInfo.photos.small ? props.userInfo.photos.small : "https://cdn2.iconfinder.com/data/icons/social-flat-buttons-3/512/anonymous-512.png"} />
                </div>
                <div className={c_css.userInfo__desc}>
                    <h2 className={c_css.userInfo__nickname}>{props.userInfo.fullName}</h2>
                    <p className={c_css.userInfo__text}>{props.userInfo.aboutMe ? props.userInfo.aboutMe : "Описание не задано"}</p>
                    <ProfileStatusHook aboutMe={props.userInfo.aboutMe} status={props.status} putStatus={props.putStatus} />
                    <ProfilePicture />
                </div>
            </div>
        )
    } else {
        return (<Loading />)
    }
}

export default UserInfo;
