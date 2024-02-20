import React from "react"
import c_css from "./SendMessage.module.css"
import { Field, reduxForm } from 'redux-form'
import SendMessageInput from "./SendMessageInput"
import { maxLength, notNone } from "../../../assets/validation";

let maxLength200 = maxLength(200);

let SendMessage = (props) => {

    return (<form className={c_css.message__form} onSubmit={props.handleSubmit}>
        <Field component={SendMessageInput} validate={[ maxLength200, notNone ]} name="text" placeholder="Write something smart" onChange={(e) => props.onChangeChangeStateMessage(e.target.value)}></Field>
        <div className={c_css.message__buttons}>
            <button className={c_css.message__post} type="submit">Send</button>
            <button className={c_css.message__clear} onClick={() => props.onChangeChangeStateMessage("")}>Clear</button>
        </div>
    </form>)
}

SendMessage = reduxForm({
    form: "message"
})(SendMessage)

let SendMessageContainer = (props) => {

    let onSubmit = (text) => {
        console.log(text);    
        props.onClickAddMessage(text); 
    }

    return <SendMessage onSubmit={(data) => onSubmit(data.text)}  {...props} />
}

export default SendMessageContainer;