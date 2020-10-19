import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/style.css";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Picture from "../assets/corgi.jpg"

function About() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Link className="navbar-brand" to={"/home"}>
          Find A Pet
    </Link>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to={"/home"}>
                Home
          </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/about"}>
                About
          </Link>
            </li>
          </ul>
        </div>
      </Navbar>

      <div className="big-div" style={{ padding: 15 }}>
        <div className="hero text-center">
          <h1 className="title">About us</h1>
        </div>
        <div className="container" style={{ marginTop: 30 }}>
          <div className="row">
            <div className="col col-md-12">
              <h1 className="title search">Hello there!</h1>
            </div>
          </div>
          <div className="row">
            <div className="col col-md-6">
              <p className="para">
                This was a colabertaive work desgined to help people find pets that they could
                love and be with forever, we designed this with people and pets in mind.
                We hope you like our page, this was made by: Dalton Natale, Alfredo Pedroza Hernandez,
                Blake Ehler, and Jeremy Greenfield. We hope you like our site and find a new pet.

                <div className="col-6"><img src={Picture}/></div>
            </p>
            </div>
            <div className="col col-md-6">
              <h1 className="title"> Links to our Githubs can be found here</h1>
              <div style={{ padding: 10 }}>
                <a
                  class="btn btn-primary"
                  href="https://github.com/cdalt"
                  role="button"
                >
                  Dalton Natale's Github
               </a>
              </div>
              <div style={{ padding: 10 }}>

                <a
                  class="btn btn-danger"
                  href="https://github.com/Blakeehhler"
                  role="button"
                >
                  Blake Ehler's Github
            </a>
              </div>
              <div style={{ padding: 10 }}>
                <a
                  class="btn btn-warning"
                  href="https://github.com/aphernandez13"
                  role="button"
                >
                  Alfredo Pedroza Hernandez's Github
            </a>
              </div>
              <div style={{ padding: 10 }}>
                <a
                  class="btn btn-success fredo-button"
                  href="https://github.com/Jermdude7"
                  role="button"
                >
                  Jeremy Greenfield's Github
            </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
