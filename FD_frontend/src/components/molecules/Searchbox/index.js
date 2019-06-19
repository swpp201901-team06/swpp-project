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
`

class Search extends Component {
  constructor(props) {
    super(props)

    this.state = {
      mapApiLoaded: false,
      mapInstance: null,
      mapApi: null,
      placesList: [],
      placesDict: {},
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
    this.setState({ placesList: place })
    let newPlacesDict = {}
    this.state.placesList.map(place => {
      newPlacesDict[place.id] = place
      return null
    })
    this.setState({ placesDict: newPlacesDict })
  }

  confirmRest = (id) => {
    const onConfirmRest = this.props.onConfirmRest
    const place = this.state.placesDict[id]
    const restName = place.name
    const address = place.formatted_address
    const latitude = place.geometry.location.lat()
    const longitude = place.geometry.location.lng()
    onConfirmRest(restName, address, latitude, longitude)
  }

  render() {
    const {
      placesList, mapApiLoaded, mapInstance, mapApi,
    } = this.state
    return (
      <div>
        <Wrapper>
          {mapApiLoaded && <SearchBox map={mapInstance} mapApi={mapApi} addplace={this.addPlace} />}
          {this.state.placesList.length > 0 ? 'Please select the marker' : ''}
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
            {placesList.map(place => {
              const onClickMarker = () => {
                this.confirmRest(place.id)
              }
              return (<Marker
                key={place.id}
                text={place.name}
                lat={place.geometry.location.lat()}
                lng={place.geometry.location.lng()}
                onClick={onClickMarker}
              />)
            })}
          </GoogleMap>
        </Wrapper>
      </div>
    )
  }
}
//!isEmpty(places) &&

export default Search
