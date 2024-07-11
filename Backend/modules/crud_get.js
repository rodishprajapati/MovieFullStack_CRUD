const moviesModel = require("../models/movies.model");

const getMovies = async (req, res) => {
  //if specific need to be find
  // const moviesData = await moviesModel.find({
  //   name: "rodish",
  //   info: "abc",
  // });
  const moviesData = await moviesModel.find();

  res.status(200).json({
    status: "success",
    records: moviesData.length,
    message: moviesData,
  });
};
module.exports = getMovies;
