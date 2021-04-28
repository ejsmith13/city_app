import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  // Gets all Locations
  getLocation: function() {
    return axios.get("/api/locations");
  },
  saveLocation: function(locationData) {
    return axios.post("/api/locations", locationData);
  }
};