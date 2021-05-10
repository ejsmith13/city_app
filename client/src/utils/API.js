import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  // Gets all Locations
  getLocation: function() {
    return axios.get("/api/locations");
  },
  saveLocation: function(locationData) {
    return axios.post("/api/locations", locationData);
  },
  getPlace: function(id) {
    return axios.get("/api/locations/" + id);
  },
  getCoordinates: function (address, city, state){
    return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address},+${city},+${state}&key=${process.env.REACT_APP_MAP}`)
  }
};