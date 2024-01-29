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
      <Aside data={props.store.getState().aside} />
      <Routes>
        <Route path="/" element={<Profile store={props.store} />} />
        <Route path="/profile/*" element={<Profile store={props.store} />} />
        <Route path="/messages/*" element={<Messages data={props.store.getState().messagesPage} />} />
      </Routes>
    </div>
  </BrowserRouter>;
}

export default App;
