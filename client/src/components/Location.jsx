import React from 'react'
import MapContainer from '../utils/MapContainer'
import ScrollableAnchor from 'react-scrollable-anchor'
export default props => {
    const { id } = props
    return <ScrollableAnchor id={id}>
        <div style={{
            "marginTop": "0px",
            "height": "460px",
            "backgroundColor": "lightblue"
        }}> <MapContainer /> <div id="map"></div> </div>
    </ScrollableAnchor>
}