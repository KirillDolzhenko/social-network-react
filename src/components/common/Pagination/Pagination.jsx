import React from "react";
import c_css from "./Pagination.module.css"
import PaginationButton from "./PaginationButton/PaginationButton"
import PaginationButtonStart from "./PaginationButtonStart/PaginationButtonStart"
import PaginationButtonEnd from "./PaginationButtonEnd/PaginationButtonEnd"

const Pagination = ({pageButtons, pageCurrent, pageNumber, updatePage, setPageCurrent, loadUsers}) => {
    // debugger

    let pagginationButtons = [];

        let pagginationCenterPos = ((pageButtons % 2 == 0) ? ((pageButtons / 2) + 1) : Math.ceil(pageButtons / 2))
        let pagginationRightSideNumber = pageButtons - pagginationCenterPos;
        let pagginationLeftSideNumber = pagginationCenterPos - 1;

        let pagginationFirstButton = pageCurrent - pagginationLeftSideNumber;        

        for (let i = (pagginationCenterPos - pagginationLeftSideNumber); i <= (pagginationRightSideNumber + pagginationCenterPos); i++) {
            
            if (i == (pagginationCenterPos - pagginationLeftSideNumber) && pagginationFirstButton > 1) {
                pagginationButtons.push(<PaginationButtonStart key={i - 1} updatePage={updatePage} setPageCurrent={setPageCurrent} loadUsers={loadUsers}/>)
            } 

            if (pagginationFirstButton > 0 && pagginationFirstButton <= pageNumber) {
                pagginationButtons.push(<PaginationButton key={i} updatePage={updatePage} pageNumber={pagginationFirstButton} pageCurrent={pageCurrent} setPageCurrent={setPageCurrent} loadUsers={loadUsers}/>)
                
                if (i == (pagginationRightSideNumber + pagginationCenterPos) && pagginationFirstButton < (pageNumber)) {
                    pagginationButtons.push(<PaginationButtonEnd key={i + 1} updatePage={updatePage} pageNumber={pageNumber} setPageCurrent={setPageCurrent} loadUsers={loadUsers}/>)
                }
            }

            pagginationFirstButton++;
        }

        return <div>
            { pagginationButtons }
        </div>
}

export default Pagination