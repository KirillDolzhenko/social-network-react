import React, { useEffect, useState } from "react"
import c_css from "./ProfileStatus.module.css"
import { connect } from "react-redux"
import { setPicture } from "../../../../redux/profileReducer"

const ProfilePicture = (props) => {

    let onChangeCapture = (e) => {
        console.log(e.target.files[0])
        props.setPicture(e.target.files[0])
    }
    
    return ( <>
            { props.userAuthProfile && <input type="file" accept="image/*" onChangeCapture={(e) => onChangeCapture(e)} />}
        </>
    )
}



export default connect(undefined, { setPicture })(ProfilePicture);
 