import React from "react"
import c_css from "./PostMake.module.css"

const PostMake = (props) => {

    let ref = React.createRef();

    function inputInPost() {
        props.addPost(ref.current.value)
        ref.current.value = "";
    };

    function clearTextarea() {
        ref.current.value = "";
    };

    function inputInStateTextarea() {
        props.changeStateTextarea(ref.current.value)
    };

    return (<form className={c_css.posts__form} onSubmit={(e) => { e.preventDefault() }}>
        <textarea placeholder="Write something there..." ref={ref} className={c_css.posts__input} onChange={inputInStateTextarea}>{props.store.getState().profilePage.postInput}</textarea>
        <div className={c_css.posts__buttons}>
            <button className={c_css.posts__post} onClick={inputInPost} type="submit">Post</button>
            <button className={c_css.posts__clear} onClick={clearTextarea}>Clear</button>
        </div>
    </form >)
}

export default PostMake;
