import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import marker images
import markerIconUrl from 'leaflet/dist/images/marker-icon.png';
import markerShadowUrl from 'leaflet/dist/images/marker-shadow.png';
import markerIcon2xUrl from 'leaflet/dist/images/marker-icon-2x.png';

// Set a default icon for the marker
const DefaultIcon = L.icon({
    iconUrl: markerIconUrl,
    iconSize: [25, 41], // size of the icon
    iconAnchor: [12, 41], // point of the icon which will correspond to marker's location
    shadowUrl: markerShadowUrl,
    shadowSize: [41, 41], // size of the shadow
    shadowAnchor: [12, 41], // point of the shadow which will correspond to marker's location
    iconRetinaUrl: markerIcon2xUrl,
});

L.Marker.prototype.options.icon = DefaultIcon;

const TrackingPage = () => {
    const [position, setPosition] = useState([13.0827, 80.2707]); // Default to Chennai coordinates
    const [error, setError] = useState(null);
    const [watchId, setWatchId] = useState(null);

    useEffect(() => {
        if (navigator.geolocation) {
            const id = navigator.geolocation.watchPosition(
                (pos) => {
                    const { latitude, longitude } = pos.coords;
                    setPosition([latitude, longitude]);
                },
                (err) => {
                    setError(err.message);
                },
                { enableHighAccuracy: true }
            );
            setWatchId(id);
        } else {
            setError("Geolocation is not supported by this browser.");
        }

        // Cleanup on component unmount
        return () => {
            if (watchId) {
                navigator.geolocation.clearWatch(watchId);
            }
        };
    }, [watchId]);

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="container text-center">
                <h1>Tracking Page</h1>
                <p>Here you can track your location in real-time:</p>
                {error && <p className="alert alert-danger">{error}</p>}
                <MapContainer center={position} zoom={15} style={{ height: '400px', width: '100%', margin: '10px 0' }}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={position}>
                        <Popup>
                            Your current location <br /> Latitude: {position[0].toFixed(5)}, Longitude: {position[1].toFixed(5)}
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    );
};

export default TrackingPage;
