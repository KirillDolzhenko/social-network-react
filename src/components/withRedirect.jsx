import React from "react"
import { connect } from "react-redux"
import { Navigate } from "react-router-dom"

function withRedirect (Component) {

    let mapStateToProps = (state) => {
        return {
            isAuth: state.auth.isAuth
        }
    }

    class Container extends React.Component {
        render = () => {
            if (this.props.isAuth) {
                return (<Component {...this.props}/>)
            } else {
                return <Navigate to="/login"/>
            }
        }
    }
    
    return connect(mapStateToProps)(Container);
}

export default withRedirect;