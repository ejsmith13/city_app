import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
import API from "../../utils/API";
import { Link } from "react-router-dom";

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
        this.setState({ places: res.data });
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

  renderSwitch = (cat) => {
    switch (cat) {
      case "trail":
        return <i className="fas fa-walking"></i>;
      case "musuem":
        return <i className="fas fa-university"></i>;
      case "park":
        return <i className="fas fa-tree"></i>;
      default:
        return <i className="fas fa-question"></i>;
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
          {this.state.places.map((e) => {
            console.log(e);
            return (
              <Marker
                key={e.name}
                name={e.name}
                image={e.image}
                synopsis={e.synopsis}
                category={e.category}
                id={e._id}
                position={{
                  lat: `${e.position.lat}`,
                  lng: `${e.position.lng}`,
                }}
                onClick={this.onMarkerClick}
              />
            );
          })}

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          >
            <div>
              <a href={`/locations/${this.state.selectedPlace.id}`}>
                <img
                  src={this.state.selectedPlace.image}
                  alt={this.state.selectedPlace.name}
                  style={{ borderRadius: "50%", height: "100px" }}
                />
                <h4>{this.state.selectedPlace.name}</h4>
                <h5>{this.renderSwitch(this.state.selectedPlace.category)}</h5>
              </a>
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
