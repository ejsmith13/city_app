import React, { useState, useEffect } from "react";
import Container from '../components/PlaceContainer'
import API from "../utils/API"

function List() {
    const [places, setPlaces] = useState([])

    useEffect(() => {
        loadPlaces()
      }, [])

    function loadPlaces (){
        API.getLocation()
      .then(res => 
        setPlaces(res.data)
      )
      .catch(err => console.log(err));
    }
return(
    <div> 
        <Container 
        places = {places}/>
    </div>
)
}

export default List;