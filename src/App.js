import './reset.css'
import './App.css'
import Aside from "./components/Aside/Aside.jsx"
import Header from "./components/Header/Header.jsx"
import Profile from "./components/Profile/Profile.jsx"
import Messages from "./components/Messages/Messages.jsx"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App(props) {
  return <BrowserRouter>
    <div className="app-wrapper">
      <Header />
      <Aside />
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/profile/*" element={<Profile posts={props.posts} />} />
        <Route path="/messages/*" element={<Messages messages={props.messages} dialogies={props.dialogies} />} />
      </Routes>
    </div>
  </BrowserRouter>;
}

export default App;
