import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar} from 'react-bootstrap'

import Login from "./components/Login/login.component";
import SignUp from "./components/SignUp/signup.component";

function App() {
  return (<Router>
    
      <Navbar bg="primary" variant="dark">
          <Link className="navbar-brand" to={"/sign-in"}>Petfinder</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
            </ul>
          </div>
      </Navbar>


      <div className="container">
        <div className="row">
          <div className="col-6"></div>
          <div className="col-6 pt-5">
            <div className="auth-wrapper">
              <div className="auth-inner">
                <Switch>
                  <Route exact path='/' component={Login} />
                  <Route path="/sign-in" component={Login} />
                  <Route path="/sign-up" component={SignUp} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );

}

export default App;
