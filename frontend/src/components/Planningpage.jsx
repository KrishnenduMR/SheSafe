import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import L from 'leaflet';

const PlanningPage = () => {
    const [position, setPosition] = useState([13.0827, 80.2707]); // Default to Chennai coordinates
    const [dangerAreas, setDangerAreas] = useState([]); // Replace with actual data from your API

    useEffect(() => {
        // Fetch dangerous areas data (for demonstration, hardcoded data is used here)
        const fetchDangerAreas = async () => {
            // Simulate fetching data
            const areas = [
                { coords: [13.0827, 80.2707], isDangerous: true }, // Chennai
                { coords: [13.0674, 80.2376], isDangerous: false }, // Example safe area
            ];
            setDangerAreas(areas);
        };
        fetchDangerAreas();
    }, []);

    const handleLocationSearch = (event) => {
        event.preventDefault();
        const location = event.target.location.value;

        // Here you would implement a location search logic
        // For now, let's just simulate by setting the position to Chennai
        if (location) {
            // You would normally use a geocoding API to get lat/lng from location
            setPosition([13.0827, 80.2707]); // Update to the searched location
        }
    };

    return (
        <div>
            <h1>Planning Page</h1>
            <p>Check for danger</p>
            <form onSubmit={handleLocationSearch}>
                <input type="text" name="location" placeholder="Search for a location" />
                <button type="submit">Search</button>
            </form>
            <MapContainer center={position} zoom={13} style={{ height: '500px', width: '100%' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {dangerAreas.map((area, index) => (
                    <Marker 
                        key={index}
                        position={area.coords}
                        icon={L.divIcon({
                            className: 'custom-icon',
                            html: `<div style="background-color: ${area.isDangerous ? 'red' : 'green'}; border-radius: 50%; width: 10px; height: 10px;"></div>`
                        })}
                    />
                ))}
            </MapContainer>
        </div>
    );
};

export default PlanningPage;
