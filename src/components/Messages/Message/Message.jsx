import React from "react"
import c_css from "./Message.module.css"

const Message = (props) => {
    return (<section className={c_css.messages__message}>
        <div className={c_css.messages__messagePicture}>
            <img src="/images/profile/icon.jpg" alt="profile_picture" />
        </div>
        <div className={c_css.messages__messageContent}>
            <h6 className={c_css.messages__messageName}>{props.name}</h6>
            <span className={c_css.messages__messageTime}>{props.time}</span>
            <p className={c_css.messages__messageText}>{props.text}</p>
        </div>
    </section>)
}

export default Message;
