import React from "react"
import Messages from "./Messages"
import { connect } from "react-redux"
import withRedirect from "../withRedirect"
import { compose } from "redux"

const mapStateToProps = (state) => {
    return {
        messages: state.messagesPage.messages,
        dialogies: state.messagesPage.dialogies
    }
}

export default compose(
    withRedirect,
    connect(mapStateToProps)
)(Messages);