import './reset.css'
import './App.css'
import Aside from "./components/Aside/Aside.jsx"
import HeaderContainer from "./components/Header/HeaderContainer.jsx"
import Profile from "./components/Profile/Profile.jsx"
import MessagesContainer from "./components/Messages/MessagesContainer"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Users from './components/Users/Users'
import LoginContainer from './components/Login/LoginContainer'
import { Provider, connect } from 'react-redux'
import Loading from './components/Users/UsersBlock/Loading/Loading'
import { setInitializedAuto } from "./redux/initializedReducer"
import React, { useEffect } from 'react'

let App = (props) => {
  
  useEffect(() => {
    props.setInitializedAuto();
  }, [])

  if (props.isInitialized) {
    return <BrowserRouter>
            <div className="app-wrapper">
              <HeaderContainer />
              <Aside />
              <Routes>
                <Route path="/" element={<Profile />} />
                <Route path="/profile/:userId?" element={<Profile />} />
                <Route path="/messages/*" element={<MessagesContainer />} />
                <Route path="/users/*" element={<Users />} />
                <Route path="/login/*" element={<LoginContainer />} />
              </Routes>
            </div>
          </BrowserRouter>;
  } else {
    return <Loading />
  }
}

let mapStateToProps = (state) => {
  return {
    isInitialized: state.initialized.isInitialized
  }
};

App = connect(mapStateToProps, { setInitializedAuto })(App);

let AppContainer = (props) => {
  return <Provider store={props.store}>{<App />}</Provider>
}

export default AppContainer;