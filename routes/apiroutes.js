const router = require("express").Router();
const request = require("request");

router.post("/search", (req, res) => {
  console.log(req.body);
  let query = req.body.query;
  console.log(query);
  request.get("", { json: true }, (err, resp, body) => {
    console.log(resp);
  });
});

module.exports = router;

// vj03ZHBV8vllJEFJc0xhBpbU2RGSGQjgLPwwIFHpkNO70xVezh; api

// RIdzOlHy3NcQxvEx1EiVnUkaxovjdKJfd5zNIY72; secret

// url for 8
// get token to make request to URL
// request to URL we want
