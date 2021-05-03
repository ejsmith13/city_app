const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes");

// / Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}




app.use(routes);


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/rcitylocations", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
       useCreateIndex: true,
       useFindAndModify: false
}).then(() => {
  console.log('Database connected sucessfully !')
},
  error => {
      console.log('Database could not be connected : ' + error)
  }
)



app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
