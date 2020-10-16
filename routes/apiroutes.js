const router = require("express").Router();
const request = require("request");
const fetch = require("node-fetch");
require("dotenv").config();
const {
  findAll,
  create,
  update,
  findById,
  remove,
} = require("../controllers/petcontroller");
const userControllers = require("../controllers/user.js");

router.get("/pets", findAll);
router.post("/pets", create);
router.put("/pets/:id", update);
router.get("/pets/:id", findById);
router.delete("/pets/:id", remove);
router.post("/search", (req, res) => {
  let zipcode = req.body.location;
  let type = req.body.type;

  const fetchAccessToken = async () => {
    const params = new URLSearchParams();
    params.append("grant_type", "client_credentials");
    params.append("client_id", process.env.petFinderKey);
    params.append("client_secret", process.env.petFinderSecret);
    const petFinderRes = await fetch(
      "https://api.petfinder.com/v2/oauth2/token",
      {
        method: "POST",
        body: params,
      }
    );
    let response = await petFinderRes.json();
    let accessToken = response.access_token;
    const fetchPets = async () => {
      const petResults = await fetch(
        `https://api.petfinder.com/v2/animals?location=${zipcode}&type=${type}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const json = await petResults.json();
      console.log(json);
      res.send(json);
    };
    fetchPets();
  };
  fetchAccessToken();
});

router.get("/users/:id", userControllers.findById);
router.post("/users", userControllers.create);
router.put("/users/:id", userControllers.update);

module.exports = router;

// routers to controller to get db info
