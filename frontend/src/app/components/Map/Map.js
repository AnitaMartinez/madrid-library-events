"use client";

import { attributionOpenStreetMap } from '@/utils/attributionOpenStreetMap';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

export const coordsMadrid = {
    latitude: 40.417147,
    longitude: -3.703494,
}

function Map() {

    return (
        <div style={{ height: "500px", width: "100%" }} >
            <MapContainer
                zoom={12}
                center={[coordsMadrid.latitude, coordsMadrid.longitude]}
                style={{ height: "100%", width: "100%" }}
            >
                <TileLayer
                    url={attributionOpenStreetMap.url}
                    attribution={attributionOpenStreetMap.attribution}
                />
                <Marker position={[coordsMadrid.latitude, coordsMadrid.longitude]} draggable={false}>
                    <Popup>Hey</Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}

export default Map;