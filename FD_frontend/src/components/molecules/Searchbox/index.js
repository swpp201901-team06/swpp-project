import React, { Component, Fragment } from 'react';
import { GoogleApiWrapper, InfoWindow } from 'google-map-react';
//import isEmpty from 'lodash.isempty';

import Marker from '../../atoms/Marker';
import GoogleMap from '../../atoms/GoogleMap';
import SearchBox from '../../atoms/SearchBox';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mapApiLoaded: false,
      mapInstance: null,
      mapApi: null,
      places: [],
    };
  }

  apiHasLoaded = (map, maps) => {
    this.setState({
      mapApiLoaded: true,
      mapInstance: map,
      mapApi: maps,
    });
  };

  addPlace = (place) => {
    this.setState({ places: place });
  };
  
  render() {
    const {
      places, mapApiLoaded, mapInstance, mapApi,
    } = this.state;
    return (
      <div>
        {mapApiLoaded && <SearchBox map={mapInstance} mapApi={mapApi} addplace={this.addPlace} />}
        <GoogleMap
          defaultZoom={17}
          defaultCenter={[37.4812, 126.9527]}
          bootstrapURLKeys={{
            key: 'AIzaSyBBUBM1s37lF0M2Wbkkv6Yl5tdOhF3YBfM',
            libraries: ['places', 'geometry'],
          }}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => this.apiHasLoaded(map, maps)}
        >
          {places.map(place => (
              <Marker
                key={place.id}
                text={place.name}
                lat={place.geometry.location.lat()}
                lng={place.geometry.location.lng()}
              />
            ))}
          
        </GoogleMap>
      </div>
    );
  }
}
//!isEmpty(places) &&
export default Search;

{/* <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
          >
            <div>
              <h4>{this.state.selectedPlace.name}</h4>
            </div>
          </InfoWindow> */}