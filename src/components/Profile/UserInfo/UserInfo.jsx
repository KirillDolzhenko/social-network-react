import React from "react"
import c_css from "./UserInfo.module.css"
import Loading from "../../Users/UsersBlock/Loading/Loading"
import ProfileStatusHook from "./ProfileStatus/ProfileStatusHook"
import ProfilePicture from "./ProfilePicture/ProfilePicture"
import ProfileAdditionalInfo from "./ProfileAdditionalInfo/ProfileAdditionalInfo"

const UserInfo = (props) => {

    if (props.userInfo) {
        return (
            <>
                <div className={c_css.userInfo}>
                    <div className={c_css.userInfo__img}>
                        <img src={props.userInfo.photos.small ? props.userInfo.photos.small : "https://cdn2.iconfinder.com/data/icons/social-flat-buttons-3/512/anonymous-512.png"} />
                    </div>
                    <div className={c_css.userInfo__desc}>
                        <h2 className={c_css.userInfo__nickname}>{props.userInfo.fullName}</h2>
                        <p className={c_css.userInfo__text}>{props.userInfo.aboutMe ? props.userInfo.aboutMe : "Описание не задано"}</p>
                        <ProfileStatusHook  userAuthProfile={props.userAuthProfile} aboutMe={props.userInfo.aboutMe} status={props.status} putStatus={props.putStatus} />
                        <ProfilePicture  userAuthProfile={props.userAuthProfile}/>
                    </div>
                </div>
                <ProfileAdditionalInfo userAuthProfile={props.userAuthProfile} userAuth={props.userAuth} putDesc={props.putDesc} userInfo={props.userInfo}/>
            </>
        )
    } else {
        return (<Loading />)
    }
}

export default UserInfo;
