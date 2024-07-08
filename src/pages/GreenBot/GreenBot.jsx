import React, { useState, useEffect } from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { NavBar } from '../../components/NavBar/NavBar';
import { BottomNav } from '../../components/BottomNav/BottomNav';
import resourcesMarker from '../../assets/markers/resources-bubble.svg';
import activismMarker from '../../assets/markers/activism-bubble.svg';
import recyclingMarker from '../../assets/markers/recycling-bubble.svg';

const apiKey = 'AIzaSyBuVbGaY5SkFzQzvyNlZiCZGpStHABRtlA';

const libraries = ['places'];
const mapContainerStyle = {
    width: '100vw',
    height: '100vh'
};
const center = {
    lat: 40.72502225127109,
    lng: -73.99637025765999,
};

export const GreenBot = () => {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: apiKey,
        libraries,
    });

    const [activeMarker, setActiveMarker] = useState(null);

    // Sample data
    const [markers, setMarkers] = useState([
        { lat: 40.72, lng: -73.98, type: 'recycling', title: 'Recycling Center 1' },
        { lat: 40.73, lng: -74.00, type: 'activism', title: 'Environmental Rally' },
        { lat: 40.74, lng: -73.99, type: 'resources', title: 'Sustainable Living Workshop' },
    ]);

    useEffect(() => {
        // Fetch marker data from backend/API here
        // and update the 'markers' state using setMarkers
    }, []);

    const handleActiveMarker = (marker) => {
        if (marker === activeMarker) {
            return;
        }
        setActiveMarker(marker);
    };

    if (loadError) return <div>Error loading maps</div>;
    if (!isLoaded) return <div>Loading maps...</div>;

    return (
        <main>
            <NavBar />
            <div>
                <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    zoom={10}
                    center={center}
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
            </div>
            <BottomNav />
        </main>
    );
};
