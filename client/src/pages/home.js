import React from "react";

function Home() {
    return (
      <div>
        <div
          className="hero text-center"
          style={{
            height: "50vh",
            backgroundImage: `url(${process.env.PUBLIC_URL + "/petlogo.png"})`,
          }}
        >
          <h1>Pet Finder</h1>
          
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
                Welcome to our page! We hope that we are able to help
                you find your future pet all while saving an animal
                from a shelter and taking them off the streets.
              </p>
            </div>
            <div className="col col-md-6">
              
            </div>
          </div>
        </div>
      </div>
    );
  }
  export default Home;