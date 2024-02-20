import img1 from "./images/kolya.jpg";
import img2 from "./images/nikita.jpg";
import img3 from "./images/nameless.jpg";
import img4 from "./images/kirill.jpg";

const CHANGE_STATE_MESSAGE = "CHANGE-STATE-MESSAGE";
const ADD_MESSAGE = "ADD-MESSAGE";

let stateDefault = {
    messages: [
        { id: 1, name: "Kolya", time: "19:00", text: "Hi", me: false, img: img1 },
        { id: 2, name: "Kolya", time: "19:01", text: "Hiii", me: false, img: img1 },
        { id: 3, name: "Kolya", time: "19:02", text: "HELLOO", me: false, img: img1 },
        { id: 4, name: "Kolya", time: "19:03", text: "Hello, Friend", me: false, img: img1 },
        { id: 5, name: "Kirill .", time: "19:50", text: "Azazaa", me: true, img: img4 },
        { id: 6, name: "Kolya", time: "19:51", text: "(((", me: false, img: img1 },
        { id: 7, name: "Kolya", time: "19:59", text: "bye.", me: false, img: img1 },
        { id: 8, name: "Kirill .", time: "20:25", text: "hehe)0))", me: true, img: img4 },
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
};

const messagesReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {
                    id: (state.messages.length + 1),
                    name: "Kirill .",
                    time: "20:25",
                    text: action.text,
                    me: true,
                    img: img4
            }],
                messageInput: ""
        }
        case CHANGE_STATE_MESSAGE:
            return {
                ...state,
                messageInput: action.text
            }
        default:
            return state;
    }
};

export default messagesReducer;

export let createDispatchChangeStateMessage = (text) => ({
    type: CHANGE_STATE_MESSAGE,
    text: text
})

export let createDispatchAddMessage = (text) => ({
    type: ADD_MESSAGE,
    text: text
})