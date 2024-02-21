import React from "react";
// import profileReducer, { changeStatus, createDispatchAddPost } from "../redux/profileReducer";
import AppContainer from "../App";
import { create } from "react-test-renderer";
import store from "../redux/reduxStore";
import Pagination from "../components/common/Pagination/Pagination";

describe ("Component Test", () => {
        test("Component Pagination Rendered Correct Amount Of Buttons", () => {
            let PaginationElement = create(<Pagination pageButtons={3} pageCurrent={1} pageNumber={6}/>);
            let PaginationBtns = PaginationElement.root.findAllByType("button")

            expect(PaginationBtns.length).toBe(3)
        });
    }
)