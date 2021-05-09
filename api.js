// const express = require("express");
// const userRouter = require("./Router/user");
// const app = express();

// app.get("/", (req, res) => {
//   res.send("Get method");
// });

// // using router to complete url of specific path
// app.use("/user", userRouter);

// // app.post("/", (req, res) => {
// //   res.send("Post method");
// // });

// // app.delete("/", (req, res) => {
// //   res.send("Delete method");
// // });

// // app.get("/user", (req, res) => {
// //   //   res.status(204).json({
// //   //     username: "Haseeb Khan",
// //   //   });
// //   res.status(201).json({
// //     username: "Haseeb Khan",
// //   });
// // });

// app.listen(3000, console.log("Server Started!..."));
// ********************************************************************************************************

const express = require("express");
const userRouter = require("./Router/user");
const mainRouter = require("./Router/main");
const app = express();

// using express ejs template engine
app.set("view engine", "ejs");

// express. json() is a method inbuilt in express to recognize the incoming Request Object as a JSON Object.
// This method is called as a middleware in your application using the code: app. use(express. ... urlencoded()
// is a method inbuilt in express to recognize the incoming Request Object as strings or arrays
app.use(express.json());

// using router to complete url of specific path
app.use("/", mainRouter);
app.use("/user", userRouter);

app.listen(3000, console.log("Server Started!..."));
