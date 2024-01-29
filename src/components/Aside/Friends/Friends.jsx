import React from "react"
import c_css from "./Friends.module.css"
import Friend from "./Friend/Friend.jsx"

const Friends = (props) => {

    let friendsMap = props.friends.map(el => <Friend img={el.img} href={el.href} name={el.name} />)

    return (<div className={c_css.aside__friends}>
        <h5 className={c_css.aside__friendsTitle}>Your Friends</h5>
        <div className={c_css.aside__content}>
            {friendsMap}
        </div>
    </div>)
}

export default Friends;
