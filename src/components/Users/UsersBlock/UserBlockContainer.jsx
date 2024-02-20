import React from "react"
import UserBlock from "./UserBlock"
import { connect } from "react-redux"
import {changeFollowStatus, followShift, unfollowShift} from "./../../../redux/usersReducer"

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        isLoading: state.usersPage.isLoading,
        isFollowing: state.usersPage.isFollowing,
    }
}

export default connect(mapStateToProps, {changeFollowStatus, followShift, unfollowShift})(UserBlock);
