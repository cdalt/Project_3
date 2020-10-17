import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/style.css"
function about() {
  return (
    <div className="big-div">
      <div
        className="hero text-center"
      >
        <h1>About us</h1>
  
      <div className="container" style={{ marginTop: 30 }}>
        <div className="row">
          <div className="col col-md-12">
            <h1>Hey There!</h1>
          </div>
        </div>
        <div className="row">
          <div className="col col-md-6">
            <p>
              We hope you like our page, this was made by: Dalton, Alfredo,
              Blake, and Jeremy.
            </p>
          </div>
          <div className="col col-md-6">
          <h1> Links to our git hubs can be found here</h1>
          <a class="btn btn-primary" href="https://github.com/cdalt" role="button">Dalton's Github</a>
          <a class="btn btn-secondary" href="https://github.com/Blakeehhler" role="button">Blake's Github</a>
          <a class="btn btn-primary" href="https://github.com/aphernandez13" role="button">Alfreod's Github</a>
          <a class="btn btn-secondary" href="https://github.com/Jermdude7" role="button">Jeremy's Github</a>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
export default about;
