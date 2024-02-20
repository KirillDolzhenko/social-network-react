import React from "react"
import c_css from "./PostMake.module.css"
import { Field, reduxForm } from 'redux-form'
import PostMakeInput from "./PostMakeInput"
import { maxLength, minLength, notNone } from "../../../../assets/validation"

const minLength10 = minLength(10); 
const maxLength50 = maxLength(50);

let PostMake = (props) => {
    return (<form onSubmit={props.handleSubmit} className={c_css.posts__form}>
        <Field name="text" component={PostMakeInput}
                            validate={[ minLength10, notNone, maxLength50 ]}
                            placeholder="Write something there..."
                            className={c_css.posts__input}
                            onChange={(e) => {props.inputInStateTextarea(e.target.value)}}></Field>
        <div className={c_css.posts__buttons}>
            <button className={c_css.posts__post} type="submit">Post</button>
            <button className={c_css.posts__clear}>Clear</button>
        </div>
    </form >)
}

PostMake = reduxForm({
    form: "post"
})(PostMake)

let PostMakeContainer = (props) => {
    let onSubmit = (data) => {
        props.inputInPost(data.text)
    }

    return <PostMake onSubmit={(data) => onSubmit(data)} {...props} />
}


export default PostMakeContainer;



//onClick={() => {props.inputInPost(ref.current.value)}}

// onClick={() => {props.inputInStateTextarea("")}}

