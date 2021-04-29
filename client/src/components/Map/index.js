import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat:37.540726, 
            lng:-77.436050
          }
        }
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: `${process.env.REACT_APP_MAP}`
})(MapContainer);
