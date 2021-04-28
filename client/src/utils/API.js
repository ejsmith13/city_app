import axios from "axios";

export default {
  // Gets all Locations
  getLocations: function() {
    return axios.get("/api/locations");
  },
  // Gets the Location with the given id
  getLocation: function(id) {
    return axios.get("/api/locations/" + id);
  },
  // Deletes the Location with the given id
  deleteLocation: function(id) {
    return axios.delete("/api/locations/" + id);
  },
  // Saves a Location to the database
  saveLocation: function(locationData) {
    return axios.post("/api/locations", locationData);
  }
};