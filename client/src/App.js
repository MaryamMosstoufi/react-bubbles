import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Login from "./components/Login";
//import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
        <div>
          <div className='uk-margin-bottom'>
            <nav className="uk-navbar-container" data-uk-navbar>
              <div className="uk-navbar-center">
                <ul className="uk-navbar-nav">
                  <li><Link to='/login'>Login</Link></li>
                  <li><Link to='/bubbles'>Bubbles</Link></li>
                  <li><Link to='/addcolor'>Add Color</Link></li>
                </ul>
              </div>
            </nav>
          </div>  
        </div>
        <div className='uk-container uk-flex uk-flex-center'>
          <Route exact path="/" component={Login} />
        </div>
      </div>
    </Router>
  );
}

export default App;
