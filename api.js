const express = require("express");
const userRouter = require("./Router/user");
const app = express();

app.get("/", (req, res) => {
  res.send("Get method");
});

// using router to complete url of specific path
app.use("/user", userRouter);

// app.post("/", (req, res) => {
//   res.send("Post method");
// });

// app.delete("/", (req, res) => {
//   res.send("Delete method");
// });

// app.get("/user", (req, res) => {
//   //   res.status(204).json({
//   //     username: "Haseeb Khan",
//   //   });
//   res.status(201).json({
//     username: "Haseeb Khan",
//   });
// });

app.listen(3000, console.log("Server Started!..."));
