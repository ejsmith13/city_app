import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import API from "../utils/API";

function Place(props) {
  const [place, setPlace]= useState({})

  // When this component mounts, grab the book with the _id of props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  const {id} = useParams()
  useEffect(() => {
    API.getPlace(id)
      .then(res => setPlace(res.data))
      .catch(err => console.log(err));
  }, [])

  return (
      <div>
          <h1>{place.name}</h1>
      </div>
  )}


export default Place;
