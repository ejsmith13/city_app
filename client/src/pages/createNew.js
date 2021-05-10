import React, { useState } from "react";
import { Input, TextArea, FormBtn } from "../components/Form";
import API from "../utils/API";
import { Dropdown } from "react-bootstrap";

function NewLocation() {
  const [formObject, setFormObject] = useState({});
  const [coordinates, setCoordinates] = useState({});

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  function getLatLng() {
   
  }

  function post() {
    console.log(coordinates);
    API.saveLocation({
      name: formObject.location,
      category: formObject.category,
      synopsis: formObject.synopsis,
      image: formObject.image,
      position: { lat: coordinates.lat, lng: coordinates.lng },
    })
      .then(() =>
        setFormObject({
          location: "",
          category: "",
          synopsis: "",
          image: "",
          address: "",
          city: "",
          state: "",
        })
      )

      .catch((err) => console.log(err));
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    API.getCoordinates(
      formObject.address,
      formObject.city,
      formObject.state
    ).then((response) => {
      console.log(response.data.results[0].geometry);
      API.saveLocation({
        name: formObject.location,
        category: formObject.category,
        synopsis: formObject.synopsis,
        image: formObject.image,
        position: {
          lat: response.data.results[0].geometry.location.lat,
          lng: response.data.results[0].geometry.location.lng,
        },
      })
        .then(() =>
          setFormObject({
            location: "",
            category: "",
            synopsis: "",
            image: "",
            address: "",
            city: "",
            state: "",
          })
        )

        .catch((err) => console.log(err));
    });

    
  }

  return (
    <div className="container input-container">
      <div className="row">
        <div className="col-md-6" style={{ margin: "auto" }}>
          <h1 style={{ color: "white" }}>Add a new Location</h1>
          <form>
            <Input
              onChange={handleInputChange}
              name="location"
              placeholder="Location (required)"
            />

            <TextArea
              onChange={handleInputChange}
              name="synopsis"
              placeholder="Synopsis"
            />

            <Input
              onChange={handleInputChange}
              name="address"
              placeholder="Address"
            />
            <Input
              onChange={handleInputChange}
              name="city"
              placeholder="City"
            />
            <Input
              onChange={handleInputChange}
              name="state"
              placeholder="State"
            />

            <Input
              onChange={handleInputChange}
              name="image"
              placeholder="Link to Image"
            />

            <Dropdown>
              <Dropdown.Toggle name="category" id="dropdown-basic">
                Category
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>trail</Dropdown.Item>
                <Dropdown.Item>park</Dropdown.Item>
                <Dropdown.Item>musuem</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <FormBtn onClick={handleFormSubmit}>Post</FormBtn>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewLocation;
