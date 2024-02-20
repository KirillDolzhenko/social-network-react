import React from "react"
import c_css from "./User.module.css"
import { NavLink } from "react-router-dom"

const User = ({ id, isFollowing, followed, followShift, unfollowShift, name, status, img }) => {

    return (<li className={c_css.user}>
                    <div className={c_css.user__profile}>
                        
                <NavLink to={`/profile/${id}`} className={c_css.user__image}>
                            <img src={img ? img: "https://cdn2.iconfinder.com/data/icons/social-flat-buttons-3/512/anonymous-512.png"} alt="userImage" />
                </NavLink>
                        <button disabled={isFollowing} className={`${c_css.user__buttonFollow} ${followed ? c_css.active : ""}`} onClick={() => {
                            
                            if (followed) {
                                unfollowShift(id);
                            } else {
                                followShift(id);
                            }

                            }}>
                            {followed ? "Unfollow" : "Follow"}
                        </button>
                    </div>
                    <div className={c_css.user__content}>
                        <h5 className={c_css.user__username}>{name}</h5>
                        <p className={`${c_css.user__text} ${status ? "" : c_css.user__textNone}`}>{status ? status : "Не указал статус"}</p>
                    </div>
            </li>)
}

export default User;
