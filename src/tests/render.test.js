import React from "react";
// import profileReducer, { changeStatus, createDispatchAddPost } from "../redux/profileReducer";
import AppContainer from "../App";
import { create } from "react-test-renderer";
import store from "../redux/reduxStore";
import ProfileStatusHook from "../components/Profile/UserInfo/ProfileStatus/ProfileStatusHook";

describe ("Component Test", () => {
    test("Component Rendered", () => {
        let App = create(<ProfileStatusHook status="Fff"/>);
        let AppStatus = App.root

        expect(AppStatus).not.toBeNull()
    });
    test("Component Props", () => {
        let App = create(<ProfileStatusHook status="Fff"/>);
        let AppStatus = App.root

        expect(AppStatus.props.status).toBe("Fff")
    });
    test("Component Click Switch", () => {
        let App = create(<ProfileStatusHook status="Fff"/>);
        let AppP = App.root.findByType("p");

        AppP.props.onClick() 

        let AppInput = App.root.findByType("input"); 

        expect(AppInput.props.value).toBe("Fff")
    })
    test("Component Click Count", () => {
        let MockCallback = jest.fn();

        let App = create(<ProfileStatusHook status="Fff" putStatus={MockCallback}/>);
        let AppP = App.root.findByType("p");

        AppP.props.onClick() 

        let AppInput = App.root.findByType("input"); 

        AppInput.props.onBlur() 

        expect(MockCallback.mock.calls.length).toBe(1)
    })}
)