"use client";

import { attributionOpenStreetMap } from '@/utils/attributionOpenStreetMap';
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import ContentMapPopup from '../ContentMapPopup/ContentMapPopup';

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

export const coordsMadrid = {
    latitude: 40.417147,
    longitude: -3.703494,
};

function SetZoom({ zoom, center }) {
    const map = useMap();
    map.setView(center, zoom);
    return null;
}

function Map({ libraryEvents = [], isByDistrict }) {
    console.log("🚀 ~ Map ~ libraryEvents:", libraryEvents)
    const zoom = isByDistrict ? 13 : 12;

    const eventCoordenates = isByDistrict ? libraryEvents?.length > 0 && libraryEvents[0]?.coordenates : coordsMadrid;
    const latitude = eventCoordenates.latitude || coordsMadrid.latitude;
    const longitude = eventCoordenates.longitude || coordsMadrid.longitude;


    return (
        <div style={{ height: "500px", width: "100%" }} >
            <MapContainer
                zoom={zoom}
                center={[latitude, longitude]}
                style={{ height: "100%", width: "100%" }}
            >
                <SetZoom zoom={zoom} center={[latitude, longitude]} />
                <TileLayer
                    url={attributionOpenStreetMap.url}
                    attribution={attributionOpenStreetMap.attribution}
                />
                {
                    libraryEvents.map(event => {
                        const position = [
                            event.coordenates ? event.coordenates.latitude : coordsMadrid.latitude,
                            event.coordenates ? event.coordenates.longitude : coordsMadrid.longitude,
                        ]
                        return (
                            <Marker key={event.id} position={position} draggable={false}>
                                <Popup>
                                    <ContentMapPopup libraryEvent={event} />
                                </Popup>
                            </Marker>
                        )
                    })
                }

            </MapContainer>
        </div>
    );
}

export default Map;