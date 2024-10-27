import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
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

const StoryPage = () => {
    const [story, setStory] = useState('');
    const [location, setLocation] = useState(null);
    const [success, setSuccess] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e) => {
        setStory(e.target.value);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted story:', story);
        console.log('Selected location:', location);
        setStory(''); // Clear the input field
        setLocation(null); // Clear the location
        setSuccess(true); // Show success message
    };

    const handleSearch = async () => {
        if (!searchTerm) return;

        try {
            const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(searchTerm)}`);
            const data = await response.json();
            if (data.length > 0) {
                const { lat, lon } = data[0];
                setLocation({ lat: parseFloat(lat), lng: parseFloat(lon) });
                map.setView([lat, lon], 13); // Change map view to the searched location
            } else {
                alert("Location not found.");
            }
        } catch (error) {
            console.error("Error fetching location:", error);
        }
    };

    const LocationMarker = () => {
        const map = useMapEvents({
            click(e) {
                setLocation(e.latlng);
            },
        });

        return location === null ? null : (
            <Marker position={location} />
        );
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="container text-center">
                <h1>Story Page</h1>
                <p>Share your story anonymously:</p>
                <form onSubmit={handleSubmit} className="mb-3" style={{ maxWidth: '600px' }}>
                    <textarea
                        value={story}
                        onChange={handleChange}
                        placeholder="Write your story here..."
                        rows="5"
                        required
                        className="form-control mb-2"
                    />
                    <button type="submit" className="btn btn-primary" disabled={!location}>Submit Story</button>
                </form>

                {/* Search Location */}
                <div className="mb-3" style={{ maxWidth: '600px' }}>
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        placeholder="Search for a location..."
                        className="form-control mb-2"
                    />
                    <button onClick={handleSearch} className="btn btn-secondary">Search</button>
                </div>

                <MapContainer center={[13.0827, 80.2707]} zoom={13} style={{ height: '400px', width: '100%', margin: '10px 0' }}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <LocationMarker />
                </MapContainer>
                {location && (
                    <p>
                        Selected location: Latitude: {location.lat}, Longitude: {location.lng}
                    </p>
                )}
                {success && <p className="alert alert-success">Your story has been submitted successfully!</p>}
            </div>
        </div>
    );
};

export default StoryPage;
