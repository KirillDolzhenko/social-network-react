import React from "react"
import { connect } from "react-redux";
import { setUser, getStatus, putStatus } from "../../../redux/profileReducer";
import UserInfo from "./UserInfo";
import { Navigate } from "react-router-dom";
import { statusSelector, userAuthSelector, userInfoSelector } from "../../../selectors/userSelectors";

class UserInfoContainer extends React.Component {
    componentDidMount = () => { 

        let isAuth = this.props.userAuth.isAuth;
        let userIdSearch = this.props.params.userId;
        
        if (isAuth && !userIdSearch) {
            userIdSearch = 2;
        }
        
        this.props.setUser(userIdSearch)

        if (userIdSearch) {
            this.props.getStatus(userIdSearch)
        }
    }

    render() {
        if (!(this.props.userAuth.isAuth) && !(this.props.params.userId)) {
            return <Navigate to="/login" />
        } else {
            return (
                <UserInfo userInfo={this.props.userInfo} status={this.props.status} getStatus={this.props.getStatus} putStatus={this.props.putStatus} />
            )    
        }
    }
}

let mapStateToProps = (state) => ({
    userInfo: userInfoSelector(state),
    status: statusSelector(state),
    userAuth: userAuthSelector(state)
})

export default connect(mapStateToProps, {setUser, getStatus, putStatus})(UserInfoContainer);
