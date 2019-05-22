import React from 'react';
import { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

export class MapContainer extends React.Component {
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };
   state = {
    showingInfoWindow: false,  //Hides or the shows the infoWindow
    activeMarker: {},          //Shows the active marker upon click
    selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
  };

}
