import React from "react";
import c_css from "./PaginationButtonEnd.module.css"


class PaginationButtonEnd extends React.Component {

    render = () => {
        let textArrow = ">>"
        return <button className={c_css.button} onClick={() => {this.props.updatePage(this.props.pageNumber)}}>{textArrow}</button>
    }
}

export default PaginationButtonEnd