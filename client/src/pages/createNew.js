import React, { useState } from "react";
import { Input, TextArea, FormBtn } from "../components/Form";
import API from "../utils/API";

function NewLocation() {
  const [formObject, setFormObject] = useState({});

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    API.saveLocation({
      name: formObject.location,
      category: formObject.category,
      synopsis: formObject.synopsis,
    })
      // .then((res) => loadBooks())
      .then(alert("success"))
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <h1>Add a new Location</h1>
      <form>
        <Input
          onChange={handleInputChange}
          name="location"
          placeholder="Location (required)"
        />

        <TextArea
          onChange={handleInputChange}
          name="Synopsis"
          placeholder="Synopsis"
        />

        <Input
          onChange={handleInputChange}
          name="Category"
          placeholder="Category"
        />

        <FormBtn onClick={handleFormSubmit}>Post</FormBtn>
      </form>
    </div>
  );
}

export default NewLocation;
