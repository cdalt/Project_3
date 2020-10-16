import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <div>
      <h1 className="title"> hello world</h1>

      <div class="column-md-6">
        <h2 className="title"> Search Parameters</h2>
        <form>
          <div class="form-group col-md-4">
            <label for="typeOfAnimal"></label>
            <input
              class="form-control"
              type="text"
              placeholder="Type of animal"
            ></input>
            <input
              class="form-control"
              type="text"
              placeholder="Breed of animal"
            ></input>
            <input
              class="form-control"
              type="text"
              placeholder="Zipcode"
            ></input>
          </div>
        </form>
      </div>
      <div class="column-md-6">
        <h2 className="title">Pet Name</h2>
        <div class="card-group">
          <div class="card" id="petCard1" style={{ width: "18rem" }}>
            <img src="..." class="card-img-top" id="petImage1" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text" id="petInfo1">
              <p id="animalInfo1">Info on typeOfAnimal</p>
                <p id="breedInfo1">Info on the breed of animal</p>
                <p id="sizeInfo1">info on the size of the animal</p>
                <p id="locationInfo1">
                  Info on the location of the animal currently
                </p>
                <p id="shelterInfo1">Info on the shelter</p>
              </p>
              <a href="#" class="btn btn-primary" id="link1">
                See where they are now
              </a>
            </div>
          </div>
          <div class="card" id="petCard2" style={{ width: "18rem" }}>
            <img src="..." class="card-img-top" id="petImage2" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text" id="petInfo2">
              <p id="animalInfo2">Info on typeOfAnimal</p>
                <p id="breedInfo2">Info on the breed of animal</p>
                <p id="sizeInfo2">info on the size of the animal</p>
                <p id="locationInfo2">
                  Info on the location of the animal currently
                </p>
                <p id="shelterInfo2">Info on the shelter</p>
              </p>
              <a href="#" class="btn btn-primary" id="link2">
                See where they are now
              </a>
            </div>
          </div>
          <div class="card" id="petCard3" style={{ width: "18rem" }}>
            <img src="..." class="card-img-top" id="petImage3" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text" id="petInfo3">
                <p id="animalInfo3">Info on typeOfAnimal</p>
                <p id="breedInfo3">Info on the breed of animal</p>
                <p id="sizeInfo3">info on the size of the animal</p>
                <p id="locationInfo3">
                  Info on the location of the animal currently
                </p>
                <p id="shelterInfo3">Info on the shelter</p>
              </p>
              <a href="#" class="btn btn-primary" id="link3">
                See where they are now
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <h2 className="title">Mulitiple Pet Info</h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        nemo nulla dolorum neque tenetur? Deleniti minus quia necessitatibus,
        ullam saepe autem, ad veritatis accusantium laudantium officiis
        inventore, pariatur animi. Animi.
      </div>
    </div>
  );
}
export default Home;
