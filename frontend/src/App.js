import React from 'react';
import './App.css';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import SearchPage from './SearchPage';
import LoginPage from './LoginPage';
import Signup from './signup';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (

    // BEM
    <div className="app">
      <Router>

        <Header />

        <Switch>

        <Route exact path="/signup">
              <Signup />
          </Route> 

          <Route exact path="/loginpage">
              <LoginPage />
          </Route>    

          <Route path="/search">
            <SearchPage />
          </Route>

          <Route path="/">
            <Home />
          </Route>

        </Switch>
        
        <Footer />
        
      </ Router>
    </div>
  );
}

export default App;