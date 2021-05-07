const express = require("express");
const router = express.Router();

router.post("/reaction/angry", (req, res) => {
  res.send("Angry reacted");
});

router.post("/reaction/laugh", (req, res) => {
  res.send("Laugh reacted");
});

router.post("/reaction/like", (req, res) => {
  res.send("Like reacted");
});

router.get("/getuser", (req, res) => {
  res.status(201).json({
    username: "Haseeb Khan",
  });
});

// exporting router so it can be used in api.js
module.exports = router;
