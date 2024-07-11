const createData = async (req, res) => {
  const moviesModel = require("../models/movies.model");

  const { name, rating, info } = req.body;
  try {
    // await moviesModel.create({
    //   id: 7,
    //   name: "Rodish",
    //   image: "https://cdn.dynoacademy.com/test-api/bestoffer.jpg",
    //   info: "Eccentric art expert Virgil Oldman is hired by reclusive heiress Claire to auction her family's art collection. Oldman enlists the help of Robert and Billy to restore and acquire pieces for the auction and also tries to connect with Claire.",
    //   rating: 8.5,
    // });
    if (!name) throw "name is required";
    if (name.length < 3) throw "name length must be atleast 3 letters";

    if (!rating) {
      throw "rating  is required";
    }
    if (!info) {
      throw "info is required";
    }

    await moviesModel.create({
      name: name,
      rating: rating,
      info: info,
    });

    res.status(200).json({
      status: "success",
      message: "data created successfully! ",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: "creation failed",
      message: error,
    });
  }
};
module.exports = createData;
