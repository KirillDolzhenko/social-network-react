import React from "react"
import c_css from "./Header.module.css"
import LoginButton from "./LoginButton/LoginButton"
import LoginUser from "./LoginUser/LoginUser"
import logo from "../../redux/images/logo.png";

const Header = (props) => {

        return (<header className={c_css.header}>
            <div className={c_css.header__logo}>
                <img src={logo} />
            </div>
            
            <h1 className={c_css.header__title}>OtherBook</h1>
            {
                function(){
                    if (props.isAuth) {
                        return <LoginUser {...props} />
                    } else {
                        return <LoginButton />
                    }
                }.call(this)
            }
        </header>)      
}

export default Header;

