import React from "react";
import { Carousel } from "react-bootstrap";


function Carousels(props) {
  return (
    <div className= "homeCarousel">
      <Carousel>
        {props.places.map((place) => {
          return (
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-img"
                src={place.image}
                alt={place.name}
              />
              <Carousel.Caption>
                  <div className="container carousel-placeNames">
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
