import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import NavBar from './components/navbar/navbar.component';
import HomePage from './pages/homepage/homepage.component';
import AboutPage from './pages/aboutpage/aboutpage.component';
import ServicePage from './pages/servicepage/servicepage.component';
import ContactUsPage from './pages/contactuspage/contactuspage.component';
import SignPage from './pages/signpage/signpage.component';

import './App.scss';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/about' component={AboutPage} />
        <Route exact path='/services' component={ServicePage} />
        <Route exact path='/contactus' component={ContactUsPage} />
        <Route exact path='/sign' component={SignPage} />
      </Switch>
    </div>
  );
}

export default App;
