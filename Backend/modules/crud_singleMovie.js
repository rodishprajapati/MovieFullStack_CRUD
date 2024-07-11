const moviesModel = require("../models/movies.model");

const getSingleMovies = async (req, res) => {
  const { _id } = req.params;
  const singleData = await moviesModel.findOne({
    _id: _id,
  });

  res.status(200).json({
    status: "success",
    data: singleData,
  });
};
module.exports = getSingleMovies;
