import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import SignUp from "./components/SignUp/signup.component";

function signin() {
  return (
      <div>
      <Navbar bg="primary" variant="dark">
        <Link className="navbar-brand" to={"/sign-in"}>
          Petfinder
        </Link>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to={"/sign-in"}>
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/sign-up"}>
                Sign up
              </Link>
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
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
}
export default signin;
