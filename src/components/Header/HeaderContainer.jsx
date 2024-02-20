import React from "react"
import Header from "./Header"
import { autoAuth, logOut } from "../../redux/authReducer"
import { connect } from "react-redux"

const HeaderContainer = (props) => {

    return (<Header {...props}/>)
    
}

let mapStateToProps = (state) => {
    return {
        img: state.auth.img,
        email: state.auth.email,
        login: state.auth.login,
        id: state.auth.id,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, { autoAuth , logOut })(HeaderContainer);

