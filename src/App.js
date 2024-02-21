import './reset.css'
import './App.css'
import Aside from "./components/Aside/Aside.jsx"
import HeaderContainer from "./components/Header/HeaderContainer.jsx"
import { HashRouter, Routes, Route } from 'react-router-dom'
import { Provider, connect } from 'react-redux'
import Loading from './components/Users/UsersBlock/Loading/Loading'
import { setInitializedAuto } from "./redux/initializedReducer"
import React, { useEffect } from 'react'
import withSuspense from './components/withSuspense'

let MessagesContainer = React.lazy(() => import("./components/Messages/MessagesContainer.jsx"));
let Profile = React.lazy(() => import("./components/Profile/Profile.jsx"));
let Users = React.lazy(() => import("./components/Users/Users.jsx"));
let LoginContainer = React.lazy(() => import("./components/Login/LoginContainer.jsx"));


let App = (props) => {
  
  useEffect(() => {
    props.setInitializedAuto();
  }, [])

  if (props.isInitialized) {
    return <HashRouter>
            <div className="app-wrapper">
              <HeaderContainer />
              <Aside />
              <Routes>
                <Route path="/" 
                      element={withSuspense(Profile)()}
                      />
                <Route path="/profile/:userId?" 
                      element={withSuspense(Profile)()}
                      />
                <Route path="/messages/*" 
                      element={withSuspense(MessagesContainer)()}
                      />
                <Route path="/users/*" 
                      element={withSuspense(Users)()}
                      />
                <Route path="/login/*"
                      element={withSuspense(LoginContainer)()}
                      />
              </Routes>
            </div>
          </HashRouter>;
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