import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Jumbotron, Image } from "react-bootstrap";
import API from "../utils/API";
import CloseBtn from "../components/CloseBtn";
import Hours from "../components/Hours";

function Place(props) {
  let history = useHistory();
  const [place, setPlace] = useState({});

  const { id } = useParams();
  useEffect(() => {
    API.getPlace(id)
      .then((res) => setPlace(res.data))
      .catch((err) => console.log(err));
  }, []);

  const exitBtn =()=>{

    history.goBack()
    
  }

  return (
    <div className="container detail-container">
      <CloseBtn exit= {exitBtn} />
      <Jumbotron
        style={{
          backgroundColor: "rgb(0,0,0, 0.4)",
          borderRadius: "5px",
          width: "90%",
          margin: "10px auto",
          color: "white",
        }}
      >
        <h1 style={{ textDecoration: "underline" }}>{place.name}</h1>
        <p>{place.synopsis}</p>
      </Jumbotron>
      <div className ="row">
        <Image
          src={place.image}
          alt={place.name}
          style={{ width: "50%", borderRadius: "70px", marginLeft: "auto" }}
        />

        <Hours hours={place.hours} />
      </div>
    </div>
  );
}

export default Place;
