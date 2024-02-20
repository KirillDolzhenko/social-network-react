import React from "react";
import c_css from "./PaginationButton.module.css"


class PaginationButton extends React.Component {
    
    render = () => {
        return <button className={`${this.props.pageCurrent == this.props.pageNumber ? c_css.active : ""} ${c_css.button}`}  onClick={() => {this.props.updatePage(Number(this.props.pageNumber))}}>{this.props.pageNumber}</button>
    }
}

export default PaginationButton