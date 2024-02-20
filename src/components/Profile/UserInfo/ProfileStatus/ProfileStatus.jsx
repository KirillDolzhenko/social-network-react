import React from "react"
import c_css from "./ProfileStatus.module.css"

class ProfileStatus extends React.Component {
    state = {
        isEditing: false,
        status: this.props.status
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status != this.props.status) {
            this.setState( {
                status: this.props.status
            })}
    }

    toggleStatus = () => {
        if (this.state.isEditing) {
            this.props.putStatus(this.state.status)    
            this.setState( {
                isEditing: false
            })
        } else {
            this.setState( {
                isEditing: true
            })    
        }
    } 

    changeLocalStatus = (e) => {
        console.log(e.target.value)
        this.setState( {
            status: e.target.value
        })    
    }

    render() {
        if (!this.state.isEditing) {
            return (
               <p className={c_css.userInfo__text}
                    onClick={ this.toggleStatus } >
                        {this.props.status ? this.props.status : "Описание не задано"}</p>
            )
        } else {
            return (<input className={c_css.input}
                            onChange={(e) => this.changeLocalStatus(e)}
                            autoFocus="true"
                            onBlur={ this.toggleStatus }
                            value={this.state.status ? this.state.status : ""} />)
        }}
}

export default ProfileStatus;
