const moviesModel = require("../models/movies.model");

const deleteMovie = async (req, res) => {
  const { _id } = req.params;
  await moviesModel.deleteOne({
    _id: _id,
  });

  res.status(200).json({
    status: "delete success",
  });
};
module.exports = deleteMovie;
