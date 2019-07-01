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
    this.setState({ places: place })
  }

  render() {

    const {
      places, mapApiLoaded, mapInstance, mapApi,
    } = this.state
    const selectedReviewObj = this.props.reviewstate.selectedReviewObj
    return (
      <div>
        {/*mapApiLoaded && <SearchBox map={mapInstance} mapApi={mapApi} />*/}
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
          {
            selectedReviewObj ? (
              <Marker
                text={selectedReviewObj.restName}
                lat={selectedReviewObj.restLat}
                lng={selectedReviewObj.restLong}
              />
            ) : null
          }
        </GoogleMap>
      </div>
    )
  }
}
//!isEmpty(places) &&

export default ReviewMap;