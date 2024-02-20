import React from "react"
import SendMessage from "./SendMessage.jsx"
import { createDispatchAddMessage, createDispatchChangeStateMessage } from "./../../../redux/messagesReducer.js"
import StateContext from "../../../stateContext.jsx"
import { connect } from "react-redux"

const mapStateToProps = (state) => {
    return {
        messageInput: state.messagesPage.messageInput
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClickAddMessage: (text) => {
            dispatch(createDispatchAddMessage(text));
        },
        onChangeChangeStateMessage: (text) => {
            dispatch(createDispatchChangeStateMessage(text));
        }
    }
}

const SendMessageContainer = connect(mapStateToProps, mapDispatchToProps)(SendMessage)

// const SendMessageContainer = (props) => {

//     return (<StateContext.Consumer>
//         {store => {
//             function onClickAddMessage(text) {
//                 store.dispatch(createDispatchAddMessage(text));
//             };

//             function onChangeChangeStateMessage(text) {
//                 store.dispatch(createDispatchChangeStateMessage(text));
//             };

//             return <SendMessage 
//                 messageInput={store.getState().messagesPage.messageInput}
//                 onClickAddMessage={(text) => onClickAddMessage(text)}
//                 onChangeChangeStateMessage={((text) => onChangeChangeStateMessage(text))} />
//         }}
//     </StateContext.Consumer>)
// }

export default SendMessageContainer;
