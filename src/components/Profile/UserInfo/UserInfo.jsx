import React from "react"
import c_css from "./UserInfo.module.css"

const UserInfo = () => {
    return (
        <div className={c_css.userInfo}>
            <div className={c_css.userInfo__img}>
                <img src='./images/ow/logo.jpg' />
            </div>
            <div className={c_css.userInfo__desc}>
                <h2 className={c_css.userInfo__nickname}>OtherUser</h2>
                <p className={c_css.userInfo__text}>some text about me</p>
            </div>
        </div>
    )
}

export default UserInfo;
