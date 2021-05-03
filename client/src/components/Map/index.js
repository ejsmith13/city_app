import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
import API from "../../utils/API";


const mapStyles = {
  width: "70%",
  height: "70%",
  margin: " 10px auto",
  border: "black solid 3px",
  borderRadius: "10px",
  
};

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false, // Hides or shows the InfoWindow
    activeMarker: {}, // Shows the active marker upon click
    selectedPlace: {}, // Shows the InfoWindow to the selected place upon a marker
    places: [],
  };

  
  componentDidMount() {
    this.loadPlaces();
  }

  loadPlaces = () => {
    API.getLocation()
      .then((res) => {
        
          this.setState({places: res.data} )
        })
      .catch((err) => console.log(err));
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  onClose = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  render() {
    return (
      <div>
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: 37.540726,
          lng: -77.43605,
        }}
      >
          {this.state.places.map(e => {
              console.log(e)
              return(
              <Marker 
              key= {e.name}
              name={e.name}
              position={{lat:`${e.position.lat}`, lng: `${e.position.lng}`}}
              onClick={this.onMarkerClick}
              />)
          })}
        
       

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: `${process.env.REACT_APP_MAP}`,
})(MapContainer);
