import React, { useState, useEffect } from "react";
import About from "../components/About";
import Carousels from "../components/Carousel";
import API from "../utils/API";

function Home() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    loadPlaces();
  }, []);

  function loadPlaces() {
    API.getLocation()
      .then((res) => setPlaces(res.data))
      .catch((err) => console.log(err));
  }
  return (
    <div className="container home-container">
      <div className="row">
        <About />
      </div>

      <Carousels places={places} />
    </div>
  );
}

export default Home;
