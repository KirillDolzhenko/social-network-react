import React from "react"
import c_css from "./Loading.module.css"
import imgLoading from "../../../../redux/images/loading.gif"

const Loading = () => {
    return (<img className={c_css.loadingImage} src={imgLoading} />)
}

export default Loading;
