import React from 'react';

// import { connect } from 'react-redux';

import './App.css'

import Header from './components/Header/Header';
import ProfileContainer from './components/Profile/ProfileContainer';
import CardsContainer from './components/Cards/CardsContainer';
import ProfileDataReduxForm from './components/Profile/ProfileDataForm';

function App() {
  return (
    <div className="root">
        <Header />
        <ProfileContainer />
        <CardsContainer />
        <ProfileDataReduxForm />
    </div>
  );
}

export default App;
