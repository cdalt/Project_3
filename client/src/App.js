import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "react-bootstrap";
import Home from "./pages/home";
import About from "./pages/about";

import Login from './pages/login'
import Signup from './pages/signin'

function App() {
  return (
    <Router>
      <Navbar bg="primary" variant="dark">
        <Link className="navbar-brand" to={"/sign-in"}>
          Petfinder
        </Link>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link classname="nav-link" to={"/about"}>
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/sign-in"}>
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/sign-up"}>
                Sign up
              </Link>
              <li className="nav-item">
                <Link className="nav-link" to={"/home"}>
                  Home
                </Link>
              </li>
            </li>
          </ul>
        </div>
      </Navbar>
      {/*seperated  */}
      <div className="container">
        <div className="row">
          <div className="col-6"></div>
          <div className="col-6 pt-5">
            <div className="auth-wrapper">
              <div className="auth-inner">
                <Switch>
                  <Route exact path="/" component={Login} />
                  <Route path="/sign-in" component={Login} />
                  <Route path="/sign-up" component={SignUp} />
                  <Route path="/about" component={About} />
                  <Route path="/home" component={Home}></Route>
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

//lines 9 and 10
