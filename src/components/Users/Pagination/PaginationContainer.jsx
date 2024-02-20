import React from "react";
import { connect } from "react-redux"
import { loadUsers, setPageCurrent, setPageNumber, toggleLoading, getUsers } from "../../../redux/usersReducer";
import { pageNumberSelector, pageElementsSelector, pageCurrentSelector, pageButtonsSelector, isLoadingSelector } from "../../../selectors/userSelectors.js";
import Pagination from "../../common/Pagination/Pagination.jsx";

class PaginationContainer extends React.Component {
    componentDidMount = () =>  {
        let {pageCurrent, pageElements} = this.props;
        this.props.getUsers(pageCurrent, pageElements)
    }
    
    updatePage = (pageCurrent) =>  {
        let { pageElements } = this.props
        this.props.getUsers(pageCurrent, pageElements)
    }

    render = () => {

        if (!this.props.isLoading) {
            return <div>
                    <Pagination
                            pageButtons={this.props.pageButtons}
                            pageNumber={this.props.pageNumber}
                            pageCurrent={this.props.pageCurrent}
                            setPageCurrent={this.props.setPageCurrent}
                            loadUsers={this.props.loadUsers}
                            updatePage={this.updatePage}/>
                </div>
        }
    }
}

const mapStateToProps = (state) => {
    return {
        pageNumber: pageNumberSelector(state),
        pageElements: pageElementsSelector(state),
        pageCurrent: pageCurrentSelector(state),
        pageButtons: pageButtonsSelector(state),
        isLoading: isLoadingSelector(state)
    }
};

export default connect(mapStateToProps, {loadUsers, setPageNumber, setPageCurrent, toggleLoading, getUsers})(PaginationContainer)