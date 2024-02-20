import React from "react"
import c_css from "./Profile.module.css"
import Banner from "./Banner/Banner.jsx"
import UserInfoHook from "./UserInfo/UserInfoHook.jsx"
import MyPostsContainer from "./MyPosts/MyPostsContainer"
import StateContext from "./../../stateContext";

const Profile = () => {
    return (<main className={c_css.profile}>
        <Banner />
        <UserInfoHook />
        <MyPostsContainer />
    </main>)
}

export default Profile;
