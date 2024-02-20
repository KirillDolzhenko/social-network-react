import React from "react"
import c_css from "./Users.module.css"
import UserBlockContainer from "./UsersBlock/UserBlockContainer";
import PaginationContainer from "./Pagination/PaginationContainer";
import withRedirect from "../withRedirect";
import { compose } from "redux";

const Users = () => {
    return (<main className={c_css.users}>
        <UserBlockContainer />
        <PaginationContainer />
    </main>)
}

export default compose(
    withRedirect,
)(Users);
