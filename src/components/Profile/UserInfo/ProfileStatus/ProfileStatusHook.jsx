import React, { useEffect, useState } from "react"
import c_css from "./ProfileStatus.module.css"

const ProfileStatusHook = (props) => {

    let [ stateStatus, stateStatusChange ] = useState(props.status);
    let [ stateIsEditing, stateIsEditingChange ] = useState(false);

    const stateIsEditingSwitch = () => {
        if (stateIsEditing) {
            props.putStatus(stateStatus)    
            stateIsEditingChange(false)
        } else {  
            stateIsEditingChange(true)
        }
    }

    const changeLocalStatus = (e) => {
        stateStatusChange(e.target.value)    
    }

    useEffect(() => {
        stateStatusChange(props.status)
    }, [props.status])

    if (!stateIsEditing) {
        if (props.userAuthProfile) {
            return (
                <p className={ c_css.userInfo__text }
                    onClick={ stateIsEditingSwitch } >
                         { props.status ? props.status : "Статус не задан" }
                </p>
             )
        } else {
            return (
                <p className={ c_css.userInfo__text }>
                         { props.status ? props.status : "Статус не задан" }
                </p>
             )

        }
            
    } else {
        return (<input className={ c_css.input }
                        onChange={changeLocalStatus}
                        onBlur={ stateIsEditingSwitch }
                        autoFocus= {true}
                        value={ stateStatus ? stateStatus : "" } />
        )
    }
}

export default ProfileStatusHook;
