import React from "react"
import c_css from "./LoginButton.module.css"
import { connect } from "react-redux"
import Login from "../../Login/Login"
import { NavLink } from "react-router-dom"

const LoginButton = () => {
              
    return (<NavLink to="/login" className={c_css.button} >Login</NavLink>)
}

export default LoginButton;

