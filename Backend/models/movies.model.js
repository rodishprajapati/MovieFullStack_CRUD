const mongoose = require("mongoose");

const movieSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    info: {
      type: String,
    },
    rating: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);
const moviesModel = mongoose.model("movies", movieSchema);

module.exports = moviesModel;
