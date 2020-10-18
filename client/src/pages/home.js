import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/style.css";
function Home() {
  const [animalType, setAnimalType] = useState("");
  const [animalBreed, setAnimalBreed] = useState("");
  const [animalZipcode, setAnimalZipcode] = useState("");
  const [animalResults, setAnimalResults] = useState([]);

  const handleInputChange = (setStateVarFunction, event) => {
    setStateVarFunction(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let postSearchData = async function () {
      let response = await fetch("/api/search", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          breed: animalBreed,
          type: animalType,
          zipcode: animalZipcode,
        }),
      });
      let respJSON = await response.json();
      console.log(respJSON);
      setAnimalResults(respJSON.animals);
    };

    postSearchData();
  };

  return (
    <div className="big-div">
      <div className="hero text-center">
        <h1 className="title"> Search for the pet of your dreams</h1>

        <div class="column-md-6">
          <h2 className="title search"> Search Parameters:</h2>

          <form>
            <div class="form-group col-md-4">
              <label for="typeOfAnimal"></label>
              <input
                value={animalType}
                onChange={(event) => handleInputChange(setAnimalType, event)}
                class="form-control"
                type="text"
                placeholder="Type of animal"
              ></input>
              <input
                value={animalBreed}
                onChange={(event) => handleInputChange(setAnimalBreed, event)}
                class="form-control"
                type="text"
                placeholder="Breed of animal"
              ></input>
              <input
                value={animalZipcode}
                onChange={(event) => handleInputChange(setAnimalZipcode, event)}
                class="form-control"
                type="text"
                placeholder="Zipcode"
              ></input>
              <button
                onClick={handleSubmit}
                type="submit"
                class="btn btn-primary"
              >
                Search
              </button>
            </div>
          </form>
        </div>
        <div class="column-md-12">
          <h2 className="title">Pets will appear here in a moment..</h2>
          <div class="row">
            {animalResults.map((animalResult) => {
              return (
                <div class=" col-sm-4 card" id="petCard1">
                  <img
                    src={animalResult.primary_photo_cropped.full}
                    class="card-img-top"
                    id="petImage1"
                    alt="..."
                  ></img>
                  <div class="card-body">
                    <h5 class="card-title" id="animalName1">
                      {animalResult.name}
                    </h5>
                    <p class="card-text" id="petInfo1">
                      <p id="animalInfo1">type: {animalResult.type}</p>
                      <p id="breedInfo1">breed: {animalResult.breed}</p>
                      <p id="sizeInfo1">size: {animalResult.size}</p>
                      <p id="locationInfo1">
                        distance: {animalResult.distance}
                      </p>
                      <p id="shelterInfo1">Info on the shelter</p>
                    </p>
                    <a
                      href={animalResult.url}
                      class="btn btn-primary"
                      id="link1"
                    >
                      See where they are now
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
