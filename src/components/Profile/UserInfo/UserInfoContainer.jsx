import React from "react"
import { connect } from "react-redux";
import { setUser, getStatus, putStatus } from "../../../redux/profileReducer";
import UserInfo from "./UserInfo";
import { Navigate } from "react-router-dom";
import { statusSelector, userAuthSelector, userInfoSelector } from "../../../selectors/userSelectors";

class UserInfoContainer extends React.Component {
    constructor(props) {
        super(props);
        this.userIdSearch = this.props.params.userId;
    }

    componentWillMount = () => { 

        let isAuth = this.props.userAuth.isAuth;
        
        if (isAuth && !this.userIdSearch ) {
            this.userIdSearch  = this.props.userAuth.id;
        } else if (!isAuth && !this.userIdSearch ) {
            this.userIdSearch  = 2;
        }
        
        this.props.setUser(this.userIdSearch )

        if (this.userIdSearch ) {
            this.props.getStatus(this.userIdSearch )
        }
    }

    render() {
        if (!(this.userIdSearch)) {
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
