// const express = require("express");
// const router = express.Router();

// router.post("/reaction/angry", (req, res) => {
//   res.send("Angry reacted");
// });

// router.post("/reaction/laugh", (req, res) => {
//   res.send("Laugh reacted");
// });

// router.post("/reaction/like", (req, res) => {
//   res.send("Like reacted");
// });

// // router.get("/getuser", (req, res) => {
// //   res.status(201).json({
// //     username: "Haseeb Khan",
// //   });
// // });
// router.get("/:id", (req, res) => {
//   res.status(201).json({
//     username: "Haseeb Khan",
//   });
// });

// // exporting router so it can be used in api.js
// module.exports = router;
// ********************************************************************************************************

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

// router.get("/getuser", (req, res) => {
//   res.status(201).json({
//     username: "Haseeb Khan",
//   });
// });
router.post("/:id", (req, res) => {
  console.log(req.body);
  // console.log(req.query);
  // console.log(req.params.id);
  console.log(req.params);
  console.log(req.headers);

  res.status(201).json({
    id: req.params.id,
    username: "Haseeb Khan",
  });
});

// exporting router so it can be used in api.js
module.exports = router;
