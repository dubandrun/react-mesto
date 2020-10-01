import React from 'react';

import { connect, Provider } from 'react-redux';
import store from './redux/redux-store'

import './App.css'

import Header from './components/Header/Header';
import ProfileContainer from './components/Profile/ProfileContainer';

function App() {
  return (
    <div className="root">
      <Provider store={store}>
        <Header />
        <ProfileContainer />
        {/* <CardsContainer /> */}
      </Provider>
    </div>
  );
}

export default App;
