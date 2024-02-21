import React from "react"
import c_css from "./Banner.module.css"
import banner from "../../../redux/images/background.jpg"

const Banner = () => {
    return (
        <div className={c_css.profile__banner}>
            <img src={banner} />
        </div>
    )
}

export default Banner;
