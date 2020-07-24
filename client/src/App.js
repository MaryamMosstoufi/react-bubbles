import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

import Login from './components/Login';
import BubblesPage from './components/BubblePage';
import AddColorForm from './components/AddColorForm';

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
                  <li><Link to='/bubbles'>Colors</Link></li>
                  <li><Link to='/addcolor'>Add Color</Link></li>
                </ul>
              </div>
            </nav>
          </div>  
        </div>
        <div className='uk-container uk-flex uk-flex-center'>
          <Switch>
            <PrivateRoute exact path='/colors' component={BubblesPage} />
            <PrivateRoute exact path='/addcolor' component={AddColorForm} />
            <Route path='/login' component={Login} />
            <Route component={Login} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
