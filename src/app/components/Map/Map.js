"use client";

import { attributionOpenStreetMap } from '@/utils/attributionOpenStreetMap';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import ContentMapPopup from '../ContentMapPopup/ContentMapPopup';

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

export const coordsMadrid = {
    latitude: 40.417147,
    longitude: -3.703494,
}

function Map({ libraryEvents = [] }) {

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