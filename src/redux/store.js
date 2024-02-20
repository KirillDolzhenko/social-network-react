
import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                { username: "OtherUser", text: "My post", like: 1 },
                { username: "OtherMan", text: "popa", like: 12 },
                { username: "FRED", text: "My post #1", like: 32 },
                { username: "Fed", text: "My post here", like: 609 },
                { username: "he", text: "hehe", like: 59 },
            ],
            postInput: ""
        },
        messagesPage: {
            messages: [
                { name: "Kolya", time: "19:00", text: "Hi", me: false, img: img1 },
                { name: "Kolya", time: "19:01", text: "Hiii", me: false, img: img1 },
                { name: "Kolya", time: "19:02", text: "HELLOO", me: false, img: img1 },
                { name: "Kolya", time: "19:03", text: "Hello, Friend", me: false, img: img1 },
                { name: "Kirill .", time: "19:50", text: "Azazaa", me: true, img: img4 },
                { name: "Kolya", time: "19:51", text: "(((", me: false, img: img1 },
                { name: "Kolya", time: "19:59", text: "bye.", me: false, img: img1 },
                { name: "Kirill .", time: "20:25", text: "hehe)0))", me: true, img: img4 },
            ],
            dialogies: [
                { name: "Kirill .", linkNum: 1 },
                { name: "Gorno", linkNum: 2 },
                { name: "Ulya", linkNum: 3 },
                { name: "Nameless", linkNum: 4 },
                { name: "Gomunkul", linkNum: 5 },
                { name: "Hoh", linkNum: 6 },
                { name: "Santa Clause", linkNum: 7 },
                { name: "Kolya", linkNum: 8 },
            ],
            messageInput: ""
        },
        aside: [
            { name: "Kolya", img: img1, href: "https://youtube.com" },
            { name: "Nikita", img: img2, href: "https://youtube.com" },
            { name: "Nameless", img: img3, href: "https://youtube.com" },
            { name: "Kolya", img: img1, href: "https://youtube.com" },
            { name: "Nikita", img: img2, href: "https://youtube.com" },
            { name: "Nameless", img: img3, href: "https://youtube.com" },
            { name: "Kolya", img: img1, href: "https://youtube.com" },
            { name: "Nikita", img: img2, href: "https://youtube.com" },
            { name: "Nameless", img: img3, href: "https://youtube.com" },
        ]
    },
    getState() {
        return this._state
    },
    setReactDomRender(observer) {
        this._renderReactDom = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
        this._renderReactDom(store);
    }
}

export default store