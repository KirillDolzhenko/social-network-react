import React from "react";
import c_css from "./PaginationButtonStart.module.css"


class PaginationButtonStart extends React.Component {
    
    render = () => {
        let textArrow = "<<"
        return <button className={c_css.button} onClick={() => {this.props.updatePage(1)}}>{textArrow}</button>
    }
}

export default PaginationButtonStart