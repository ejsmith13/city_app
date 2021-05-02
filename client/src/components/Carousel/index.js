import React from "react";
import { Carousel } from "react-bootstrap";
import './style.css';

function Carousels(props) {
  return (
    <div className= "homeCarousel">
      <Carousel>
        {props.places.map((place) => {
          return (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={place.image}
                alt={place.name}
              />
              <Carousel.Caption>
                  <div className="container placeNames">
                <h5>{place.name}</h5>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}

export default Carousels;
