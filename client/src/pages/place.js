import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Jumbotron, Image } from "react-bootstrap";
import API from "../utils/API";
import CloseBtn from "../components/CloseBtn";

function Place(props) {
  const [place, setPlace] = useState({});

  const { id } = useParams();
  useEffect(() => {
    API.getPlace(id)
      .then((res) => setPlace(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container detail-container" >
        <CloseBtn/>
      <Jumbotron
        style={{
          backgroundColor: "rgb(0,0,0, 0.4)",
          borderRadius: "20px",
          width: "90%",
          margin: "10px auto",
          color: "white"
        }}
      >
        <h1 style={{ textDecoration: "underline"}}>{place.name}</h1>
        <p>{place.synopsis}</p>
      </Jumbotron>
      <Image src={place.image} alt={place.name} style={{ width: "50%", borderRadius: "70px" }} />
      
    </div>
  );
}

export default Place;
