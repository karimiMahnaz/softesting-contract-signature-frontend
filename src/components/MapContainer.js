import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

export class MapContainer extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        stores: [{lat: 49.895637, lng: -97.138958},
                {latitude: 49.899413, longitude: -97.138614}]
                // {latitude: 47.2052192687988, longitude: -121.988426208496},
                // {latitude: 47.6307081, longitude: -122.1434325},
                // {latitude: 47.3084488, longitude: -122.2140121},
                // {latitude: 49.895537, longitude: -97.138614}]
      }
    }
  
   
    displayMarkers = () => {
      return this.state.stores.map((store, index) => {
        return <Marker key={index} id={index} position={{
         lat: store.latitude,
         lng: store.longitude
       }}
       onClick={() => console.log("You clicked me!")} />
      })
    }
  
    render() {
      return (
          <Map
            google={this.props.google}
            zoom={10}
            style={{
              width: '100%',
              height: '100%',
            }}
            initialCenter={{ lat: 49.895, lng: -97.138}}
          >
            {this.displayMarkers()}
          </Map>
      );
    }
  }

  export default GoogleApiWrapper({
    apiKey:process.env.REACT_APP_API_KEY
  })(MapContainer);