const router = require("express").Router();
const request = require("request");
const petFinderKey = "vj03ZHBV8vllJEFJc0xhBpbU2RGSGQjgLPwwIFHpkNO70xVezh";
const petFinderSecret = "RIdzOlHy3NcQxvEx1EiVnUkaxovjdKJfd5zNIY72";
const fetch = require("node-fetch");
const {
  findAll,
  create,
  update,
  findById,
  remove,
} = require("../controllers/petcontroller");

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
    params.append("client_id", petFinderKey);
    params.append("client_secret", petFinderSecret);
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

module.exports = router;

// routers to controller to get db info
