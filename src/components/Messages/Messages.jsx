import React from "react"
import Message from "./Message/Message.jsx"
import MessagesNav from "./MessagesNav/MessagesNav.jsx"
import c_css from "./Messages.module.css"

const Messages = (props) => {

    let messagesMap = props.messages.map(el => {
        return <Message name={el.name} time={el.time} text={el.text} />
    })

    return (<main className={c_css.messages}>
        <MessagesNav dialogies={props.dialogies} />
        <div className={c_css.messages__content}>
            {messagesMap}
        </div>
    </main>)
}

export default Messages;
