import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "react-bootstrap";
import Home from "./pages/home";
<<<<<<< HEAD
=======
import About from "./pages/about";
>>>>>>> cfc73d1a1ad6be5a5a4c3aee2baabadf4bd94f27

import Login from "./components/Login/login.component";
import SignUp from "./components/SignUp/signup.component";

function App() {
<<<<<<< HEAD
<<<<<<< HEAD
  return (
    <Router>
=======
  return (<Router>
>>>>>>> 462f825d1159289b39824c1728753fda268dea28
=======
  return (
    <Router>
>>>>>>> cfc73d1a1ad6be5a5a4c3aee2baabadf4bd94f27
      <Navbar bg="primary" variant="dark">
        <Link className="navbar-brand" to={"/sign-in"}>
          Petfinder
        </Link>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
<<<<<<< HEAD
=======
              <Link classname="nav-link" to={"/about"}>
                About Us
              </Link>
            </li>
            <li className="nav-item">
>>>>>>> cfc73d1a1ad6be5a5a4c3aee2baabadf4bd94f27
              <Link className="nav-link" to={"/sign-in"}>
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/sign-up"}>
                Sign up
              </Link>
<<<<<<< HEAD
=======
              <li className="nav-item">
                <Link className="nav-link" to={"/home"}>
                  Home
                </Link>
              </li>
>>>>>>> cfc73d1a1ad6be5a5a4c3aee2baabadf4bd94f27
            </li>
          </ul>
        </div>
      </Navbar>
<<<<<<< HEAD

=======
      {/*seperated  */}
>>>>>>> cfc73d1a1ad6be5a5a4c3aee2baabadf4bd94f27
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
<<<<<<< HEAD
                  <Route path="/home" component={Home} />
=======
                  <Route path="/about" component={About} />
                  <Route path="/home" component={Home}></Route>
>>>>>>> cfc73d1a1ad6be5a5a4c3aee2baabadf4bd94f27
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
