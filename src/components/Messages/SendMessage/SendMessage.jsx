import React from "react"
import c_css from "./SendMessage.module.css"

const SendMessage = (props) => {

    let ref = React.createRef();

    function inputInAlert() {
        console.log(ref);
    };

    function clearTextarea() {
        ref.current.value = "";
    };


    return (<form className={c_css.message__form} onSubmit={(e) => { e.preventDefault() }}>
        <textarea ref={ref} className={c_css.message__input}></textarea>
        <div className={c_css.message__buttons}>
            <button className={c_css.message__post} onClick={inputInAlert} type="submit">Send</button>
            <button className={c_css.message__clear} onClick={clearTextarea}>Clear</button>
        </div>
    </form>)
}

export default SendMessage;
