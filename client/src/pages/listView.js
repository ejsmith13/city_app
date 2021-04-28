import React, { useState, useEffect } from "react";
import API from "../utils/API"

function List() {
    const [places, setPlaces] = useState([])

    useEffect(() => {
        loadPlaces()
      }, [])

    function loadPlaces (){
        console.log("making call")
        API.getLocation()
      .then(res => 
        setPlaces(res.data)
      )
      .catch(err => console.log(err));
    }
return(
    <div> 
        {loadPlaces()}
        <h1>List</h1>
        {console.log(places)}
        {places.map(place => {
            return(<p>{place.name}</p>)
        })}
    </div>
)
}

export default List;