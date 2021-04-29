import React from "react";
// import WrappedMap from "../components/Map";
import GoogleApiWrapper from '../components/Map'

function MapView() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
        <GoogleApiWrapper />
      {/* <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?&key=${process.env.REACT_APP_MAP}`}
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
      /> */}
    </div>
  );
}

export default MapView;
