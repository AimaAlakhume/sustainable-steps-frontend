import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { GoogleMap, useJsApiLoader, MarkerF, InfoWindowF } from '@react-google-maps/api';
import resourcesMarker from '../../assets/markers/resources-bubble.svg';
import activismMarker from '../../assets/markers/activism-bubble.svg';
import recyclingMarker from '../../assets/markers/recycling-bubble.svg';

const apiKey = import.meta.env.VITE_APIKEY;
const baseUrl = 'http://localhost:8080';

const libraries = ['places'];
const mapContainerStyle = {
    width: '100%',
    height: '500px'
};
const center = {
    lat: 40.72502225127109,
    lng: -73.99637025765999,
};

export const ResourceMap = () => {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: apiKey,
        libraries,
    });

    const [activeMarker, setActiveMarker] = useState(null);

    const [markers, setMarkers] = useState([]);

    const handleActiveMarker = (marker) => {
        if (marker === activeMarker) {
            setActiveMarker(null);
        } else {
            setActiveMarker(marker);
        }
    };

    const getAllLocations = async () => {
        try {
            const res = await axios.get(`${baseUrl}/locations`);
            setMarkers(res.data);
        } catch (error) {
            console.error('Error fetching locations:', entryRetrievalError);
            setError('Could not load locations.');
        }
    }

    useEffect(() => {
        getAllLocations();
    }, []);

    if (!isLoaded) return <div>Loading maps...</div>;

    return (
        <main>
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={12}
                options={{ gestureHandling: 'cooperative' }}
            >
                {markers.map((marker, index) => (
                    <MarkerF 
                        key={index}
                        position={{ lat: Number(marker.lat), lng: Number(marker.lng) }}
                        onClick={() => handleActiveMarker(marker)}
                        icon={{
                            url: marker.type === 'politics' ? activismMarker : marker.type === 'waste management' ? recyclingMarker : resourcesMarker,
                            scaledSize: new window.google.maps.Size(40, 40)
                        }}
                    >
                        {activeMarker === marker && (
                            <InfoWindowF onCloseClick={() => setActiveMarker(null)}>
                                <div>{marker.location}</div>
                            </InfoWindowF>
                        )}
                    </MarkerF>
                ))}
            </GoogleMap>
        </main>
    );
};
