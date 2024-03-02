import React, { useEffect, useState } from "react"
import { connect } from "react-redux";
import { setUser, getStatus, putStatus, putDesc } from "../../../redux/profileReducer";
import UserInfo from "./UserInfo";
import { Navigate } from "react-router-dom";
import { statusSelector, userAuthSelector, userInfoSelector } from "../../../selectors/userSelectors";

let UserInfoContainer = (props) => {
    // debugger
    let [userAuthProfile, setUserAuthProfile] = useState(false);
    let [userIdSearch, setUserIdSearch] = useState(props.params.userId);
    // debugger;

    useEffect(() => {

        let isAuth = props.userAuth.isAuth;

        if (isAuth && !userIdSearch) {
            setUserIdSearch(props.userAuth.id);
            setUserAuthProfile(true);
        // } else if (!isAuth && !userIdSearch) {
        //     setUserIdSearch(2);
        } else if (isAuth && userIdSearch && props.userAuth.id === userIdSearch ) {
            setUserAuthProfile(true);
        }

        if (userIdSearch) {
            props.setUser(userIdSearch)
        }
        // isAuth && !userIdSearch
        // setUserIdSearch(props.userAuth.id);
        
    }, [userIdSearch])

    useEffect(() => {
        if (!props.params.userId && !props.userAuth.isAuth) {
            setUserIdSearch(undefined);
        }
    }, [props.userAuth.isAuth])

        

        // if (userIdSearch) {
        //     props.getStatus(userIdSearch)
        // }
        

    // useEffect(() => {

    //     setUserAuthProfile(false);

    //     let isAuth = props.userAuth.isAuth;
        
    //     if (isAuth && !userIdSearch) {
    //         setUserAuthProfile(true);
    //     } else if (isAuth && userIdSearch && props.userAuth.id == userIdSearch ) {
    //         setUserAuthProfile(true);
    //     }
    // }, [props.userAuth.isAuth])

    if (!(userIdSearch) && (!props.userAuth.isAuth)) {
        return <Navigate to="/login" />
    } else {
        return (
            <UserInfo userAuthProfile={userAuthProfile} 
                userAuth={props.userAuth}
                userInfo={props.userInfo}
                putDesc={props.putDesc} 
                status={props.status} 
                getStatus={props.getStatus} 
                putStatus={props.putStatus} />
        )    
    }
}

let mapStateToProps = (state) => ({
    userInfo: userInfoSelector(state),
    status: statusSelector(state),
    userAuth: userAuthSelector(state)
})

export default connect(mapStateToProps, {setUser, getStatus, putStatus, putDesc})(UserInfoContainer);