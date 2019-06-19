import React, { Component, Fragment } from 'react';
import styled from 'styled-components'
//import isEmpty from 'lodash.isempty';

import Marker from '../../atoms/Marker';
import GoogleMap from '../../atoms/GoogleMap';
import SearchBox from '../../atoms/SearchBox';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  flex-direction: column;
  text-align:center;
`

class ReviewMap extends Component {
  constructor(props) {
    super(props)

    this.state = {
      mapApiLoaded: false,
      mapInstance: null,
      mapApi: null,
      places: [],
    }
  }

  apiHasLoaded = (map, maps) => {
    this.setState({
      mapApiLoaded: true,
      mapInstance: map,
      mapApi: maps,
    })
  }

  addPlace = (place) => {
    console.log('Search addPlace')
    console.log(place)
    this.setState({ places: place })
    console.log('Search addPlace after setState')
    console.log(this.state)
  }

  render() {
    const {
      places, mapApiLoaded, mapInstance, mapApi,
    } = this.state
    return (
      <div>
        <Wrapper>
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
            {places.map(place => {
              return <Marker
                key={place.id}
                text={place.name}
                lat={place.geometry.location.lat()}
                lng={place.geometry.location.lng()}
              />
            })}
          </GoogleMap>
        </Wrapper>
      </div>
    )
  }
}
//!isEmpty(places) &&

export default ReviewMap;
