import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppContainer from './App';
import store from './redux/reduxStore';

const root = ReactDOM.createRoot(document.getElementById('root'));

const renderReactDom = (store) => {
  root.render(
    <AppContainer store={store}/>
  );
}

store.subscribe(() => { 
  renderReactDom(store)
});

renderReactDom(store)
