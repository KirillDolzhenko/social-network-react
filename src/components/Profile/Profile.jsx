import React from "react"
import c_css from "./Profile.module.css"
import Banner from "./Banner/Banner.jsx"
import UserInfo from "./UserInfo/UserInfo.jsx"
import MyPosts from "./MyPosts/MyPosts.jsx"

const Profile = (props) => {
    // debugger
    return (<main className={c_css.profile}>
        <Banner />
        <UserInfo />
        <MyPosts store={props.store} addPost={props.store.addPost.bind(props.store)} changeStateTextarea={props.store.changeStateTextarea.bind(props.store)} />
    </main>)
}

export default Profile;
