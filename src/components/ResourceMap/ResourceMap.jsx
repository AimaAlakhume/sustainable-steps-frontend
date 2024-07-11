import React, { useState, useEffect } from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
import resourcesMarker from '../../assets/markers/resources-bubble.svg';
import activismMarker from '../../assets/markers/activism-bubble.svg';
import recyclingMarker from '../../assets/markers/recycling-bubble.svg';

const apiKey = import.meta.env.VITE_APIKEY;

const libraries = ['places'];
const mapContainerStyle = {
    width: '100vw',
    height: '100vh'
};
const center = {
    lat: 40.72502225127109,
    lng: -73.99637025765999,
};

export const ResourceMap = () => {
    const { isLoaded, loadError } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: apiKey,
        libraries,
    });

    const [activeMarker, setActiveMarker] = useState(null);

    const [markers, setMarkers] = useState([
        { lat: 40.72, lng: -73.98, type: 'recycling', title: 'Recycling Center 1' },
        { lat: 40.73, lng: -74.00, type: 'activism', title: 'Environmental Rally' },
        { lat: 40.74, lng: -73.99, type: 'resources', title: 'Sustainable Living Workshop' },
    ]);

    const handleActiveMarker = (marker) => {
        setActiveMarker(marker !== activeMarker ? marker : null);
    };

    if (loadError) return <div>Error loading maps</div>;
    if (!isLoaded) return <div>Loading maps...</div>;

    return (
        <main>
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={10}
                center={center}
                options={{ gestureHandling: 'cooperative' }}
            >
                {markers.map((marker, index) => {
                    const icon = marker.type === 'activism' ? activismMarker : marker.type === 'recycling' ? recyclingMarker : resourcesMarker;
                    return (
                        <Marker
                            key={index}
                            position={{ lat: marker.lat, lng: marker.lng }}
                            onClick={() => handleActiveMarker(marker)}
                            icon={{
                                url: icon,
                                scaledSize: new window.google.maps.Size(40, 40)
                            }}
                        >
                            {activeMarker === marker && (
                                <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                                    <div>{marker.title}</div>
                                </InfoWindow>
                            )}
                        </Marker>
                    )
                })}
            </GoogleMap>
        </main>
    );
};
