import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/style.css";
function About() {
  return (
    <div className="big-div">
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
<<<<<<< HEAD
            <p>
              We hope you like out page, this was made by: Dalton, Alfredo,
=======
            <p className="para">
              This was a colabertaive work desgined to help people find pets that they could
              love and be with forever, we designed this with people and pets in mind. 
              We hope you like our page, this was made by: Dalton, Alfredo,
>>>>>>> 99209dae0861f814b95662a28597d4675d0603a3
              Blake, and Jeremy.
            </p>
          </div>
          <div className="col col-md-6">
            <h1 className="title"> Links to our git hubs can be found here</h1>
            <a
              class="btn btn-primary"
              href="https://github.com/cdalt"
              role="button"
            >
              Dalton's Github
            </a>
            <a
              class="btn btn-secondary"
              href="https://github.com/Blakeehhler"
              role="button"
            >
              Blake's Github
            </a>
            <a
              class="btn btn-primary"
              href="https://github.com/aphernandez13"
              role="button"
            >
              Alfredo's Github
            </a>
            <a
              class="btn btn-secondary fredo-button"
              href="https://github.com/Jermdude7"
              role="button"
            >
              Jeremy's Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
