// {
//   name:,
//   image:,
//   category:,
//   position:{lat:,lng:},
//   date: new Date(Date.now())
// }

const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/rcitylocations"
);

const locationSeed = [
  {
    name: "Maymont",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Maymont_Mansion.JPG/1024px-Maymont_Mansion.JPG",
    category: "trail",
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
  {
      name: "Hollywood Cemetary",
      image:"https://www.dhr.virginia.gov/wp-content/uploads/2018/04/127-0221_Hollywood_Cemetery_2021_Setting_VLR_Online-scaled.jpg",
      category: "trail",
      position:{lat: 37.539749,lng:-77.452988},
      synopsis:
      "This historic cemetary in Richmond's Oregon Hill district is the final resting place of several US Presidents. It offers beautiful views of the James river and miles of scerene trails.",
      date: new Date(Date.now())
    },
    {
  name:"Scuffletown Park",
  image:"https://media1.fdncms.com/styleweekly/imager/u/mobilestory/9541947/news24_scuffletown.jpg",
  category:"park",
  position:{lat:37.555930,lng:-77.466870},
  synopsis:
  "This small but beautiful park is a truley hidden gem. Situated in the heart of Richmond's Fan District, it is a beautiful spot to have lunch or meet up with friends.",
  date: new Date(Date.now())
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
