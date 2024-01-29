import React from "react"
import Message from "./Message/Message.jsx"
import MessagesNav from "./MessagesNav/MessagesNav.jsx"
import SendMessage from "./SendMessage/SendMessage.jsx"
import c_css from "./Messages.module.css"

const Messages = (props) => {

    let messagesMap = props.data.messages.map(el => {
        return <Message name={el.name} time={el.time} text={el.text} me={el.me} img={el.img} />
    })

    return (<main className={c_css.messages}>
        <MessagesNav dialogies={props.data.dialogies} />
        <div className={c_css.messages__content}>
            {messagesMap}
            <SendMessage />
        </div>
    </main>)
}

export default Messages;
