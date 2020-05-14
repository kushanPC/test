import React from 'react';
import './App.css';
import Header from './modules/header/Header';
import Cover from './modules/cover/Cover';
import About from './modules/about/About';
import UsersContainer from './modules/users/UsersContainer';
import RegisterContainer from './modules/register/RegisterContainer';
import FailContainer from './components/notifications/fail/FailContainer';
import SuccessContainer from './components/notifications/success/SuccessContainer';

function App() {
  return (
    <div className="app">
      <Header />
      <Cover />
      <About />
      <UsersContainer />
      <RegisterContainer />
      <SuccessContainer />
      <FailContainer />
    </div>
  );
}

export default App;
