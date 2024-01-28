import React from "react"
import c_css from "./MessagesNav.module.css"
import { NavLink } from "react-router-dom"

const MessagesNav = (props) => {

    let dialogiesMap = props.dialogies.map(el => {
        return <li>
            <NavLink to={"/messages/" + el["linkNum"]} className={Data => (Data.isActive ? c_css.active : "")}>{el["name"]}</NavLink>
        </li>
    })

    return (
        <ul className={c_css.messages__dialogies}>
            {dialogiesMap}
        </ul>
    )
}

export default MessagesNav;
