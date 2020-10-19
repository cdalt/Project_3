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
    <div className="container">
      <div class="jumbotron ">
        <h1 className="display-4 text-center">
          {" "}
          Search for the pet of your dreams
        </h1>
        <p class="lead text-center">
          Use the search tool below to find available pets in your area. Search
          by animal type and breed.
        </p>
        <hr class="my-4"></hr>
        <div class="row d-flex justify-content-center">
          <div class="col-md-6">
            {/* <h2 className="title search"> Search Parameters:</h2> */}

            <form>
              <div class="form-group">
                <label>Type of Animal</label>
                <input
                  value={animalType}
                  onChange={(event) => handleInputChange(setAnimalType, event)}
                  class="form-control"
                  type="text"
                  placeholder="dog"
                ></input>
                <label>Breed of Animal</label>
                <input
                  value={animalBreed}
                  onChange={(event) => handleInputChange(setAnimalBreed, event)}
                  class="form-control"
                  type="text"
                  placeholder="pug"
                ></input>
                <label>Zipcode</label>
                <input
                  value={animalZipcode}
                  onChange={(event) =>
                    handleInputChange(setAnimalZipcode, event)
                  }
                  class="form-control"
                  type="text"
                  placeholder="20878"
                ></input>
              </div>
              <p class="lead">
                <button
                  class="btn btn-primary btn-lg"
                  onClick={handleSubmit}
                  type="submit"
                  role="button"
                >
                  Search
                </button>
              </p>
            </form>
          </div>
        </div>
        <hr class="my-4"></hr>
        <div class="row">
          <div class="col-sm-12">
            {!animalResults && (
              <h3 className="">Pets will appear here in a moment..</h3>
            )}
            <div class="row">
              {animalResults &&
                animalResults.map((animalResult) => {
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
    </div>
  );
}
export default Home;
