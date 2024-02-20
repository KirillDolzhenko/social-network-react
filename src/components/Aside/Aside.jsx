import React from "react"
import c_css from "./Aside.module.css"
import { NavLink } from "react-router-dom"
import FriendsContainer from "./Friends/FriendsContainer"

const Aside = () => {
    return (<aside className={c_css.aside}>
        <nav>
            <ul className={c_css.aside__menu}>
                <li className={c_css.aside__el}>
                    <NavLink to="/profile" className={Data => (Data.isActive ? c_css.active : "")}>Profile</NavLink>
                </li>
                <li className={c_css.aside__el}>
                    <NavLink to="/messages" className={Data => (Data.isActive ? c_css.active : "")}>Messages</NavLink>
                </li>
                <li className={c_css.aside__el}>
                    <NavLink to="/users" className={Data => (Data.isActive ? c_css.active : "")}>Users</NavLink>
                </li>
                <li className={c_css.aside__el}>
                    <NavLink to="/music" className={Data => (Data.isActive ? c_css.active : "")}>Music</NavLink>
                </li>
                <li className={c_css.aside__el}>
                    <NavLink to="/news" className={Data => (Data.isActive ? c_css.active : "")}>News</NavLink>
                </li>
                <li className={c_css.aside__el}>
                    <NavLink to="/settings" className={Data => (Data.isActive ? c_css.active : "")}>Settings</NavLink>
                </li>
            </ul>
        </nav>
        <FriendsContainer />
    </aside >)
}

export default Aside;
