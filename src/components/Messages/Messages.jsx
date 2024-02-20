import React from "react"
import Message from "./Message/Message.jsx"
import MessagesNav from "./MessagesNav/MessagesNav.jsx"
import SendMessageContainer from "./SendMessage/SendMessageContainer.jsx"
import c_css from "./Messages.module.css"
import { Navigate } from "react-router-dom"

const Messages = (props) => {

    let messagesMap = props.messages.map(el => {
        return <Message name={el.name} key={el.id} time={el.time} text={el.text} me={el.me} img={el.img} />
    })

    return (<main className={c_css.messages}>
        <MessagesNav dialogies={props.dialogies} />
        <div className={c_css.messages__content}>
            {messagesMap}
            <SendMessageContainer />
        </div>
    </main>)
}

export default Messages;
