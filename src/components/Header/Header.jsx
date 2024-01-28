import React from "react"
import c_css from "./Header.module.css"

const Header = () => {
    return (<header className={c_css.header}>
        <div className={c_css.header__logo}>
            <img src="/images/ow/logo.png" />
        </div>
        <h1 className={c_css.header__title}>OtherBook</h1>
    </header>)
}

export default Header;

