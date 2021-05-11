import React, { useState, useEffect } from "react";
import Container from "../components/PlaceContainer";
import API from "../utils/API";
import SearchBar from "../components/SeachBar"

function List() {
  const [places, setPlaces] = useState([]);
  const [search, setSearch] = useState("");
  // const [results, setResults] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    loadPlaces();
  }, []);

  function loadPlaces() {
    API.getLocation()
      .then((res) => setPlaces(res.data))
      .catch((err) => console.log(err));
  }

  function handleInputChange (event) {
    event.preventDefault();
    let search = event.target.value.toLowerCase();
    let locals = places;
    locals = locals.filter((place) => {
      console.log(place.name)
      let name = place.name.toLowerCase();
      console.log(name)
      console.log(search)

      if (name.includes(search)) {
        return name.includes(search);
      } 
    });
    setFiltered(locals)
  };

  return (
    <div>
      <SearchBar handleInputChange={handleInputChange} />
      <Container className="search-container" places={
        filtered.length 
        ? filtered
        : places} />
    </div>
  );
}

export default List;
