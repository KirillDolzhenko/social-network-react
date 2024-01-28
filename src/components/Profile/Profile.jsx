import React from "react"
import c_css from "./Profile.module.css"
import Banner from "./Banner/Banner.jsx"
import UserInfo from "./UserInfo/UserInfo.jsx"
import MyPosts from "./MyPosts/MyPosts.jsx"

const Profile = (props) => {

    return (<main className={c_css.profile}>
        <Banner />
        <UserInfo />
        <MyPosts posts={props.posts} />
    </main>)
}

export default Profile;
