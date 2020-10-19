import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/style.css";
function Favorite() {
  return (
    <div className="big-div">
      <div className="hero text-center">
        <h1 className="title">favorties</h1>
      </div>
      <div className="container" style={{ marginTop: 30 }}>
        <div className="row">
          <div className="col col-md-12">
            <h1 className="title search">
              these are the animals you have favorited.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Favorite;
