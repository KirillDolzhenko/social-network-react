import React from "react"
import UserInfoContainer from "./UserInfoContainer";
import { Navigate, useParams } from "react-router-dom"

const UserInfoHook = (props) => {

    let params = useParams();

    return (
        <UserInfoContainer params={params}/>
    )
    
}

export default UserInfoHook;
