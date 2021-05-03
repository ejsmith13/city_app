import React from "react";
// import WrappedMap from "../components/Map";
import GoogleApiWrapper from "../components/Map/index";

function MapView() {
  return (
    <div>
      <main style={{height: "100%"}}>
        <GoogleApiWrapper />
      </main>
    </div>
  );
}

export default MapView;
