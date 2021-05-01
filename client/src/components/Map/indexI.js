import React, { Component, useEffect, useState } from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
import API from "../../utils/API";
const mapStyles = {
  width: "100%",
  height: "100%",
};

function MapContainer() {
  const [showInfo, setshowInfo] = useState(false);
  const [activeMarker, setActiveMarker] = useState({});
  const [selectedPlace, setSelectedPlace] = useState({});
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    loadPlaces();
  }, []);

  function loadPlaces() {
    API.getLocation()
      .then((res) => setPlaces(res.data))
      .catch((err) => console.log(err));
  };

 function onMarkerClick  (props, marker, e) {
      setSelectedPlace(props)
      setActiveMarker(marker)
      setshowInfo(true)
  };

  function onClose  (props) {
    if (showInfo) {
        setshowInfo(false)
        setActiveMarker(null);
    }
  };

  return (
    <Map
      google={window.google}
      zoom={14}
      style={mapStyles}
      initialCenter={{
        lat: 37.540726,
        lng: -77.43605,
      }}
    >
        {places.map(e => {
              console.log(e.position.lat)
              return(
              <Marker 
              key= {e.name}
              name={e.name}
              position={{lat:`${e.position.lat}`, lng: `${e.position.lng}`}}
              onclick={onMarkerClick}
              />)
          })}
        {/* <Marker
        onClick={onMarkerClick}
        name={'Test Tag'}
      />
      <Marker 
      position={{lat: 37.556099, lng:-77.474411}}  
      onClick={onMarkerClick}
        name={'VMFA'}
        title= {"test"}/>

        <Marker 
        position={{lat: 37.534401, lng:-77.478233}}  
        onClick={onMarkerClick}
          name={'Maymont'}
          
        /> */}

      <InfoWindow
        marker={activeMarker}
        visible={showInfo}
        onClose={onClose}
      >
        <div>
          <h4>{selectedPlace.name}</h4>
        </div>
      </InfoWindow>
        </Map>
  );

  
}

export default GoogleApiWrapper({
  apiKey: `${process.env.REACT_APP_MAP}`,
})(MapContainer);
