import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  render() {
    return (
      <Map google={this.props.google} zoom={14} style={{width: '100%', height: '460px', position: 'relative'}} className={'map'}
       onClick={this.onMapClicked}
       initialCenter={{
           lat: 31.742114,
           lng: 35.066149
         }}
       >
  <Marker onClick={this.onMarkerClick}
    title={'The marker`s title will appear as a tooltip.'}
    name={'פיצ\'ונקה - נס הרים, 9988500'}
    position={{lat: 31.742114, lng: 35.066149}}
     />

     <InfoWindow
       marker={this.state.activeMarker}
       visible={this.state.showingInfoWindow}>
         <div>
           <h1>{this.state.selectedPlace.name}</h1>
         </div>
     </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyBtz1k5ufj6N8SEokFGuB3aCyZLD24n5P4')
})(MapContainer)
