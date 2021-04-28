const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/rcitylocations"
);

const locationSeed = [
  {
    name: "Maymont",
    image: "none",
    category: "garden",
    synopsis:
      "Come visit this expansive estate along the James which offers visitors a zoo, mansion tours, and self guided walks through several gardens.",
    date: new Date(Date.now()),
  },
  {
    name: "Virginia Musuem of Fine Arts",
    image: "none",
    category: "musuem",
    synopsis:
      "The Virginia Musuem of Fine Arts (VMFA) offers visitors several free exhibitions while also hosting a rotating schedule of paid exhibits throughout the year. Visit this local attraction 365 days of the year.",
    date: new Date(Date.now()),
  },
  {
    name: "Byrd Park",
    image: "none",
    category: "park",
    synopsis:
      "Byrd park offers visitors a great place to walk and explore a more natural side of the city. Enjoy fountain lake, the round house, and the Carillion on your walk.",
    date: new Date(Date.now()),
  },
];

db.Location.remove({})
  .then(() => db.Location.collection.insertMany(locationSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
