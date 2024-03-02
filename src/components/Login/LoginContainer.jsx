import React from "react";
import c_css from "./Login.module.css";
import { connect } from "react-redux";
import { logIning } from "../../redux/authReducer";
import { Navigate } from "react-router-dom"
import Login from "./Login";

let LoginContainer = (props) => {

    let submitFunc = (data) => {
        props.logIning(data, props.auth.captchaTries)
    }

    if (props.auth.isAuth) {
        return <Navigate to="/profile"></Navigate>
    } else {
        return <div>
                    <h1 className={c_css.title}>Log In</h1>
                    <Login auth={props.auth} onSubmit={(data) => {submitFunc(data)}} />
                </div>
    }

}

let mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

LoginContainer = connect(mapStateToProps, { logIning })(LoginContainer)

export default LoginContainer