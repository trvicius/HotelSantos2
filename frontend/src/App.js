import React from 'react';
import './App.css';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import SearchPage from './SearchPage';
import LoginPage from './LoginPage';
import Signup from './signup';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute"


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


          {/* <Route path="/search" component={SearchPage} /> */}
          <ProtectedRoute path="/search" component={SearchPage} />

          <Route exact path="/">
              <LoginPage />
          </Route>

          <Route path="/home">
            <Home />
          </Route>

        </Switch>
        
        <Footer />
        
      </ Router>
    </div>
  );
}

export default App;