import React from 'react';
import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    const {lat, lng} = this.props.initialCenter;
    this.state = {
      currentLocation: {
        lat: lat,
        lng: lng
      }
    }
  }

  getGeoLocation = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            position => {
              console.log('coords', position.coords);
                this.setState(prevState => ({
                    currentLocation: {
                        ...prevState.currentLocation,
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    }
                }));
            }
        )
    }
  }

  componentDidMount(){
    this.getGeoLocation()
  }

  componentDidUpdate() {
    this.getGeoLocation();
  }

  // componentDidMount() {
  //   if (this.props.centerAroundCurrentLocation) {
  //     if (navigator && navigator.geolocation) {
  //       navigator.geolocation.getCurrentPosition((pos) => {
  //         const coords = pos.coords;
  //         this.setState({
  //           currentLocation: {
  //             lat: coords.latitude,
  //             lng: coords.longitude,
  //           }
  //         })
  //       })
  //     }
  //   }
  //   this.loadMap();
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.google !== this.props.google) {
  //     this.loadMap();
  //   }
  //   if (prevState.currentLocation !== this.state.currentLocation) {
  //     this.recenterMap();
  //   }
  // }

  loadMap() {
    if (this.props && this.props.google) {
      const {google} = this.props;
      const maps = google.maps;
      const {lat, lng} = this.state.currentLocation;

      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);

      let zoom = 14;
      // let lat = 37.774929;
      // let lng = -122.419416;
      const center = new maps.LatLng(lat, lng);
      const mapConfig = Object.assign({}, {
        center: center,
        zoom: zoom
      })
      this.map = new maps.Map(node, mapConfig);
    }
  }

  recenterMap() {
    const map = this.map;
    const curr = this.state.currentLocation;
    const google = this.props.google;
    const maps = google.maps;
    if(map) {
      let center = new maps.LatLng(curr.lat, curr.lng)
      map.panTo(center)
    }
  }

  render() {
    return (
      <div ref='map'>
        <Map 
          google={this.props.google} zoom={14}
          initialCenter={{
            lat: this.state.currentLocation.lat,
            lng: this.state.currentLocation.lng
          }}
          >
          <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
        </Map>
      </div>
    );
  }
}

// MapContainer.propTypes = {
//   google: React.PropTypes.object,
//   zoom: React.PropTypes.number,
//   initialCenter: React.PropTypes.object,
//   centerAroundCurrentLocation: React.PropTypes.bool,
// }

MapContainer.defaultProps = {
  zoom: 13,
  // San Francisco, by default
  initialCenter: {
    lat: 37.774929,
    lng: -122.419416
  },
  centerAroundCurrentLocation: false
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyAqk8E41wDomlxIR_sMGACmpOrrIULJgmI')
})(MapContainer)