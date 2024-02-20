import img1 from "./images/kolya.jpg";
import img2 from "./images/nikita.jpg";
import img3 from "./images/nameless.jpg";
import img4 from "./images/kirill.jpg";

let stateDefault = [
    { name: "Kolya", img: img1, href: "https://youtube.com", id: 1},
    { name: "Nikita", img: img2, href: "https://youtube.com", id: 2},
    { name: "Nameless", img: img3, href: "https://youtube.com", id: 3},
    { name: "Kolya", img: img1, href: "https://youtube.com", id: 4},
    { name: "Nikita", img: img2, href: "https://youtube.com", id: 5},
    { name: "Nameless", img: img3, href: "https://youtube.com", id: 6},
    { name: "Kolya", img: img1, href: "https://youtube.com", id: 7},
    { name: "Nikita", img: img2, href: "https://youtube.com", id: 8},
    { name: "Nameless", img: img3, href: "https://youtube.com", id: 9},
];

const asideReducer = (state = stateDefault, action) => {
    return state;
};

export default asideReducer;