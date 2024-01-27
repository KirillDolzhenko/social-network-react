import logo from './logo.svg'
import './App.css'
import Aside from "./comp/Aside.jsx"
import Header from "./comp/Header.jsx"
import Profile from "./comp/Profile.jsx"

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Aside />
      <Profile />
    </div>
  );
}

export default App;
