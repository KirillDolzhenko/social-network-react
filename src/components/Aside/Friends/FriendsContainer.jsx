import React from "react"
import c_css from "./Friends.module.css"
import Friends from "./Friends.jsx"
import StateContext from "../../../stateContext"


import { connect } from "react-redux"

const mapStateToProps = (state) => {
    return {
        friends: state.aside
    }
}

const FriendsContainer = connect(mapStateToProps)(Friends)

export default FriendsContainer;
