import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  { username: "OtherUser", text: "My post", like: 1 },
  { username: "OtherMan", text: "popa", like: 12 },
  { username: "FRED", text: "My post #1", like: 32 },
  { username: "Fed", text: "My post here", like: 609 },
  { username: "he", text: "hehe", like: 59 },
];

let messages = [
  { name: "Kirill .", time: "19:00", text: "Hi" },
  { name: "Kirill .", time: "19:01", text: "Hi" },
  { name: "Kirill .", time: "19:02", text: "Hi" },
  { name: "Kirill .", time: "19:03", text: "Hello, Friend" },
  { name: "Kirill .", time: "19:50", text: "Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem " },
  { name: "Kirill .", time: "19:51", text: "Hi" },
  { name: "Kirill .", time: "19:59", text: "Hi" },
];

let dialogies = [
  { name: "Kirill .", linkNum: 1 },
  { name: "Igor", linkNum: 2 },
  { name: "Ilya", linkNum: 3 },
  { name: "Nameless", linkNum: 4 },
  { name: "Gomunkul", linkNum: 5 },
  { name: "Dasha", linkNum: 6 },
  { name: "Yaroslav Pater", linkNum: 7 },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={posts} dialogies={dialogies} messages={messages} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
