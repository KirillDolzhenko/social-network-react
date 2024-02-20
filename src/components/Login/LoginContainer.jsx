import React from "react";
import c_css from "./Login.module.css";
import { connect } from "react-redux";
import { logIning } from "../../redux/authReducer";
import { Navigate } from "react-router-dom"
import Login from "./Login";

let LoginContainer = (props) => {

    let submitFunc = (data) => {
        props.logIning(data)
    }

    if (props.isAuth) {
        return <Navigate to="/profile"></Navigate>
    } else {
        return <div>
                    <h1 className={c_css.title}>Log In</h1>
                    <Login onSubmit={(data) => {submitFunc(data)}} />
                </div>
    }

}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

LoginContainer = connect(mapStateToProps, { logIning })(LoginContainer)

export default LoginContainer