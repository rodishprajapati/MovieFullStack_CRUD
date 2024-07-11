const moviesModel = require("../models/movies.model");

const updateMovies = async (req, res) => {
  const { name, info, rating, _id } = req.body;
  console.log(req.body);
  try {
    await moviesModel.updateOne(
      {
        _id,
      },
      {
        name,
        info,
        rating,
      }
    );

    res.status(200).json({
      status: "successfully updated!",
      Update_Name: name,
      Update_Rating: rating,
      Update_info: info,
    });
  } catch (e) {
    if (typeof e === "string") {
      res.status(400).json({
        status: "cannot update",
        message: e,
      });
    } else {
      res.status(400).json({
        status: "something went wrong",
        message: e.message || "Unknown error",
      });
    }
  }
};

module.exports = updateMovies;
