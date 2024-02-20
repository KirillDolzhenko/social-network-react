import React from "react";
import c_css from "./Pagination.module.css"
import PaginationButton from "./PaginationButton/PaginationButton"
import PaginationButtonStart from "./PaginationButtonStart/PaginationButtonStart"
import PaginationButtonEnd from "./PaginationButtonEnd/PaginationButtonEnd"

const Pagination = (props) => {
    // debugger

    let pagginationButtons = [];

        let pagginationCenterPos = ((props.pageButtons % 2 == 0) ? ((props.pageButtons / 2) + 1) : Math.ceil(props.pageButtons / 2))
        let pagginationRightSideNumber = props.pageButtons - pagginationCenterPos;
        let pagginationLeftSideNumber = pagginationCenterPos - 1;

        let pagginationFirstButton = props.pageCurrent - pagginationLeftSideNumber;        

        for (let i = (pagginationCenterPos - pagginationLeftSideNumber); i <= (pagginationRightSideNumber + pagginationCenterPos); i++) {
            
            if (i == (pagginationCenterPos - pagginationLeftSideNumber) && pagginationFirstButton > 1) {
                pagginationButtons.push(<PaginationButtonStart key={i - 1} updatePage={props.updatePage} setPageCurrent={props.setPageCurrent} loadUsers={props.loadUsers}/>)
            } 

            if (pagginationFirstButton > 0 && pagginationFirstButton <= props.pageNumber) {
                pagginationButtons.push(<PaginationButton key={i} updatePage={props.updatePage} pageNumber={pagginationFirstButton} pageCurrent={props.pageCurrent} setPageCurrent={props.setPageCurrent} loadUsers={props.loadUsers}/>)
                
                if (i == (pagginationRightSideNumber + pagginationCenterPos) && pagginationFirstButton < (props.pageNumber)) {
                    pagginationButtons.push(<PaginationButtonEnd key={i + 1} updatePage={props.updatePage} pageNumber={props.pageNumber} setPageCurrent={props.setPageCurrent} loadUsers={props.loadUsers}/>)
                }
            }

            pagginationFirstButton++;
        }

        return <div>
            { pagginationButtons }
        </div>
}

export default Pagination