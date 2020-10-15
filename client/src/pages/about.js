import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function about() {
    return (
      <div>
        <div
          className="hero text-center"
          style={{
            height: "50vh",
            backgroundImage: `url(${process.env.PUBLIC_URL + "/petlogo.png"})`,
          }}
        >
          <h1>About us</h1>
          
        </div>
        <div className="container" style={{ marginTop: 30 }}>
          <div className="row">
            <div className="col col-md-12">
              <h1>Hey There!</h1>
            </div>
          </div>
          <div className="row">
            <div className="col col-md-6">
              <p>
                We hope you like out page, this was made by: 
                Dalton, Alfredo, Blake, and Jeremy. 
              </p>
            </div>
            <div className="col col-md-6">
              
            </div>
          </div>
        </div>
      </div>
    );
  }
  export default about;