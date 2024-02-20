import React from "react";
import profileReducer, { changeStatus, createDispatchAddPost } from "../redux/profileReducer";


let state = {
    userInfo: null,
    posts: [
        { username: "OtherUser", text: "My post", like: 1 },
        { username: "OtherMan", text: "popa", like: 12 },
        { username: "FRED", text: "My post #1", like: 32 },
        { username: "Fed", text: "My post here", like: 609 },
        { username: "he", text: "hehe", like: 59 },
    ],
    postInput: "",
    status: ""
}


it("Status changed", () => {
    
    profileReducer(state, createDispatchAddPost("bigg"))
    profileReducer(state, createDispatchAddPost("bigg"))
    profileReducer(state, createDispatchAddPost("bigg"))
    let newAction = profileReducer(state, changeStatus("ffff"))

    // expect(state.posts.length).toBe(6)
    expect(newAction.status).toBe("ffff")
})


it("Post added", () => {

    let newAction = profileReducer(state, createDispatchAddPost("bigg"))

    expect(newAction.posts.length).toBe(6)

})