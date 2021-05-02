const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/rcitylocations"
);

const locationSeed = [
  {
    name: "Maymont",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Maymont_Mansion.JPG/1024px-Maymont_Mansion.JPG",
    category: "garden",
    position: {lat: 37.534401, lng:-77.478233},
    synopsis:
      "Come visit this expansive estate along the James which offers visitors a zoo, mansion tours, and self guided walks through several gardens.",
    date: new Date(Date.now()),
  },
  {
    name: "Virginia Musuem of Fine Arts",
    image: "https://images.squarespace-cdn.com/content/v1/595d39d2d482e940948f8507/1502316815507-T9PSB3UO72XWZSCTH6OZ/ke17ZwdGBToddI8pDm48kKtijf5x5S0rIV7X_qDH3dB7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UaZbTVdO5VSPAOxIcVIbmIFLIFeVDbQiz7iBIgNCzklBDD2o6CESiqIlH5ssNFrtmA/image-asset.jpeg?format=1500w",
    category: "musuem",
    position: {lat: 37.556099, lng:-77.474411},
    synopsis:
      "The Virginia Musuem of Fine Arts (VMFA) offers visitors several free exhibitions while also hosting a rotating schedule of paid exhibits throughout the year. Visit this local attraction 365 days of the year.",
    date: new Date(Date.now()),
  },
  {
    name: "Byrd Park",
    image: "http://www.richmondgov.com/Parks/images/imageGeeseByrdPark1.jpg",
    category: "park",
    position: {lat: 37.550770, lng:-77.476593},
    synopsis:
      "Byrd park offers visitors a great place to walk and explore a more natural side of the city. Enjoy fountain lake, the round house, and the Carillion on your walk.",
    date: new Date(Date.now()),
  },
];

db.Locations.remove({})
  .then(() => db.Locations.collection.insertMany(locationSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
