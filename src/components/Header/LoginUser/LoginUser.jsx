import React from "react"
import c_css from "./LoginUser.module.css"

const LoginUser = (props) => {

    return (<div className={c_css.userIcon}>
                <div className={c_css.userIcon__image}>
                    <img src={`${props.img ? props.img : "https://cdn2.iconfinder.com/data/icons/social-flat-buttons-3/512/anonymous-512.png"}`} alt="image" />
                </div>
                <p className={c_css.userIcon__username}>{props.login}</p>
                <button onClick={props.logOut} className={c_css.userIcon__logOut}>Log Out</button>
            </div>)
}

export default LoginUser;

