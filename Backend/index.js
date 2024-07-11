const express = require("express");
const cors = require("cors");
//const { default: mongoose } = require("mongoose");
const app = express();
const mongoose = require("mongoose");
const createData = require("./modules/crud_create");
const getMovies = require("./modules/crud_get");
const updateMovies = require("./modules/crud_update");
const deleteMovie = require("./modules/crud_delete");
const getSingleMovies = require("./modules/crud_singleMovie");

app.use(express.json());
app.use(cors());

// same thing
// const dotenv=require("dotenv");
// dotenv.config();
require("dotenv").config();

console.log("connected successfully");

mongoose
  .connect(process.env.mongo_connect, {})
  .then(() => {
    console.log("Mongodb connected successfully");
  })
  .catch((error) => {
    console.log("connection failed");
  });

//app.get("/addData", createData);
app.patch("/movies", updateMovies);
app.post("/movies", createData);
app.get("/movies", getMovies);
app.delete("/movies/:_id", deleteMovie);
app.get("/movies/:_id", getSingleMovies);

app.listen(8000, () => {
  console.log("server started successfully");
});
